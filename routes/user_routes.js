var path = require("path");
const db = require("../models");


module.exports = function(app) {

    app.get("/api/users", function(req, res) {
        db.User.findAll({}).then(function(results) {
            res.json(results.length);
        });
    });

    app.post("/api/users", function(req, res) {
        db.User.create({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            uid: req.body.uid
        }).then(function(results) {
            console.log("That worked");
        });
    });

}