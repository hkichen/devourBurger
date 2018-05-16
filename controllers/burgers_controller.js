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

//add burger to database
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

//update burger info
router.put("api/burgers/:id", function(req,res) {
  var condition = "id =" + req.params.id;
  
  console.log("condition: " + condition);
  
  burger.updateOne({
    turkeyBurger: req.body.turkeyBurger
  }, condition, function(result) {
    if(result.devoured === 0) {
      return res.status(404).end();
    }else {
      res.status(200).end();
    }
  });
});


