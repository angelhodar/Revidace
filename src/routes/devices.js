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
    user: req.user,
    devices: devices,
    patients: patients,
    exercises: exercises,
  });
});

router.post("/", async (req, res) => {
  let device = await Device.findById(req.body.device_id).lean();
  let assigned_patient = await Patient.findById(req.body.patient);
  let assigned_exercise = await Exercise.findById(req.body.exercise).lean();
  const status = await Device.updateOne(
    { _id: req.body.device_id },
    {
      patient: assigned_patient,
      exercise: {
        name: req.body.exercise,
        profile: req.body.profile
      }
    }
  );
  req.app.locals.io.emit('exercise', {
    name: req.body.exercise,
    params: assigned_exercise.profiles[req.body.profile]
  });
  res.redirect("devices");
});

module.exports = router;
