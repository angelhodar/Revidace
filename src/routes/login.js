const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../db/models/user");
const passport = require('passport');

router.get("/", (req, res) => {
  res.render("login", {error: false});
});

router.post("/", (req, res) => {
  var email = req.body.email;
  var candidate_pass = req.body.password;
  var query = User.findOne({ email: email });

  query.exec((err, user) => {
    // No user in DB
    if (!user){
      res.render("login", {error: true});
      return;
    }
    bcrypt.compare(candidate_pass, user.password, (err, result) => {
      if (result) {
        req.session.user = {
          name: user.username,
          email: user.email,
        };
        res.redirect("/dashboard");
      } else {
        // Password incorrect
        res.render("login", {error: true});
      }
    });
  });
});

// login with google
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  req.session.user = {
    name: req.user.username,
    email: req.user.email,
  };
  res.redirect('/dashboard');
});

module.exports = router;
