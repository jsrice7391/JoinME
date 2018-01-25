var db = require("../models");
var path = require("path");
// var testing = require("../routes/testing.js");


module.exports = function(app) {

    //get all projects

    app.get("/api/projects/:type", function(req, res) {
        db.Project.findAll({
            where: {
                Project_Type: req.params.type
            }
        }).then(function(results) {
            if (results.length !== 0) {
                res.render("searchProject", { project: results });
            } else {
                res.redirect("/api/projects")
            }
        })
    })


    app.get("/api/projects", function(req, res) {
        db.Project.findAll({}).then(function(results) {
            res.render("searchProject", { project: results })
        })
    })


    app.get("/project/:id", function(req, res) {
        db.Project.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(results) {
            if (results.length !== 0) {
                res.json(results);

            }
        })
    })











    //can create project as long as there is a user in user table 
    app.post("/api/projects", function(req, res) {
        console.log(req.body)
        db.Project.create({
            Project_name: req.body.Project_name,
            Project_type: req.body.Project_type,
            Project_descripton: req.body.Project_descripton,
            UserId: req.body.userId
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
            console.log("project deleted.")
        });
    });


};