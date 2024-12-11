const links = require("../utils/links");

const db = require("../db/queries");

const { body, validationResult } = require("express-validator");

exports.getCreateMessage = (req, res, next) => {
  if (
    req.isAuthenticated() &&
    req.user.membership_status &&
    req.user.admin_status
  ) {
    res.render("create-message", {
      links: links.clubMemberAndAdminLinks,
    });
  } else if (req.isAuthenticated() && req.user.membership_status) {
    res.render("create-message", {
      links: links.userAndClubMemberLinks,
    });
  } else if (req.isAuthenticated()) {
    res.render("create-message", {
      links: links.userNonClubMemberLinks,
    });
  } else {
    res.send("Please sign up and/or log in first");
  }
};

const validateTitle = [
  body("title")
    .trim()
    .isLength({ min: 4, max: 25 })
    .withMessage("Title must be between 4 and 25 characters")
    .escape(),
];

const validateText = [
  body("text")
    .trim()
    .isLength({ min: 4, max: 50 })
    .withMessage("Text must be between 4 and 50 characters")
    .escape(),
];

exports.postCreateMessage = [
  validateTitle,
  validateText,
  async (req, res, next) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const timestamp = new Date().toString();

      await db.createMessage(
        req.user.username,
        req.body.title,
        req.body.text,
        timestamp
      );

      res.redirect("/");
    } else if (
      req.isAuthenticated() &&
      req.user.membership_status &&
      req.user.admin_status
    ) {
      res.render("create-message", {
        links: links.clubMemberAndAdminLinks,
        errors: errors.array(),
      });
    } else if (req.isAuthenticated() && req.user.membership_status) {
      res.render("create-message", {
        links: links.userAndClubMemberLinks,
        errors: errors.array(),
      });
    } else if (req.isAuthenticated()) {
      res.render("create-message", {
        links: links.userNonClubMemberLinks,
        errors: errors.array(),
      });
    } else {
      res.send("Please sign up and/or log in first");
    }
  },
];
