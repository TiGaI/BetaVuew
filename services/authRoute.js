"use strict";
var express = require('express');
var router = express.Router();

const User= require('../models/models').User;

// TODO: message
//Get User get the conversation of each connection.
router.post('/facebookAuth', function(req, res) {
    // req.body.id
    console.log('EMAIL', req.body.result)
    var profile = req.body.result
    console.log('name1, ', profile.name)
    console.log('name2, ', profile.email)
    console.log('name3, ', profile.name.toString())
    User.findOne({email: profile.email[0].value}, function(err, user) {
            if (err) {
                return {err, user}
            }
            if (!user) {
                var Name = profile.name.toString().split(' ');
                var firstName = Name[0];
                var lastName = Name[Name.length - 1];
                var newUser = new User({
                    firstName: firstName,
                    lastName: lastName,
                    email: profile.email,
                    profileImg: profile.picture ? profile.picture.data.url : 'http://shurl.esy.es/y'
                });
                newUser.save(function(err) {
                    if (err) console.log(err);
                    return {err, user}
                });
            } else {
                //found user. Return
                res.send(user)
            }
        });
});

// TODO: Linkedin
router.post('/linkedinAuth', function(req, res) {
    // req.body.id

});

// TODO: return Current user
router.get('/getUser', function(req, res) {
    // req.body.id

});

module.exports = router;
//Facebook Login
// passport.use(new FacebookStrategy({
//     clientID: FACEBOOK_APP_ID,
//     clientSecret: FACEBOOK_APP_SECRET,
//     callbackURL: "http://localhost:3000/auth/facebook/callback",
//     profileFields: ['id', 'displayName', 'name', 'photos', 'email']
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOne({email: profile.emails[0].value}, function(err, user) {
//             if (err) {
//                 return done(err);
//             }
//             if (!user) {
//                 var fullName = profile.displayName.split(' ');
//                 var firstName = fullName[0];
//                 var lastName = fullName[fullName.length - 1];
//                 user = new models.User({
//                     firstName: firstName,
//                     lastName: lastName,
//                     email: profile.emails[0].value,
//                     profileImg: profile.photos ? profile.photos[0].value : 'http://shurl.esy.es/y'
//                 });
//                 user.save(function(err) {
//                     if (err) console.log(err);
//                     return done(err, user);
//                 });
//             }else {
//                 //found user. Return
//                 return done(err, user);
//             }
//         });
//   }
// ));

// //Linkedin
// passport.use(new LinkedInStrategy({
//     consumerKey: LINKEDIN_API_KEY,
//     consumerSecret: LINKEDIN_SECRET_KEY,
//     callbackURL: "http://localhost:3000/auth/linkedin/callback",
//     scope:        [ 'r_fullprofile', 'r_emailaddress', 'r_contactinfo']
//   },
//   function(token, tokenSecret, profile, done) {
//     console.log(profile)
//     User.findOne({
//             email: profile.emails[0].value
//         }, function(err, user) {
//             if (err) {
//                 return done(err);
//             }
//             if (!user) {
//                 var fullName = profile.displayName.split(' ');
//                 var firstName = fullName[0];
//                 var lastName = fullName[fullName.length - 1];
//                 user = new models.User({
//                     fname: firstName,
//                     lname: lastName,
//                     email: profile._json.emailAddress,
//                     image: profile.photos ? profile.photos[0].value : 'http://shurl.esy.es/y'
//                 });
//                 user.save(function(err) {
//                     if (err) console.log(err);
//                     return done(err, user);
//                 });
//             }else {
//                 //found user. Return
//                 return done(err, user);
//             }
//         });
//   }
// ));