//This is the file for all the configurations for passport.
// In this fonciguration file we will set all of our authentication protocols for authentication

// Here we initialize passports local configuration
var Local = require("passport-local").Strategy;
var User = require("../../models/user");
var bCrypt = require("bcrypt-nodejs");



module.exports = function(passport) {
    var Local = require("passport-local").Strategy;
    var User = require("../../models").User;


    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id).then(function(user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });


    passport.use("local-signin", new Local({
                usernameField: "email",
                passwordField: "password",
                passReqToCallback: true
            },

            function(req, email, password, done) {

                var generateHash = function(password) {
                    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
                };


                User.findOne({
                    where: {
                        email: email
                    }
                }).then(function(err, user) {
                    if (err)
                        return done(err);

                    if (!user) {
                        return done(null, false, { message: "That user does not exist" });
                    }

                    if (!user.validPassword(password)) {
                        return done(null, false, { message: "That is not the correct password" })
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

            var generateHash = function(password) {

                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);

            };


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

                        var userPassword = generateHash(password);

                        var data =

                            {
                                email: email,

                                password: userPassword,

                                firstname: req.body.firstname,

                                lastname: req.body.lastname,

                                phone: req.body.phone,

                                name: req.body.name

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