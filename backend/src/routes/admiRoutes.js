const express = require("express");
const {
  adminLogin,
  getAllRequests,
  getSingleRequest,
  updateRequestStatus,
  getAllServices,
  createService,
  updateService,
  deleteService,
  adminLogout,
} = require("../controller/adminController");
const adminAuthMiddleware = require("../middleware/adminMiddleware");
const rateLimit = require("express-rate-limit");

const adminRouter = express.Router();

const adminLoginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: "Too many admin login attempts, please try again later.",
  },
});

adminRouter.post("/login", adminLoginLimiter, adminLogin);
adminRouter.get("/dashboard", adminAuthMiddleware, getAllRequests);
adminRouter.get("/requests/:id", adminAuthMiddleware, getSingleRequest);
adminRouter.patch(
  "/requests/:id/status",
  adminAuthMiddleware,
  updateRequestStatus,
);
adminRouter.get("/services", adminAuthMiddleware, getAllServices);
adminRouter.post("/services/create", adminAuthMiddleware, createService);
adminRouter.patch("/services/:id", adminAuthMiddleware, updateService);
adminRouter.delete("/services/:id", adminAuthMiddleware, deleteService);
adminRouter.post("/logout", adminLogout);

module.exports = adminRouter;
