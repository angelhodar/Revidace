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

  query.exec((err, user) => {
    bcrypt.compare(candidate_pass, user.password, (err, result) => {
      if (result) {
        req.session.user = {
          "name": user.username,
          "email": user.email
        }
        res.redirect('/dashboard');
      }
      else {
        res.redirect('/');
      }
    });
  });


})

module.exports = router