var db = require("../models");
var path = require("path");
// var testing = require("../routes/testing.js");


module.exports = function(app) {
    
//get all projects

      app.get("/api/projects", function(req, res) {
        db.Project.findAll({}).then(function(results) {
            res.json(results);
        })
    });
     

    //create a project
    //note that description is misspelled in model

      app.post("/api/projects", function(req, res) {
        console.log(req.body)
        db.Project.create({
            Project_name: req.body.Project_name,
            Project_type: req.body.Project_type,
            Project_descripton: req.body.Project_descripton,
            UserId: user.userID
        }).then(function(results) {
            //   
            console.log("This project was created.");
        });


    });
    
    app.delete("/api/projects/:id", function(req, res) {
        // Delete the Project with id from req.body.id
        db.Project.destroy({
          where: {
            id: req.body.id
          }
        }).then(function(results) {
          res.json(results);
          console.log ("project deleted.")
        });
      });


    };