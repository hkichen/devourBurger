//In the `orm.js` file, create the methods that will execute 
//the necessary MySQL commands in the controllers. 
//These are the methods you will need to use in order to retrieve 
//and store data in your database.

//`selectAll()`
//`insertOne()`
//`updateOne()`
//Export the ORM object in `module.exports`.
var connection = require('../config/connection.js');

module.exports = {
  selectAll: function() {
    connection.query('select * from burgers;', function(req, res) {
      //grab all burgers currently in the database
    });
  },

  insertOne: function() {
    connection.query("insert into burgers(burger_name, devoured) values (" + newBurger + ", ", function(req, res) {
      //add burger from htmo input page
    });
  },

  updateOne: function() {
    connection.query("update burger set ?? to ?? where ??;", function(req, res) {
      //make it so that you grab updated info from html input page, specified by burger id
    });
  }
};
