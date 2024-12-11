const links = require("../utils/links");

const db = require("../db/queries");

const { body, validationResult } = require("express-validator");

exports.getBecomeAdmin = (req, res, next) => {
  if (
    req.isAuthenticated() &&
    req.user.membership_status &&
    req.user.admin_status
  ) {
    res.render("become-admin", {
      links: links.clubMemberAndAdminLinks,
      user: req.user,
    });
  } else if (req.isAuthenticated() && req.user.membership_status) {
    res.render("become-admin", {
      links: links.userAndClubMemberLinks,
      user: req.user,
    });
  } else {
    res.send("You must be a club member to become an admin");
  }
};

const validatePasscode = [
  body("passcode")
    .trim()
    .isLength({ min: 4, max: 12 })
    .withMessage("Passcode must be between 4 and 12 characters")
    .escape(),
];

exports.postBecomeAdmin = [
  validatePasscode,
  async (req, res, next) => {
    const errors = validationResult(req);

    if (errors.isEmpty() && req.body.passcode === "1234") {
      await db.becomeAdmin(req.user.username);

      res.redirect("/");
    } else {
      res.render("become-admin", {
        errors: errors.array(),
        links: links.userAndClubMemberLinks,
      });
    }
  },
];
