const { body, validationResult } = require("express-validator");

const validateRequest = [
  body("service").notEmpty().withMessage("Service is required"),

  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ max: 100 })
    .withMessage("Name is too long"),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone is required")
    .isMobilePhone("any")
    .withMessage("Invalid phone number"),

  body("email")
    .optional({ values: "falsy" })
    .trim()
    .isEmail()
    .withMessage("Invalid email"),

  body("address")
    .trim()
    .notEmpty()
    .withMessage("Address is required")
    .isLength({ max: 500 })
    .withMessage("Address is too long"),

  body("description")
    .optional({ values: "falsy" })
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Description is too long"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    next();
  },
];

module.exports = validateRequest;
