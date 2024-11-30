const { body, validationResult } = require("express-validator");

exports.getSignUpForm = (req, res, next) => {
  res.render("sign-up");
};

const validatePassword = [
  body("confirmPassword")
    .trim()
    .isLength({ min: 4, max: 16 })
    .withMessage("Password must be between 4 to 16 characters")
    .custom(async (confirmPassword, { req }) => {
      const password = req.body.password;

      if (password !== confirmPassword) {
        throw new Error("Passwords must be same");
      }
    })
    .escape(),
];

exports.postSignUpForm = [
  validatePassword,
  async (req, res, next) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      res.send("No errors");
    } else {
      res.render("sign-up", { errors: errors.array() });
    }
  },
];
