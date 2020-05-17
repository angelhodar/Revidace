const express = require("express");
const Patient = require("../../db/models/patient");
const router = express.Router();

// Get all Patients
router.get("/", (req, res) => {
  Patient.find({}, function (err, patients) {
    if (err) return res.status(500).json({ message: err.message });
    res.json(patients);
  });
});

// Create one Patient
router.post("/", (req, res) => {
  const data = {
    name: req.body.name,
    age: req.body.age,
    results: req.body.results,
  }

  Patient.create(data, function (err, patient) {
    if (err) return res.status(500).json({ message : err.message });
    res.status(201).json(patient);
  });
});

// Get one Patient
router.get("/:id", (req, res) => {
  Patient.findById(req.params.id, function (err, patient) {
    if (err) return res.status(500).json({ message: err.message });
    if (!patient) return res.status(404).json({message: "No patient found"});
    res.json(patient);
  });
});

// Update one Patient
router.put("/:id", (req, res) => {
  Patient.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, patient) {
    if (err) return res.status(500).json({ message: err.message });
    res.json(patient);
  });
});

// Delete one Patient
router.delete("/:id", (req, res) => {
  Patient.findByIdAndRemove(req.params.id, function (err, patient) {
    if (err) return res.status(500).json({ message: err.message });
    res.json({ message: "Patient "+ patient.name +" deleted" });
  });
});

module.exports = router;