const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const exphb = require("express-handlebars");
const db = require("./models");
const session = require('express-session');
const passport = require("passport");
const flash = require('connect-flash');

var PORT = process.env.PORT || 8000;


// Allow boy barser to parse the data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Allow the assets folder to be used for static content
app.use("/public", express.static("public"));
app.use(express.static("public"));


// required for passport
require('./config/passport')(passport); // pass passport for configuration
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


// Establish the engine as Handlebars and useing the Default view as the main.handlebars file
app.engine("handlebars", exphb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Create some routers

require("./routes/projects_api_routes")(app, passport);
require("./routes/user_routes")(app, passport);
require("./routes/htmlroutes")(app, passport);

// Start the app

db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
        console.log("APP is listening on Port: " + PORT);
    });


})