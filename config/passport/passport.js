//This is the file for all the configurations for passport.
// In this fonciguration file we will set all of our authentication protocols for authentication

// Here we initialize passports local configuration
var Local = require("passport-local").Strategy;
var User = require("../../models/user");
var bCrypt = require("bcrypt-nodejs");



module.exports = function(passport, user) {


    var User = user;



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

    // Create a rule for passport tof use when the person logs in
    passport.use("local-signin", new Local({
                // These are the fields that the user will give us and the way we will handle it is through a callback;
                usernameField: "email",
                passwordField: "password",
                passReqToCallback: true
            },
            function(req, email, password, done) {

                var User = user;

                var isValidPassword = function(userpass, password) {

                    return bCrypt.compareSync(password, userpass);

                }

                User.findOne({
                    where: {
                        email: email
                    }
                }).then(function(user) {

                    if (!user) {

                        return done(null, false, {
                            message: 'Email does not exist'
                        });

                    }

                    if (!isValidPassword(user.password, password)) {

                        return done(null, false, {
                            message: 'Incorrect password.'
                        });

                    }


                    var userinfo = user.get();
                    return done(null, userinfo);

                }).catch(function(err) {
                    console.log(err);

                })
            })

    )

    passport.use("local-signup", new Local({
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true
        },
        function(req, email, password, done) {
            // Generate a random hash for a password.
            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            process.nextTick(function() {
                // Sequelize find
                User.findOne({
                    where: {
                        email: email
                    }
                }).then(function(err, user) {
                    // If we get an error throw it.
                    console.log("This is the user " + user)

                    if (err)
                        return done(err)

                    if (user) {
                        return done(null, false, { message: "This user already exists" })
                    } else {
                        // Get the generate hash from above and save it as user password
                        var userPassword = generateHash(password);

                        // Create the user object to be passed into the create function.
                        var data = {
                            email: email,
                            password: userPassword,
                            name: req.body.name,
                            phone: req.body.phone,
                        };

                        // Create the user above
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