const serviceModel = require("../models/serviceModel");

const getAllServices = async (req, res) => {
  try {
    const services = await serviceModel.find();
    return res.status(200).json({
      success: true,
      services,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch services",
    });
  }
};

const createService = async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    const service = await serviceModel.create({
      title,
      description,
      tag,
    });

    return res.status(201).json({
      success: true,
      message: "Service created successfully",
      service,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create service",
    });
  }
};

module.exports = {
  getAllServices,
  createService
};
