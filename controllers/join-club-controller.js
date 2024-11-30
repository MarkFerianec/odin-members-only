const links = require("../utils/links");

// const db = require("../db/queries");

exports.getJoinClub = (req, res, next) => {
  res.render("join-club", { links: links });
};

exports.postJoinClub = (req, res, next) => {
  res.send("Test");
};
