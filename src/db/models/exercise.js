const mongoose = require("mongoose");

const ParameterSchema = mongoose.Schema({
  name: String,
  description: String
});

const ExerciseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  parameters: {
    type: Map,
    of: ParameterSchema,
  },
  profiles : {
    type: Map,
    of: {}
  }
});

module.exports = mongoose.model("Exercise", ExerciseSchema);
