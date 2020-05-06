const mongoose = require("mongoose");

const PatientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  results: [
    {
      exercise: String,
      profile: String,
      date: { type: Date },
      values: {}
    }
  ]
});

module.exports = mongoose.model("Patient", PatientSchema);
