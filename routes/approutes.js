var path = require("path");

module.exports = function(app) {

    app.get("/all-data", function(req, res) {
        res.render("all-data");
    })
}