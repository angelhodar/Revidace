const express = require("express");
const router = express.Router();
const passport = require('passport');

// Route that redirects to Google OAuth screen
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// Callback route to be redirected from Google
router.get('/google/redirect', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/dashboard');
});

module.exports = router;
