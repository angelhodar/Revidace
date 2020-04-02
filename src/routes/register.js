const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const User = require('../db/models/user')

router.get('/', (req, res) => {
  res.render('register')
})

router.post('/', (req, res) => {
  var username = req.body.username;
  var email = req.body.email;
  var pass = req.body.password;

  bcrypt.hash(pass, 10, (err, hashed_pw) => {
    var new_user = new User({
      "email": email,
      "username": username,
      "password": hashed_pw
    });

    new_user.save((err) => {
      if (err)
        console.log('Error saving user: ' + err);
      else
        console.log('User saved');
    });
  })

  res.redirect('/login');
})

module.exports = router