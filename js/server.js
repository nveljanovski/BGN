var connection = require('./db_config'); 

var express = require('express');  
var app = express();
var mysql = require('mysql');  
var bodyParser = require('body-parser');  
var	PORT = process.env.PORT || 3000;

var auth = require('./middleware/auth')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(PORT);

//Sekcija koja čekira usera. 
app.post('/login', require('./routes/login'))

//sekcija koja mi služi za registriranje usera
app.post('/register', require('./routes/register'))

//sekcija koja drži logged in
app.get('/me', auth, require('./routes/profile'))

//sekcija za prijasnje kupnje
app.get('/previous_purchases', auth, require('./routes/previous_purchases'))

//sekcija za pregled svih usera kao admin
app.get('/admin_user', auth, require('./routes/admin_user'))

//sekcija za pregled svih igara kao admin
app.get('/admin_games', auth, require('./routes/admin_games'))

//sekcija za unos promjena po useru
app.post('/changes', require('./routes/changes'))

//sekcija za kupnju igara
//app.post('/buygames', require('routes/buygames'))




