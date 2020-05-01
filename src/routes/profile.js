const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("dashboard/profile", { user: req.user });
});

router.post("/", (req, res) => {
  // TODO: Update user profile data
});

module.exports = router;
