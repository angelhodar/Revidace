const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index.pug', {devices : req.app.locals.devices})
})

router.post('/', (req, res) => {
  req.app.locals.io.emit('exercise', req.body.exercise)
})

module.exports = router