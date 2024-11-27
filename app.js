const express = require("express");
const app = express();

const path = require("node:path");

app.use("/favicon.ico", express.static("images/favicon.ico"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res, next) => {
  res.render("index");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Express app - listening on port ${PORT}!`);
});
