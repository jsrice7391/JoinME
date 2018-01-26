var chai = require('chai');
var expect = require("chai").expect;
var should = chai.should();
var chaiHttp = require("chai-http");
const testingProjectRoutes = require("../routes/projects_api_routes.js");
const testingStepsRoutes = require("../routes/steps_routes.js");

// describe("Post user", function() {
//     it("user entry to populate", function() {
//         expect(testing.multiply(2, 4)).to.equal(8);
//     });

//     it("should throw when not passed numbers", function() {
//         expect(function() {
//             testing.multiply(2, "4");
//         }).to.throw(Error);
//     });
// });

// describe("Post user to user table", function() {
//     it("it should post user to user database"), function() {
//         expect(function() {
//             userPostWorked
//         })
//     }
// })

// describe("getAllProjects", function () {
//     it("should list all projects", function (done) {
//       chai.request(testingProjectRoutes)
//         .get("/searchProject")
//         .end(function (err, res) {
//           res.should.have.status(200);
//           res.body.should.have.property("project_name");
//           setTimeout(done, 5000);
//         });
//     });
//   });