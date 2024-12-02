const links = require("../utils/links");

const passport = require("passport");

exports.getLogin = (req, res, next) => {
  res.render("login", { links: links });
};

exports.postLogin =
  ("/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  }));
