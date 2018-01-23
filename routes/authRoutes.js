var authController = require("../config/authentication/auth");

function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())

        return next();

    res.redirect('/login');

}

module.exports = function(app, passport) {
    // Get the Index page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // Go to the login Form
    app.get("/login", function(req, res) {
        res.render("login");
    })

    // Load the sign Up form
    app.get("/signup", function(req, res) {
        res.render("signup")
    });


    app.get("/index", isLoggedIn, function(req, res) {
        res.render("index", { user: req.user });
    });

    app.post("/signup", passport.authenticate("local-signup", {
        successRedirect: '/index', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    app.post("/login", passport.authenticate("local-signin", {
        successRedirect: '/index', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));



    app.get('/logout', authController.logout);

}