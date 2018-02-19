/*setup a model for how to interface with the database*/

//Import (require) sql query functions from orm.js
var orm = require('./../config/orm.js');


/*=====================MODEL FOR HOW TO INTERFACE WITH THE DATABASE========================*/
var burger = {
	all: function(cb){
		orm.selectAll('burgers', function(res){
			cb(res);
		})
	},

	create: function(cols, burgerName, cb){
		orm.insertOne('burgers', cols, burgerName, function(res){
			cb(res);
		})
	},

	update: function(objColVals, condition, cb){
		orm.updateOne('burgers', objColVals, condition, function(res){
			cb(res);
		})
	}
}
/*=====================END MODEL FOR HOW TO INTERFACE WITH THE DATABASE========================*/






//export burger object to be required in burgers_controller.js
module.exports = burger;