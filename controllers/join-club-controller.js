const links = require("../utils/links");

exports.getJoinClub = (req, res, next) => {
  res.render("join-club", { links: links });
};
