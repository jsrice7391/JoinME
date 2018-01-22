// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var firebase = require('firebase');
// require("firebase/auth");
// // require("firebase/database");
// var authenticate = require("../mailers/isAuth.js");

// Routes
// =============================================================
module.exports = function(app, passport) {


    // Get the Index page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // Go to the login Form
    app.get("/login", function(req, res) {
        res.render("login")
    })

    // Load the sign Up form
    app.get("/signup", function(req, res) {
        res.render("signup")
    });

    app.post("/signup", passport.authenticate("local-signup", {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/signup', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));

    app.post("/login", passport.authenticate("local-signup", {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/login', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }))





    // load the search page for all projects
    app.get("/searchProject", function(req, res) {
        res.render("searchProject");
    });

    // load the project page for a user's individual projects
    app.get("/project", function(req, res) {
        res.render("project");
    });

    // loads the about this app page
    app.get("/about", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/about.html"));
    })
}