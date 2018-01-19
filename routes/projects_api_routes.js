var db = require("../models");
var path = require("path");

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
            UserId: req.body.UserId
        }).then(function(results) {
            //   
            console.log("This project was created.");
        });
    });
    

    };