const links = require("../utils/links");

const db = require("../db/queries");

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

exports.postBecomeAdmin = async (req, res, next) => {
  if (req.body.passcode === "1234") {
    await db.becomeAdmin(req.user.username);
    res.send("Correct passcode");
  } else {
    res.send("Wrong passcode");
  }
};
