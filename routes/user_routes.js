var path = require("path");
const db = require("../models");


module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("all-data");
    })

    app.get("/api/users", function(req, res) {
        db.User.findAll({}).then(function(results) {
            res.json(results.length);
        })
    });

    app.post("/api/users", function(req, res) {
        console.log(req.body)
        db.User.create({
            name: req.body.userName,
            phone: req.body.userPhone,
            email: req.body.userEmail
        }).then(function(results) {
            //   
            console.log("That worked");
        });
    });





}