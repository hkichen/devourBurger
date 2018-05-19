var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var routes = require("./controllers/burgers_controller");

var PORT = process.env.PORT || 3000;
var app = express();
app.use(express.static("public"));

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

app.listen(PORT, function() {
  console.log("Server listening on http://localhost: " + PORT)
});
