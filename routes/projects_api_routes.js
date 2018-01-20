var db = require("../models");
var path = require("path");
// var testing = require("../routes/testing.js");


module.exports = function(app) {
    
//get all projects

      app.get("/api/projects", function(req, res) {
        db.Project.findAll({}).then(function(results) {
            res.json(results);
            // res.render("/project", result);
        })
    });

    // GET route for getting all burgers
//  router.get("/", function(req, res) {
//   burger.selectAll(function(data) {
//       var hbsObject = {
//           burgers: data
//       };
//       res.render("index", hbsObject);
//   });
// });

    // GET route for getting all of the posts
  // app.get("/api/posts", function(req, res) {
  //   var query = {};
  //   if (req.query.author_id) {
  //     query.AuthorId = req.query.author_id;
  //   }
  //   db.Post.findAll({
  //     where: query
  //   }).then(function(dbPost) {
  //     res.json(dbPost);
  //   });
  // });     

    //create a project
    //note that description is misspelled in model

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
          console.log ("project deleted.")
        });
      });


    };