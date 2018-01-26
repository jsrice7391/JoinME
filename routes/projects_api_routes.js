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
            },
            include: [{
                model: db.Step,
                as: "step"
            }]
        }).then(function(result) {
            var project = result.dataValues;

            for (let i in project.step) {
                console.log(project.step[i].Step_Description);
            }

            res.render("project", { project: project })
        });
    });











    //can create project as long as there is a user in user table 
    app.post("/projects", function(req, res) {

        console.log("Here is the user ID:" + req.body.theUserId);

        var newProject = req.body;




        var the_new_project = db.Project.create({
            Project_name: req.body.Project_name,
            Project_type: req.body.Project_type,
            Project_descripton: req.body.Project_descripton,
            UserId: req.body.theUserId,
            step: [{
                    Step: newProject.stepOne,
                    Step_Description: newProject.stepOneDescription
                },
                {
                    Step: newProject.stepTwo,
                    Step_Description: newProject.stepTwoDescription
                }, {
                    Step: newProject.stepThree,
                    Step_description: newProject.stepThreeDescription,
                }, {
                    Step: newProject.stepFour,
                    Step_Description: newProject.stepFourDescription
                }, {
                    Step: newProject.stepFive,
                    Step_Description: newProject.stepFiveDescription
                }
            ]
        }, {
            include: [{
                model: db.Step,
                as: "step"
            }]

        });


        res.redirect(url.format({
            pathname: "/projects/",
            query: the_new_project
        }));







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