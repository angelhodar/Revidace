const express = require('express')
const BaseExercise = require('../models/exercise')
const router = express.Router()

router.get('/', async (req, res) => {
  let exercises = await BaseExercise.find()
  // Remove mongoose model metadata
  exercises = exercises.map(function(exercise) {return exercise.toObject()})
  res.render('exercises', {exercises: exercises})
})

router.get('/new', async (req, res) => {
  // Get the exercise creation form
})

router.post('/new', async (req, res) => {
  // Submit that new exercise
})

module.exports = router