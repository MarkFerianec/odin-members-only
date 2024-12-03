const links = require("../utils/links");

const passport = require("passport");

exports.getLogin = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.send("You are already logged in");
  } else {
    res.render("login", { links: links.nonUserLinks });
  }
};

exports.postLogin =
  ("/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  }));
