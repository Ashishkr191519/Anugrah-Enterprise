const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
  resendVerification,
} = require("../controller/authController");
const authMiddleware = require("../middleware/authMiddleware");


const authRouter = express.Router();


authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.get("/me",authMiddleware ,getMe);
authRouter.post("/logout",logout)
authRouter.get("/verify-email",verifyEmail)
authRouter.post("/forgot-password", forgotPassword);
authRouter.post("/reset-password", resetPassword);
authRouter.post("/resend-verification", resendVerification);

module.exports = authRouter;
