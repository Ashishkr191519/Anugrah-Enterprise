const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createRequest,
  getMyRequests,
} = require("../controller/requestController");
const validateRequest = require("../middleware/requestValidation");

const requestRouter = express.Router();

requestRouter.post("/request", authMiddleware, validateRequest, createRequest);
requestRouter.get("/my-request", authMiddleware, getMyRequests);

module.exports = requestRouter;
