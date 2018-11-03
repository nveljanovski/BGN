/*Rute za spoj na bazu*/
var express = require ('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var mysql = require('mysql');

var login = express();

/*Spoj na bazu*/
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bgn_main'
});
connection.connect(function(err){
if(!err) {
    console.log("Spojen");
} else {
    console.log("Jok");
}
});

/*login*/
exports.login = function(req,res){
var username= req.body.username;
var password = req.body.password;
  connection.query('SELECT * FROM bgn_user WHERE username = ?',[username], function (error, results, fields) {
  if (error) {
    res.send({
      "code":400,
      "failed":"Nema tog usera"
    })
  }else{
    if(results.length >0){
      if(results[0].password == password){
        res.send({
          "code":200,
          "success":"Spojio si se"
            });
      }
      else{
        res.send({
          "code":204,
          "success":"User i password nisu točni"
            });
      }
    }
    else{
      res.send({
        "code":204,
        "success":"User ne postoji"
          });
    }
  }
  });
}





