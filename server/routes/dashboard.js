const express = require("express");
const auth = require("../middlewares/auth");
const router = express.Router();

router.use(auth);

router.get("/", (req, res) => {
  res.render("dashboard/home", { user: req.user });
});

module.exports = router;
