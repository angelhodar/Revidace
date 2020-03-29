const express = require('express')
const auth = require('../middlewares/auth')
const router = express.Router()

router.use(auth);

router.get('/', (req, res) => {
  var logged = false
  if(req.session)
    logged = true
  res.render('dashboard', {'logged': logged, 'user':req.session.user})
})

module.exports = router