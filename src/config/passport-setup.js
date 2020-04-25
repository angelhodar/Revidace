const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const FacebookStrategy = require('passport-facebook');
const User = require('../db/models/user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        // options for the google strat
        callbackURL: '/login/google/redirect',
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our db
        User.findOne({googleId: profile.id}).then((currentUser) => {
            if(currentUser){
                // already have the user
                done(null, currentUser);
            } else {
                // if not, create user in our db
                new User({
                    email: profile.emails[0].value,
                    username: profile.displayName,
                    googleId: profile.id,
                    password: ''
                }).save().then((newUser) => {
                    done(null, newUser);
                });
            }
        });        
    })
);

passport.use(
    new FacebookStrategy({
        // options for the facebook strat
        callbackURL: '/login/facebook/redirect',
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        profileFields: ['id', 'displayName', 'email']
    }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our db
        console.log(profile);
        User.findOne({facebookId: profile.id}).then((currentUser) => {
            if(currentUser){
                // already have the user
                done(null, currentUser);
            } else {
                // if not, create user in our db
                new User({
                    email: profile.emails[0].value,
                    username: profile.displayName,
                    facebookId: profile.id,
                    password: ''
                }).save().then((newUser) => {
                    done(null, newUser);
                });
            }
        });        
    })
);