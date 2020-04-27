const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../db/models/user');

function initializeSetUp(passport){
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
};

module.exports = initializeSetUp;