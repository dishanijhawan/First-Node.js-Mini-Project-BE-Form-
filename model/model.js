const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    maxlength: 50,
    minlength: 2,
  },
  email: {
    required: true,
    type: String,
    maxlength: 100,
    minlength: 5,
  },
  phone: {
    type: Number,
    maxlength: 15,
    minlength: 10,
  },
  message: {
    required: true,
    type: String,
    maxlength: 500,
    minlength: 4,
  },
});

module.exports = mongoose.model("Data", dataSchema);
