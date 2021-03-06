var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var PORT = process.env.PORT || 3000;


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//override POST when having ?_method=DELETE
app.use(methodOverride('_method'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//register a Handlebars view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//require the express routes from burgers_controller.js set to variable routes
var routes = require('./controllers/burgers_controller.js');
//use the var routes (express routes) when url returns /index
app.use('/', routes);

//start the server
app.listen(PORT, function(){
	console.log("listenning on http://localhost:" + PORT);
});


