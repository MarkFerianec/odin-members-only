const { Router } = require("express");

const router = Router();

const indexController = require("../controllers/index-controller");
const signUpController = require("../controllers/sign-up-controller");
const joinClubController = require("../controllers/join-club-controller");

router.get("/", indexController.getIndex);

router.get("/sign-up", signUpController.getSignUpForm);
router.post("/sign-up", signUpController.postSignUpForm);

router.get("/join-club", joinClubController.getJoinClub);

module.exports = router;
