const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../db/models/user");
const passport = require('passport');

router.get("/", (req, res) => {
  res.render("login", {error: false});
});

// login with google
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/dashboard');
});

module.exports = router;
