const { default: mongoose } = require("mongoose");

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    required: true,
    trim: true,
  },

  tag: {
    type: String,
    required: true,
    trim: true,
  },
});

const serviceModel = mongoose.model("Service", serviceSchema);

module.exports = serviceModel;
