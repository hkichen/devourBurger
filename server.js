var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var routes = require("./controllers/burgers_controller.js");

var app = express();
var PORT = process.env.PORT || 8080;

app.listen(function(err) {
  if (err) throw err;
  console.log("Server listening on http://localhost: " + PORT)
});

//set up body-parser to be used in app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set up handlebars
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//set up route usage
app.use(routes);
