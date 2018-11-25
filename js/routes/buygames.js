var moment = require('moment')
var connection = require('../db_config')

function gamesHandler (req,res){
	console.log(req.body, req.params, req.user)
	var user = {
		username: req.user.username,
		game_code: req.params.game_code, 
		game_name: req.body.game_name,
		purch_date: moment().format(),
		game_price: req.body.game_price,
	};
	connection.query('INSERT INTO bgn_prevpurch SET ?',user, function (error, results, fields) {
		console.log('reci mi error', error, 'reci mi rezultate', results) 
		if (error) {
			return res.status(400).json({
				status:false,
				message:'Greška je u queriju'
			})
		}else{
			return res.json({
				status:true,
				data:results,
				message:'You bought a game'
			})
		}
	});

}

module.exports = gamesHandler
