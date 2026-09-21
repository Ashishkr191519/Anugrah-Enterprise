const jwt = require("jsonwebtoken");
const requestModel = require("../models/requestModel");
const serviceModel = require("../models/serviceModel");

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check credentials
    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.status(401).json({
        message: "Invalid admin credentials",
        success: false,
      });
    }

    // 2. Create admin token
    const token = jwt.sign(
      {
        email: process.env.ADMIN_EMAIL,
        isAdmin: true,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    // 3. Send token in HTTP-only cookie
    res.cookie("adminToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "Admin login successful",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Admin login failed",
      success: false,
      err: error.message,
    });
  }
};
const getAllRequests = async (req, res) => {
  try {
    const requests = await requestModel
      .find()
      .populate("user")
      .populate("service")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Requests fetched successfully",
      success: true,
      requests,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch requests",
      success: false,
      error: error.message,
    });
  }
};
const getSingleRequest = async (req, res) => {
  try {
    const request = await requestModel
      .findById(req.params.id)
      .populate("user")
      .populate("service");

    if (!request) {
      return res.status(404).json({
        message: "Request not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Request fetched successfully",
      success: true,
      request,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch request",
      success: false,
      error: error.message,
    });
  }
};
const updateRequestStatus = async (req, res) => {
  try {
    const { status } = req.body;

    // Only accepted or rejected are allowed
    if (!["accepted", "rejected"].includes(status)) {
      return res.status(400).json({
        message: "Invalid status",
        success: false,
      });
    }

    const request = await requestModel.findByIdAndUpdate(
      req.params.id,
      { status },
      { returnDocument: "after", runValidators: true },
    );

    if (!request) {
      return res.status(404).json({
        message: "Request not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: `Request ${status} successfully`,
      success: true,
      request,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update request status",
      success: false,
      error: error.message,
    });
  }
};

const getAllServices = async (req, res) => {
  try {
    const services = await serviceModel.find().sort({ _id: -1 });

    return res.status(200).json({
      message: "Services fetched successfully",
      success: true,
      services,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch services",
      success: false,
      error: error.message,
    });
  }
};

const createService = async (req, res) => {
  try {
    const { title, description, tag } = req.body;

    if (!title || !description || !tag) {
      return res.status(400).json({
        message: "Title, description and tag are required",
        success: false,
      });
    }

    const service = await serviceModel.create({
      title,
      description,
      tag,
    });

    return res.status(201).json({
      message: "Service created successfully",
      success: true,
      service,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create service",
      success: false,
      error: error.message,
    });
  }
};
const updateService = async (req, res) => {
  try {
    const { title, description, tag } = req.body;

    const service = await serviceModel.findByIdAndUpdate(
      req.params.id,
      {
        title: title.trim(),
        description: description.trim(),
        tag: tag.trim(),
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!service) {
      return res.status(404).json({
        message: "Service not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Service updated successfully",
      success: true,
      service,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update service",
      success: false,
      error: error.message,
    });
  }
};
const deleteService = async (req, res) => {
  try {
    const service = await serviceModel.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({
        message: "Service not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Service deleted successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete service",
      success: false,
      error: error.message,
    });
  }
};
const adminLogout = async (req, res) => {
  try {
    res.clearCookie("adminToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    });

    return res.status(200).json({
      message: "Admin logout successful",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Admin logout failed",
      success: false,
    });
  }
};
module.exports = {
  adminLogin,
  getAllRequests,
  getSingleRequest,
  updateRequestStatus,
  getAllServices,
  createService,
  updateService,
  deleteService,
  adminLogout,
};
