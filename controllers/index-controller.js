const links = require("../utils/links");

const db = require("../db/queries");

exports.getIndex = async (req, res, next) => {
  const messages = await db.getAllMessages();

  if (
    req.isAuthenticated() &&
    req.user.membership_status &&
    req.user.admin_status
  ) {
    res.render("index", {
      links: links.clubMemberAndAdminLinks,
      user: req.user,
      messages: messages,
    });
  } else if (req.isAuthenticated() && req.user.membership_status) {
    res.render("index", {
      links: links.userAndClubMemberLinks,
      user: req.user,
      messages: messages,
    });
  } else if (req.isAuthenticated()) {
    res.render("index", {
      links: links.userNonClubMemberLinks,
      user: req.user,
      messages: messages,
    });
  } else {
    res.render("index", { links: links.nonUserLinks, messages: messages });
  }
};

exports.deleteMessage = async (req, res, next) => {
  const { message_id } = req.params;

  await db.deleteMessage(message_id);

  res.redirect("/");
};
