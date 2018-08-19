//Express server for Eat-Da-Burger! app

//Dependencies
var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var exphbs = require( 'express-handlebars' );

//Set express server
var PORT = process.env.PORT || 3000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");
app.use(routes);

//Server start listening
app.listen( PORT, function() {
  console.log( "Eat-Da-Burger! now listening at localhost:" + PORT );
});