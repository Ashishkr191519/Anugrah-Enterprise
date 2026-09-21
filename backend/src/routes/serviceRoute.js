const express = require("express");
const { getAllServices, createService } = require("../controller/serviceController");



const serviceRouter = express.Router();


// ye api getAll services ke liye hai 

serviceRouter.get("/service",getAllServices)
serviceRouter.post("/service/create",createService)



module.exports = serviceRouter