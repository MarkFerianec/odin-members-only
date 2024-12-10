const links = require("../utils/links");

const db = require("../db/queries");

const bcrypt = require("bcryptjs");

const { body, validationResult } = require("express-validator");

exports.getSignUpForm = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.send("You are already signed up");
  } else {
    res.render("sign-up", { links: links.nonUserLinks });
  }
};

const validateUsername = [
  body("username")
    .trim()
    .isLength({ min: 3, max: 20 })
    .withMessage("Username must be between 3 to 20 characters")
    .escape(),
];

const validatePassword = [
  body("confirmPassword")
    .trim()
    .isLength({ min: 4, max: 16 })
    .withMessage("Password must be between 4 to 16 characters")
    .custom(async (confirmPassword, { req }) => {
      const password = req.body.password;

      if (password !== confirmPassword) {
        throw new Error("Passwords must be the same");
      }
    })
    .escape(),
];

exports.postSignUpForm = [
  validateUsername,
  validatePassword,
  async (req, res, next) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        // if err, do something
        // otherwise, store hashedPassword in DB
        try {
          await db.addUser(req.body.username, hashedPassword);
          res.redirect("/");
        } catch (err) {
          return next(err);
        }
      });
    } else {
      res.render("sign-up", {
        errors: errors.array(),
        links: links.nonUserLinks,
      });
    }
  },
];
