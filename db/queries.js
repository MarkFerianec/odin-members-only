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

exports.createMessage = async (username, title, text, timestamp) => {
  await pool.query(
    "INSERT INTO messages (username, title, text, timestamp) VALUES ($1, $2, $3, $4)",
    [username, title, text, timestamp]
  );
};

exports.getAllMessages = async () => {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
};

exports.becomeAdmin = async (username) => {
  await pool.query(
    "UPDATE users SET admin_status = TRUE WHERE username = ($1)",
    [username]
  );
};

exports.deleteMessage = async (message_id) => {
  await pool.query("DELETE FROM messages WHERE id = ($1)", [message_id]);
};
