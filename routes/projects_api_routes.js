var db = require("../models");
var path = require("path");

module.exports = function(app) {
    
      // GET route for getting all of the projects
    //   app.get("/api/projects", function(req, res) {
    //     var query = {};
    //     if (req.query.user_id) {
    //       query.UserId = req.query.user_id;
    //     }
    //     db.Project.findAll({
    //       where: query
    //     }).then(function(dbProject) {
    //       res.json(dbProject);
    //     });
    //   });
    

      app.get("/api/projects", function(req, res) {
        db.Project.findAll({}).then(function(results) {
            res.json(results);
        })
    });
     
    
      // POST route for saving a new project
      app.post("/api/projects", function(req, res) {
        db.Project.create(req.body).then(function(dbProject) {
          res.json(dbProject);
        });
      });

      app.post("/api/projects", function(req, res) {
        console.log(req.body)
        db.Project.create({
            Project_name: req.body.Project_name,
            Project_type: req.body.Project_type,
            Project_description: req.body.Project_description
    
        }).then(function(results) {
            //   
            console.log("That worked");
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