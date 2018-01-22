//This is the file for all the configurations for passport.
// In this fonciguration file we will set all of our authentication protocols for authentication

// Here we initialize passports local configuration
var Local = require("passport-local").Strategy;

var User = require("../models/user")

module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        USer.findById(id, function(err, user) {
            done(err, user)
        });
    })

    passport.use("local-signin", new Local({
                usernameField: "email",
                passwordField: "password",
                passReqToCallback: true
            },

            function(req, email, password, done) {
                User.findOne({
                    where: {
                        email: email
                    }
                }).then(function(err, user) {
                    if (err)
                        return done(err);

                    if (!user) {
                        return done(null, false, req.flash("login-message", "No user found"));
                    }

                    if (!user.validPassword(password)) {
                        return done(null, false, req.flash("login-message", "Oops Wrong password!"))
                    }

                    return done(null, user);

                })
            })

    )

    passport.use("local-signup", new Local({
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true
        },
        function(req, email, password, done) {
            process.nextTick(function() {

                User.findOne({
                    where: {
                        email: email
                    }
                }).then(function(err, user) {
                    if (err)
                        return done(err)
                    if (user) {
                        return done(null, false, req.flash('signupMessage', 'That email is already taken.'))
                    } else {
                        var data =

                            {
                                email: email,

                                password: userPassword,

                                firstname: req.body.firstname,

                                lastname: req.body.lastname,

                                phone: req.body.phone

                            };


                        User.create(data).then(function(newUser, created) {

                            if (!newUser) {

                                return done(null, false);

                            }

                            if (newUser) {

                                return done(null, newUser);

                            }


                        })
                    }
                })
            })
        }))
}