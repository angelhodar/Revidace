const express = require("express");
const Patient = require("../db/models/patient");
const router = express.Router();

router.get("/", async (req, res) => {
  let patients = await Patient.find().lean();
  res.render("dashboard/patients", {
    user: req.user,
    patients: patients,
  });
});

router.get("/new", (req, res) => {
  // Create the patient form view and route
});

router.post("/new", (req, res) => {
  // Submit that new patient
});

module.exports = router;
