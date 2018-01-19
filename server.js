const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const exphb = require("express-handlebars");
const db = require("./models");

var PORT = process.env.PORT || 8000;


// Allow boy barser to parse the data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Allow the assets folder to be used for static content
app.use("/public", express.static("public"));
app.use(express.static("public"));


// Establish the engine as Handlebars and useing the Default view as the main.handlebars file
app.engine("handlebars", exphb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Create some routers

require("./routes/projects_api_routes")(app);
require("./routes/user_routes")(app);
require("./routes/htmlroutes")(app);



// Start the app

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("APP is listening on Port: " + PORT);
    });


})