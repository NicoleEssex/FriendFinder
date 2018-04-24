//dependencies
var bodyParser = require('body-parser');
var express = require('express');
// var path = require('path');
var app = express();


//sets up express app
var app = express();
var PORT = process.env.PORT || 8080; 
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
//use these html routes on the server
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);
//use these api routes on the server


//starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);    
});