const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('register')
})

router.post('/', (req, res) => {
  //TODO: Check, encrypt and save to DB
})

module.exports = router