var db = require("../models");
var path = require("path");
// var testing = require("../routes/testing.js");


module.exports = function(app) {

    //get all steps

    app.get("/api/steps", function(req, res) {
        db.Step.findAll({}).then(function(results) {
            res.json(results);
            // res.render("/step", result);
        });
    });


    //create a project
    //note that description is misspelled in model
    app.post("/api/steps", function(req, res) {
        db.Step.create({
            ProjectId: req.body.ProjectId,
            Step: req.body.Step,
            Step_description: req.body.Step_description,
            Completed: req.body.Completed,
        }).then(function(results) {
            console.log("created step.");
        });
    });


    //this route updates a step based on id to show completed as true.
    app.put("/api/steps/:id", function(req, res) {
        db.Step.update({ Completed: true }, {
            where: {
                id: 1
            }
        }).then(function(results) {
            res.json(results);
            console.log("updated step.")
        });
    });

    // { Completed: true },
    // { where: { _id: 1 } }

    app.delete("/api/steps/:id", function(req, res) {
        // Delete the Step with id from req.body.id
        console.log(req.params);
        db.Step.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(results) {
            res.json(results);
            console.log("step deleted.")
        });
    });

};