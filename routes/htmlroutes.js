// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
// var firebase = require('firebase');
// require("firebase/auth");
// // require("firebase/database");
// var authenticate = require("../mailers/isAuth.js");

// Routes
// =============================================================
module.exports = function(app, passport) {



    //  Get the search page for all projects
    app.get("/searchProject", function(req, res) {
        res.render("searchProject");
    });

    // Get the about this app page
    app.get("/about", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/about.html"));
    })
}