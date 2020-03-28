const express = require('express')
const router = express.Router()

//TODO: Add Unreal and Unity cards for download link
router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router