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

  bcrypt.hash(pass, 10, (err, hash) => {
    pass = hash

    var new_user = new User({
      "email": email,
      "password": pass,
      "username": username,
    });

    new_user.save((err) => {
      if (err)
        console.log('Error saving user: ' + err);
      else
        console.log('User saved');
    });
  })

  res.redirect('/');
})

module.exports = router