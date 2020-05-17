const express = require("express");
const Exercise = require("../../db/models/exercise");
const router = express.Router();

/**
 * @swagger
 *
 * definitions:
 *   Exercise:
 *     type: object
 *     parameters:
 *       - name: name
 *         description: Exercise name
 *         required: true
 *         type: string
 *       - name: description
 *         description: Exercise description
 *         required: true
 *         type: string
 *       - name: img
 *         description: Exercise thumbnail src
 *         required: true
 *         type: string
 *       - name: parameters
 *         description: Exercise parameters
 *         required: true
 *         type: object
 *       - name: profiles
 *         description: Exercise profiles
 *         required: true
 *         type: object
 */

/**
 * @swagger
 * /exercises:
 *   get:
 *     description: Returns all the exercises
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: exercises
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Exercise'
 */
router.get("/", (req, res) => {
  Exercise.find({}, function (err, exercises) {
    if (err) return res.status(500).json({ message: err.message });
    res.json(exercises);
  });
});

/**
 * @swagger
 *
 * /exercises:
 *   post:
 *     description: Add exercise
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: Exercise name
 *         required: true
 *         type: string
 *       - name: description
 *         description: Exercise description
 *         required: true
 *         type: string
 *       - name: img
 *         description: Exercise thumbnail src
 *         required: true
 *         type: string
 *       - name: parameters
 *         description: Exercise parameters
 *         required: true
 *         type: object
 *       - name: profiles
 *         description: Exercise profiles
 *         required: true
 *         type: object
 *     responses:
 *       201:
 *         description: Exercise created
 *         schema:
 *           $ref: '#/definitions/Exercise'
 */
router.post("/", (req, res) => {
  const data = {
    name: req.body.name,
    description: req.body.description,
    img: req.body.img,
    parameters: req.body.parameters,
    profiles: req.body.profiles,
  };

  Exercise.create(data, function (err, exercise) {
    if (err) return res.status(500).json({ message : err.message });
    res.status(201).json(exercise);
  });
});

// Get one exercise
router.get("/:id", (req, res) => {
  Exercise.findById(req.params.id, function (err, exercise) {
    if (err) return res.status(500).json({ message: err.message });
    if (!exercise) return res.status(404).json({message: "No exercise found"});
    res.json(exercise);
  });
});

// Update one exercise
router.put("/:id", (req, res) => {
  Exercise.findByIdAndUpdate(req.params.id, req.body, { new: true }, function (err, exercise) {
    if (err) return res.status(500).json({ message: err.message });
    res.json(exercise);
  });
});

// Delete one exercise
router.delete("/:id", (req, res) => {
  Exercise.findByIdAndRemove(req.params.id, function (err, exercise) {
    if (err) return res.status(500).json({ message: err.message });
    res.json({ message: "Exercise " + exercise.name + " deleted" });
  });
});

module.exports = router;
