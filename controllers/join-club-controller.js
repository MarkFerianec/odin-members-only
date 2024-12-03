const links = require("../utils/links");

const db = require("../db/queries");

exports.getJoinClub = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.render("join-club", {
      links: links.userNonClubMemberLinks,
    });
  } else {
    res.render("join-club", { links: links.nonUserLinks });
  }
};

exports.postJoinClub = async (req, res, next) => {
  if (req.body.passcode === "1234") {
    await db.becomeClubMember(req.user.username);
    res.send("Correct passcode");
  } else {
    res.send("Wrong passcode");
  }
};
