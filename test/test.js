var expect = require("chai").expect;
const testing = require("../routes/testing.js");

describe("Multiply", function() {
    it("should multiply properly when passed numbers", function() {
        expect(testing.multiply(2, 4)).to.equal(8);
    });

    it("should throw when not passed numbers", function() {
        expect(function() {
            testing.multiply(2, "4");
        }).to.throw(Error);
    });
});

describe("CreateNewProjectButton", function() {
    it("should open the modal containing the project creation form when clicked"), function() {
        expect(function() {

        })
    }
})

