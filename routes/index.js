const express = require('express')
const router = express.Router()

let devices = {}

router.get('/', (req, res) => {
  res.render('index', {devices : devices})
})

module.exports = {router, devices}