var mysql = require ('mysql');
var connection = mysql.createConnection({

	host: 'localhost',
	user: 'root',
	password: '', 
	database: 'bgn_main',
})
connection.connect(function(err) {
	if (!err){
		console.log("Database is connected");
	} else {

		console.log("Error while connecting to database");
	}
});

module.exports = connection; 
