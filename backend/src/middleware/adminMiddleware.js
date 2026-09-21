const jwt = require("jsonwebtoken");

const adminAuthMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.adminToken;

    if (!token) {
      return res.status(401).json({
        message: "Admin authentication required",
        success: false,
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded.isAdmin) {
      return res.status(403).json({
        message: "Admin access denied",
        success: false,
      });
    }

    req.admin = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired admin token",
      success: false,
    });
  }
};

module.exports = adminAuthMiddleware;