var connection = require('./db_config'); 

var express = require('express');  
var app = express();  
var mysql = require('mysql');  
var bodyParser = require('body-parser');  
var	PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(PORT);

//Sekcija koja čekira usera. 
app.post('/login', require('./routes/login'))

//sekcija koja mi služi za registriranje usera
app.post('/register', require('./routes/register'))










