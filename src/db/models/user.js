const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
    required: false,
  }
});

module.exports = mongoose.model("User", UserSchema);
