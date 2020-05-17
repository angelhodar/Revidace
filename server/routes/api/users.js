const express = require("express");
const User = require("../../db/models/user");
const router = express.Router();

router.get("/", (req, res) => {
  User.find({}, function (err, users) {
    if (err) return res.status(500).json({ message: err.message });
    res.json(users);
  });
});

router.post("/", (req, res) => {
  const data = {
    email: req.body.email,
    name: req.body.name
  }

  User.create(data, function (err, user) {
    if (err) return res.status(500).json({ message : err.message });
    res.status(201).json(user);
  });
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id, function (err, user) {
    if (err) return res.status(500).json({ message: err.message });
    if (!user) return res.status(404).json({message: "No User found"});
    res.json(user);
  });
});

router.put("/:id", (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, user) {
    if (err) return res.status(500).json({ message: err.message });
    res.json(user);
  });
});

router.delete("/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id, function (err, user) {
    if (err) return res.status(500).json({ message: err.message });
    res.json({ message: "User "+ user.name +" deleted" });
  });
});

module.exports = router;
