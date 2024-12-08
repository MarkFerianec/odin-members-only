const links = require("../utils/links");

const db = require("../db/queries");

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

exports.postCreateMessage = async (req, res, next) => {
  const timestamp = new Date().toString();

  await db.createMessage(
    req.user.username,
    req.body.title,
    req.body.text,
    timestamp
  );

  res.redirect("/");
};
