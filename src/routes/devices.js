const express = require('express')
const Device = require('../db/models/device')
const Patient = require('../db/models/patient')
const Exercise = require('../db/models/exercise')
const router = express.Router()

router.get('/', async (req, res) => {
  let devices = await Device.find().lean()
  let exercises = await Exercise.find().lean()
  let patients = await Patient.find().lean()
  res.render('dashboard/devices', {
    user: req.session.user,
    devices: devices,
    patients: patients,
    exercises: exercises
  })
})

router.post('/', (req, res) => {
  // TODO: Update device model on DB with req.body.patient
  // Get all form params like req.body.exercise, req.body.difficulty
  // and so on and pass to req.app.locals.io to run exercise
  res.redirect('devices')
})

module.exports = router