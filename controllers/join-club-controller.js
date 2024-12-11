const links = require("../utils/links");

const db = require("../db/queries");

const { body, validationResult } = require("express-validator");

exports.getJoinClub = (req, res, next) => {
  if (
    req.isAuthenticated() &&
    req.user.membership_status &&
    req.user.admin_status
  ) {
    res.render("index", {
      links: links.clubMemberAndAdminLinks,
      user: req.user,
    });
  } else if (req.isAuthenticated() && req.user.membership_status) {
    res.render("index", {
      links: links.userAndClubMemberLinks,
      user: req.user,
    });
  } else if (req.isAuthenticated()) {
    res.render("join-club", {
      links: links.userNonClubMemberLinks,
    });
  } else {
    // This might cause an error if someone uses it and they are not a user
    // res.render("join-club", { links: links.nonUserLinks });

    res.send("Please sign up first");
  }
};

const validatePasscode = [
  body("passcode")
    .trim()
    .isLength({ min: 4, max: 12 })
    .withMessage("Passcode must be between 4 and 12 characters")
    .escape(),
];

exports.postJoinClub = [
  validatePasscode,
  async (req, res, next) => {
    const errors = validationResult(req);

    if (errors.isEmpty() && req.body.passcode === "1234") {
      await db.becomeClubMember(req.user.username);
      res.redirect("/");
    } else {
      res.render("join-club", {
        errors: errors.array(),
        links: links.userNonClubMemberLinks,
      });
    }
  },
];
