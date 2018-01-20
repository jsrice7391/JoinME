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

  // load the index/user's home page
  app.get("/index", function(req, res) {
    res.render("index");
  });

  // load the search page for all projects
  app.get("/searchProject", function(req, res) {
    res.render("searchProject");
  });

   // load the project page for a user's individual projects
   app.get("/project", function(req, res) {
    res.render("project");
  });

  // loads the about this app page
  app.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });
}