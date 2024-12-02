const links = require("../utils/links");

exports.getIndex = (req, res, next) => {
  if (req.isAuthenticated() && req.user.membership_status) {
    res.render("index", {
      links: links.userAndClubMemberLinks,
      user: req.user,
    });
  } else if (req.isAuthenticated()) {
    res.render("index", {
      links: links.userNonClubMemberLinks,
      user: req.user,
    });
  } else {
    res.render("index", { links: links.nonUserLinks });
  }
};
