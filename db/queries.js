const pool = require("./pool");

exports.addUser = async (username, password) => {
  await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
    username,
    password,
  ]);
};

exports.becomeClubMember = async (username) => {
  await pool.query(
    "UPDATE users SET membership_status = TRUE WHERE username = ($1)",
    [username]
  );
};
