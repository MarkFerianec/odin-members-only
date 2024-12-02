const links = require("../utils/links");

// const db = require("../db/queries");

exports.getJoinClub = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.render("join-club", {
      links: links.userNonClubMemberLinks,
    });
  } else {
    res.render("join-club", { links: links.nonUserLinks });
  }
};

exports.postJoinClub = (req, res, next) => {
  res.send("Test");
};
