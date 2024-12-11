const express = require("express");
const app = express();

const session = require("express-session");
const passport = require("passport");
const pool = require("./db/pool");

const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/favicon.ico", express.static("images/favicon.ico"));

app.use(express.urlencoded({ extended: true }));

const router = require("./routes/router");

require("./config/passport");
const middleware = require("./utils/middleware");

app.use(
  session({
    store: new (require("connect-pg-simple")(session))({
      // Insert connect-pg-simple options here
      pool: pool,
    }),
    secret: process.env.secret,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1 * 24 * 60 * 60 * 1000 }, // 1 day
  })
);

app.use(passport.session());

app.use("/", router);

app.use(middleware.errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Express app - listening on port ${PORT}!`);
});
