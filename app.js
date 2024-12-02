const express = require("express");
const app = express();

const session = require("express-session");
const passport = require("passport");

const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/favicon.ico", express.static("images/favicon.ico"));

app.use(express.urlencoded({ extended: true }));

const router = require("./routes/router");

require("./config/passport");

app.use(
  session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: false,
    // cookie age is 1 day
    cookie: { maxAge: 1 * 24 * 60 * 60 * 1000 },
  })
);

app.use(passport.session());

app.use("/", router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Express app - listening on port ${PORT}!`);
});
