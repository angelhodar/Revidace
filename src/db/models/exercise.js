const mongoose = require("mongoose");

const ParameterSchema = mongoose.Schema({
  name: String,
  description: String,
  value: {},
});

const ExerciseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
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
