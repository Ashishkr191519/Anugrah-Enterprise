const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../services/mail.service");

const registerUser = async (req, res) => {
  let { username, email, password, phone } = req.body;

  try {
    const existingUser = await userModel
      .findOne({ $or: [{ email }, { username }, { phone }] })
      .lean();
    if (existingUser) {
      if (existingUser.email === email && !existingUser.isVerified) {
        return res.status(403).json({
          message: "Email already registered but not verified",

          success: false,

          err: "email not verified",
        });
      }

      if (existingUser.email === email) {
        return res.status(409).json({
          message: "Email already exists",

          success: false,

          err: "email already exists",
        });
      }

      if (existingUser.username === username) {
        return res.status(409).json({
          message: "Username already exists",

          success: false,

          err: "username already exists",
        });
      }

      if (existingUser.phone === phone) {
        return res.status(409).json({
          message: "Phone number already exists",

          success: false,

          err: "phone already exists",
        });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      username,
      email,
      password: hashedPassword,
      phone,
      confirmPassword: hashedPassword,
    });
    const emailVerificationToken = jwt.sign(
      { email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    const verificationLink = `http://localhost:3000/api/auth/verify-email?token=${emailVerificationToken}`;

    await sendEmail({
      to: email,
      subject: "Verify your email - Anugrah Enterprise!",
      html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 30px; background-color: #f8f9fa;">
      
      <div style="background-color: #111827; padding: 25px; text-align: center;">
        <h1 style="color: white; margin: 0;">
          Anugrah Enterprise
        </h1>
      </div>

      <div style="background-color: white; padding: 30px;">
        
        <h2 style="color: #111827;">
          Hi ${username},
        </h2>

        <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
          Thank you for registering with
          <strong>Anugrah Enterprise</strong>.
        </p>

        <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
          Please verify your email address to activate your account.
        </p>

        <div style="text-align: center; margin: 30px 0;">
          <a
            href="${verificationLink}"
            style="
              background-color: #111827;
              color: white;
              padding: 12px 25px;
              text-decoration: none;
              border-radius: 6px;
              font-weight: bold;
              display: inline-block;
            "
          >
            Verify Email
          </a>
        </div>

        <p style="color: #6b7280; font-size: 14px;">
          This verification link will expire in 1 hour.
        </p>

        <p style="color: #6b7280; font-size: 14px;">
          If you did not create this account, you can safely ignore this email.
        </p>

        <p style="color: #4b5563;">
          Best regards,<br>
          <strong>Anugrah Enterprise Team</strong>
        </p>

      </div>

      <div style="text-align: center; padding: 15px; color: #9ca3af; font-size: 12px;">
        © 2026 Anugrah Enterprise. All rights reserved.
      </div>

    </div>
  `,
    });
    return res.status(201).json({
      message: "Registered",
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.error("Registration Error:", error);

    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

const verifyEmail = async (req, res) => {
  const { token } = req.query;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await userModel.findOne({ email: decoded.email });
  if (!user) {
    return res.status(404).json({
      message: "User not found",
      success: false,
      err: "user not found",
    });
  }
  user.isVerified = true;
  await user.save();
  const htmelContent = `
  <div style="
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 40px auto;
    padding: 40px 30px;
    background-color: #f8f9fa;
    text-align: center;
  ">

    <div style="
      background-color: #111827;
      padding: 25px;
      border-radius: 10px 10px 0 0;
    ">
      <h1 style="
        color: white;
        margin: 0;
        font-size: 28px;
      ">
        Anugrah Enterprise
      </h1>
    </div>

    <div style="
      background-color: white;
      padding: 40px 30px;
      border-radius: 0 0 10px 10px;
    ">

      <div style="
        font-size: 50px;
        margin-bottom: 15px;
      ">
        ✓
      </div>

      <h2 style="
        color: #111827;
        margin-bottom: 15px;
      ">
        Email Verified Successfully!
      </h2>

      <p style="
        color: #4b5563;
        font-size: 16px;
        line-height: 1.6;
      ">
        Your email address has been successfully verified.
        Your Anugrah Enterprise account is now ready to use.
      </p>

      <a
        href="http://localhost:5173/"
        style="
          display: inline-block;
          margin-top: 20px;
          padding: 13px 28px;
          background-color: #111827;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-size: 15px;
          font-weight: bold;
        "
      >
        Continue to Login
      </a>

      <p style="
        margin-top: 25px;
        color: #9ca3af;
        font-size: 13px;
      ">
        Thank you for choosing Anugrah Enterprise.
      </p>

    </div>

    <p style="
      color: #9ca3af;
      font-size: 12px;
      margin-top: 20px;
    ">
      © 2026 Anugrah Enterprise. All rights reserved.
    </p>

  </div>
`;
  res.send(htmelContent);
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
        success: false,
        err: "Invalid email or password",
      });
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid email or password",
        success: false,
        err: "Invalid email or password",
      });
    }
    if (!user.isVerified) {
      return res.status(403).json({
        message: "Email not verified. Please verify your email.",
        success: false,
        err: "Email not verified",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({
      message: "Login successful",
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Login Error",
      success: false,
      err: "Login Error",
    });
  }
};

const getMe = async (req, res) => {
  const userId = req.user.id;

  const user = await userModel.findById(userId).select("-password");
  if (!user) {
    return res.status(404).json({
      message: "User not found",
      success: false,
      err: "user not found",
    });
  }
  return res.status(200).json({
    message: "User found",
    success: true,
    user,
  });
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token");

    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Logout failed",
    });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
        err: "User not found",
      });
    }

    const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

    await user.save();

    const resetLink = `http://localhost:5173/reset-password?token=${resetToken}`;

    await sendEmail({
      to: user.email,
      subject: " Anugrah Enterprise - Reset Your Password",
      html: `
    <div style="
      font-family: Arial, sans-serif;
      max-width: 600px;
      margin: auto;
      padding: 30px;
      background-color: #f8f9fa;
    ">

      <div style="
        background-color: #111827;
        padding: 25px;
        text-align: center;
      ">
        <h1 style="color: white; margin: 0;">
          Anugrah Enterprise
        </h1>
      </div>

      <div style="
        background-color: white;
        padding: 30px;
      ">

        <h2 style="color: #111827;">
          Password Reset Request
        </h2>

        <p style="
          color: #4b5563;
          font-size: 16px;
          line-height: 1.6;
        ">
          We received a request to reset the password for your
          Anugrah Enterprise account.
        </p>

        <div style="text-align: center; margin: 30px 0;">
          <a
            href="${resetLink}"
            style="
              background-color: #111827;
              color: white;
              padding: 12px 25px;
              text-decoration: none;
              border-radius: 6px;
              font-weight: bold;
              display: inline-block;
            "
          >
            Reset Password
          </a>
        </div>

        <p style="
          color: #6b7280;
          font-size: 14px;
        ">
          This link will expire in 1 hour.
        </p>

        <p style="
          color: #6b7280;
          font-size: 14px;
        ">
          If you did not request a password reset, you can safely
          ignore this email.
        </p>

        <p style="color: #4b5563;">
          Best regards,<br>
          <strong>Anugrah Enterprise Team</strong>
        </p>

      </div>

      <div style="
        text-align: center;
        padding: 15px;
        color: #9ca3af;
        font-size: 12px;
      ">
        © 2026 Anugrah Enterprise. All rights reserved.
      </div>

    </div>
  `,
    });
    // Send email with reset link
    // ...

    return res.status(200).json({
      message: "Reset password link sent to your email",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error occurred while sending reset password link",
      success: false,
      err: "Error occurred while sending reset password link",
    });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findOne({
      _id: decoded.id,
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid or expired reset token",
        success: false,
        err: "Invalid or expired reset token",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    return res.status(200).json({
      message: "Password reset successful",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error occurred while resetting password",
      success: false,
      err: "Error occurred while resetting password",
    });
  }
};

const resendVerification = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
        err: "User not found",
      });
    }

    if (user.isVerified) {
      return res.status(400).json({
        message: "Email is already verified",
        success: false,
        err: "Email is already verified",
      });
    }

    const emailVerificationToken = jwt.sign(
      { email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    const verificationLink = `http://localhost:3000/api/auth/verify-email?token=${emailVerificationToken}`;

    await sendEmail({
      to: email,
      subject: " Anugrah Enterprise - Verify your email",
      html: `
        <p>Hi ${user.username},</p>
        <p>Please verify your email address to activate your account.</p>
        <a href="${verificationLink}">Verify Email</a>
        <p>This verification link will expire in 1 hour.</p>
        <p>If you did not create this account, you can safely ignore this email.</p>
        <p>Best regards,<br>Anugrah Enterprise Team</p>
      `,
    });

    return res.status(200).json({
      message: "Verification email resent successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error occurred while resending verification email",
      success: false,
      err: "Error occurred while resending verification email",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
  forgotPassword,
  resendVerification,
  logout,
  verifyEmail,
  resetPassword,
};
