const links = require("../utils/links");

exports.getIndex = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.render("index", {
      links: links.userNonClubMemberLinks,
      user: req.user,
    });
  } else {
    res.render("index", { links: links.nonUserLinks });
  }
};
