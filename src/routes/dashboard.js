const express = require('express')
const auth = require('../middlewares/auth')
const router = express.Router()

router.use(auth);

router.get('/', (req, res) => {
  res.render('dashboard', {'user':req.session.user})
})

module.exports = router