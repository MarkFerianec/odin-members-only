const links = require("../utils/links");

exports.getLogin = (req, res, next) => {
  res.render("login", { links: links });
};
