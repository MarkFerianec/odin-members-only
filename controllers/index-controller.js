const links = require("../utils/links");

exports.getIndex = (req, res, next) => {
  res.render("index", { links: links, user: req.user });
};
