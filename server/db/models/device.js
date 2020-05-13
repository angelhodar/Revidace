const mongoose = require("mongoose");
const PatientSchema = require("./patient").schema;
const ExerciseSchema = require("./exercise").schema;

const DeviceSchema = mongoose.Schema({
  sid: {
    type: String,
    required: true,
    unique: true,
  },
  engine: {
    type: String,
    required: true,
  },
  device: {
    type: String,
    required: true,
  },
  account: {
    type: String,
    required: true,
  },
  executing: {}
});

module.exports = mongoose.model("Devices", DeviceSchema);
