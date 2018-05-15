//Inside the `burgers_controller.js` file, import the following:
//Express
//`burger.js`
//Create the `router` for the app, and export the `router` at the end of your file.

var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();

//set up routes
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObj = {
      burgers: data
    }
    console.log(hbsObj);
    res.render("index", hbsObj);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name", "Turkey Burger"
  ], [
    req.body.name, req.body.turkeyBurger
  ], function(result) {
    res.json({
      id: result.insertId 
    });
  });
});


