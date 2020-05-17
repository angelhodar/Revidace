const express = require("express");
const Device = require("../../db/models/device");
const router = express.Router();

router.get("/", (req, res) => {
  Device.find({}, function (err, devices) {
    if (err) return res.status(500).json({ message: err.message });
    res.json(devices);
  });
});

router.post("/", (req, res) => {
  const data = {
    sid: req.body.sid,
    device: req.body.device,
    account: req.body.account,
    executing: req.body.executing
  }

  Device.create(data, function (err, device) {
    if (err) return res.status(500).json({ message : err.message });
    res.status(201).json(device);
  });
});

router.get("/:id", (req, res) => {
  Device.findById(req.params.id, function (err, device) {
    if (err) return res.status(500).json({ message: err.message });
    if (!device) return res.status(404).json({message: "No device found"});
    res.json(device);
  });
});

router.put("/:id", (req, res) => {
  Device.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, device) {
    if (err) return res.status(500).json({ message: err.message });
    res.json(device);
  });
});

router.delete("/:id", (req, res) => {
  Device.findByIdAndRemove(req.params.id, function (err, device) {
    if (err) return res.status(500).json({ message: err.message });
    res.json({ message: "Device "+ device.sid +" deleted" });
  });
});

module.exports = router;