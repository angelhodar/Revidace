const mongoose = require("mongoose");

const PatientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
});

module.exports = mongoose.model("Patient", PatientSchema);
