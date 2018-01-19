// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================

var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // root route loads login.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // load the index page
  app.get("/index", function(req, res) {
    res.render("index");
  });

  // loads the about page
  app.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });
}