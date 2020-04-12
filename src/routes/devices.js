const express = require("express");
const Device = require("../db/models/device");
const Patient = require("../db/models/patient");
const Exercise = require("../db/models/exercise");
const router = express.Router();

router.get("/", async (req, res) => {
  let devices = await Device.find().lean();
  let exercises = await Exercise.find().lean();
  let patients = await Patient.find().lean();
  res.render("dashboard/devices", {
    user: req.session.user,
    devices: devices,
    patients: patients,
    exercises: exercises,
  });
});

router.post("/", async (req, res) => {
  let device = await Device.findById(req.body.device_id).lean();
  let assigned_patient = await Patient.findById(req.body.patient);
  let assigned_exercise = await Exercise.findById(req.body.exercise);
  const status = await Device.updateOne(
    { _id: req.body.device_id },
    {
      patient: assigned_patient,
      exercise: assigned_exercise
    }
  );
  // TODO: Get all form params like req.body.exercise, req.body.profile
  // and so on and pass to req.app.locals.io to run exercise
  res.redirect("devices");
});

module.exports = router;
