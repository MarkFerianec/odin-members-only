const { Router } = require("express");

const router = Router();

const indexController = require("../controllers/index-controller");
const signUpController = require("../controllers/sign-up-controller");
const joinClubController = require("../controllers/join-club-controller");
const loginController = require("../controllers/login-controller");

router.get("/", indexController.getIndex);

router.get("/sign-up", signUpController.getSignUpForm);
router.post("/sign-up", signUpController.postSignUpForm);

router.get("/login", loginController.getLogin);
router.post("/login", loginController.postLogin);

router.get("/join-club", joinClubController.getJoinClub);
router.post("/join-club", joinClubController.postJoinClub);

module.exports = router;
