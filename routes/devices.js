const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('devices', {devices : req.app.locals.devices})
})

router.post('/', (req, res) => {
  req.app.locals.io.emit('exercise', req.body.exercise)
  res.redirect('devices')
})

module.exports = router