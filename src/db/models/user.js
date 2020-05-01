const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
    required: false,
  }
});

module.exports = mongoose.model("User", UserSchema);
