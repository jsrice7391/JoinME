// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var config = {
    apiKey: "AIzaSyBtYPFjB-gpNIw8wRKnKao7lKSJ7Rho3bo",
    authDomain: "joinme-3d32e.firebaseapp.com",
    databaseURL: "https://joinme-3d32e.firebaseio.com/",
    projectId: "joinme-3d32e",
    storageBucket: "gs://joinme-3d32e.appspot.com",
    messagingSenderId: "302936142479"
};

var path = require("path");
var firebase = require('firebase');
require("firebase/auth");
require("firebase/database");
var authenticate = require("../mailers/isAuth.js");

firebase.initializeApp(config)

// firebaseClient.auth().signInWithEmailAndPassword(req.body.email, req.body.password).catch(function(error) {
//     console.log(error);
// })



// Routes
// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // root route loads login.html
    app.get("/", authenticate.isAuthenticated, function(req, res) {
        var user = firebase.auth().currentUser;
        console.log(user);
        // res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    // load the index/user's home page
    app.get("/index", authenticate.signedIn, function(req, res) {
        // res.render("index");
    });

    // admin.auth().verifyIdToken(idToken)
    //     .then(function(decodedToken) {
    //         var uid = decodedToken.uid;
    //         console.log(uid)
    //             // ...
    //     }).catch(function(error) {
    //         // Handle error
    //     });
    // console.log(user);


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
    });
}