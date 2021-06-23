const { body } = require("express-validator");

const rules = [
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("this is invalid email"),
    body("password").isLength({ min: 5 }).withMessage("password too short"),
    body("firstName")
      .trim()
      .notEmpty()
      .escape()
      .withMessage("please provide us with firstName"),
    body("lastName")
      .trim()
      .notEmpty()
      .escape()
      .withMessage("please provide us with lastName"),
  ]
  module.exports=rules;