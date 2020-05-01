const express = require("express");
const router = express.Router();
const Patient = require("../db/models/patient");

router.get("/", async (req, res) => {
  let patients = await Patient.find().lean();
  res.render("dashboard/results", {
      user: req.user,
      patients: patients
  });
});

module.exports = router