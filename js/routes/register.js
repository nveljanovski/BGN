var connection = require('../db_config')
var moment= require('moment')

function registerHandler (req,res){
	var today = new Date();
	var user = {
		username: req.body.username,
		name: req.body.name,
		last_name: req.body.lastname, 
		'e-mail': req.body.email,
		password: req.body.password,
		register_date: moment().format(),
	};
	connection.query('INSERT INTO bgn_user SET ?',user, function (error, results, fields) {
		console.log('reci mi error', error, 'reci mi rezultate', results) 
		console.log('2');
		if (req.body.username == username){
			return res.json({
				status: false,
				message: 'Username already exists, pick another one'
		})
		}
		if (error) {
			return res.json({
				status:false,
				message:'Greška je u queriju'
			})
		}else{
			return res.json({
				status:true,
				data:results,
				message:'User has succesfully registered'
			})
		}
	});

}
module.exports = registerHandler

