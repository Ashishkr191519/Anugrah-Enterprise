const requestModel = require("../models/requestModel");

const createRequest = async (req, res) => {
  try {
    const { service, name, phone, email, address, description } = req.body;

    const request = await requestModel.create({
      user: req.user.id,
      service,
      name,
      phone,
      email,
      address,
      description,
    });

    return res.status(201).json({
      success: true,
      message: "Service request submitted successfully",
      request,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to submit service request",
    });
  }
};

const getMyRequests = async (req, res) => {
  try {
    const requests = await requestModel
      .find({
        user: req.user.id,
      })
      .populate("service", "title");

    return res.status(200).json({
      success: true,
      requests,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch service requests",
    });
  }
};

module.exports = {
  createRequest,
  getMyRequests,
};
