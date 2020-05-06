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
  let exercise = await Exercise.findById(req.body.exercise).lean();

  var exec_data = {
    exercise: exercise.name,
    profile: req.body.profile,
    patient: req.body.patient,
  }

  Device.findByIdAndUpdate(
    req.body.device_id,
    {
      executing: exec_data
    },
    (err) => {
      if (err) console.log(err)
      else req.app.locals.io.emit("exercise", exec_data);
    }
  );

  res.redirect("devices");
});

module.exports = router;
