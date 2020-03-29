const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const User = require('../db/models/user')

router.get('/', (req, res) => {
  res.render('login')
})

router.post('/', (req, res) => {
  var email = req.body.email;
  var candidate_pass = req.body.password;
  var query = User.findOne({ 'email': email })
  var sessionData;

  query.exec((err, user) => {
    console
    bcrypt.compare(candidate_pass, user.password, (err, result) => {
      if (result) {
        sessionData = req.session;
        sessionData.user = {
          "name": user.username
        }
        res.redirect('/dashboard');
      } else {
        res.redirect('/');
      }
    });

  });


})

module.exports = router