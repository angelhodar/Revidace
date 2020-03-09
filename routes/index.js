const express = require('express')
const router = express.Router()

// Importar io para el post

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  io.emit('exercise', req.body.exercise)
})

module.exports = router