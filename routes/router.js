const { Router } = require("express");

const router = Router();

const indexController = require("../controllers/index-controller");
const signUpController = require("../controllers/sign-up-controller");

router.get("/", indexController.getIndex);

router.get("/sign-up", signUpController.getSignUpForm);

module.exports = router;
