const links = require("../utils/links");

exports.getCreateMessage = (req, res, next) => {
  if (req.isAuthenticated() && req.user.membership_status) {
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
