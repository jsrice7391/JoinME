var path = require("path");
var firebase = require('firebase');
require("firebase/auth");
require("firebase/database");

module.exports = {
    isAuthenticated: function(req, res, next) {
        var user = firebase.auth().currentUser;
        if (user !== null) {
            req.user = user;
            res.json(user);
            next();
        } else {
            res.redirect("../public/login.html")
        }
    },
    signedIn: function(req, res, next) {
        var user = firebase.auth().currentUser;
        if (user !== null) {
            res.json(user);
        } else {
            res.redirect("../public/error.html")
        }
    }


}