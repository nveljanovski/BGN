var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root2",
  database: "bgn"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});