const express = require('express')
const router = express.Router()
const Devices = require('../db/models/device')

router.get('/', async (req, res) => {
  let devices = await Devices.find()
  devices = devices.map(function(device) {return device.toObject()})
  res.render('devices', {devices : devices})
})

router.post('/', (req, res) => {
  req.app.locals.io.emit('exercise', req.body.exercise)
  res.redirect('devices')
})

module.exports = router