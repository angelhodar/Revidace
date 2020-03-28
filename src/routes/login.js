const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('login')
})

router.post('/', (req, res) => {
  //TODO: Check DB and authenticate
})

module.exports = router