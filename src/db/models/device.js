const mongoose = require("mongoose");
const PatientSchema = require("./patient").schema;
const ExerciseSchema = require("./exercise").schema;

const DeviceSchema = mongoose.Schema({
  sid: {
    type: String,
    required: true,
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
  patient: {
    type: PatientSchema
  },
  exercise: {
    type: ExerciseSchema
  }
});

module.exports = mongoose.model("Devices", DeviceSchema);
