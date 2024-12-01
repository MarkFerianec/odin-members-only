const links = require("../utils/links");

exports.getLogin = (req, res, next) => {
  res.render("login", { links: links });
};

exports.postLogin = (req, res, next) => {
  res.send("test");
};
