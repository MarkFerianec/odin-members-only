const { Router } = require("express");

const router = Router();

const indexController = require("../controllers/index-controller");
const signUpController = require("../controllers/sign-up-controller");
const joinClubController = require("../controllers/join-club-controller");
const loginController = require("../controllers/login-controller");
const logoutController = require("../controllers/logout-controller");
const createMessageController = require("../controllers/create-message-controller");
const becomeAdminController = require("../controllers/become-admin-controller");

router.get("/", indexController.getIndex);

router.get("/sign-up", signUpController.getSignUpForm);
router.post("/sign-up", signUpController.postSignUpForm);

router.get("/login", loginController.getLogin);
router.post("/login", loginController.postLogin);

router.get("/logout", logoutController.getLogout);

router.get("/join-club", joinClubController.getJoinClub);
router.post("/join-club", joinClubController.postJoinClub);

router.get("/create-message", createMessageController.getCreateMessage);
router.post("/create-message", createMessageController.postCreateMessage);

router.get("/become-admin", becomeAdminController.getBecomeAdmin);
router.post("/become-admin", becomeAdminController.postBecomeAdmin);

module.exports = router;
