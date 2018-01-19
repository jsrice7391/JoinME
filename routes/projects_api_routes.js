var db = require("../models");
var path = require("path");

module.exports = function(app) {
    
      // GET route for getting all of the projects
      app.get("/api/projects", function(req, res) {
        var query = {};
        if (req.query.user_id) {
          query.UserId = req.query.user_id;
        }
        db.Project.findAll({
          where: query
        }).then(function(dbProject) {
          res.json(dbProject);
        });
      });
    
      // Get route for retrieving a single project
      app.get("/api/projects/:id", function(req, res) {
        db.Project.findOne({
          where: {
            id: req.params.id
          }
        }).then(function(dbProject) {
          console.log(dbProject);
          res.json(dbProject);
        });
      });
    
      // POST route for saving a new project
      app.post("/api/projects", function(req, res) {
        db.Project.create(req.body).then(function(dbProject) {
          res.json(dbProject);
        });
      });
    
      // DELETE route for deleting projects
      app.delete("/api/projects/:id", function(req, res) {
        db.Project.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbProject) {
          res.json(dbProject);
        });
      });
    
      // PUT route for updating projects
      app.put("/api/projects", function(req, res) {
        db.Project.update(
          req.body,
          {
            where: {
              id: req.body.id
            }
          }).then(function(dbProject) {
            res.json(dbProject);
          });
      });
    };