const express = require("express");
const auth = require("../middlewares/auth");
const router = express.Router();

router.use(auth);

router.get("/", (req, res) => {
  res.redirect("dashboard/home");
});

router.get("/home", (req, res) => {
  res.render("dashboard/home", { user: req.user });
});

router.get("/profile", (req, res) => {
  res.render("dashboard/profile", { user: req.user });
});

router.post("/profile", (req, res) => {
  // TODO: Update user profile data on DB validating it before
});

module.exports = router;
