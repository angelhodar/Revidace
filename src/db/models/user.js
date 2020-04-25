const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
    required: false,
  },
  facebookId: {
    type: String,
    required: false,
  }
});

module.exports = mongoose.model("User", UserSchema);
