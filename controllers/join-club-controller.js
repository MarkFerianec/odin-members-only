const links = require("../utils/links");

const db = require("../db/queries");

exports.getJoinClub = (req, res, next) => {
  if (req.isAuthenticated() && req.user.membership_status) {
    res.render("index", {
      links: links.userAndClubMemberLinks,
      user: req.user,
    });
  } else if (req.isAuthenticated()) {
    res.render("join-club", {
      links: links.userNonClubMemberLinks,
    });
  } else {
    // This might cause an error if someone uses it and they are not a user
    // res.render("join-club", { links: links.nonUserLinks });

    res.send("Please sign up first");
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
