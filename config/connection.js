/*=======================Connect Node to MySQL==============================*/
//require mysql npm package
var mysql = require('mysql');
var connection;
//create connection to burgers_db set to variable named connection
if(process.env.JAWSDB_URL) { 
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
	var connection = mysql.createConnection({
  			host     : 'localhost',
  			user     : 'root',
  			password : '1234',
  			database : 'burgers_db'
	});
}


//establish a connection
connection.connect(function(err){
	if(err){
		console.log('error connection: ' + err.stack);
	}
	console.log('connected to mysql as id ' + connection.threadId);
});
/*====================END Connect Node to MySQL==============================*/

//export the mysql connection variable to be used in orm.js
module.exports = connection;


