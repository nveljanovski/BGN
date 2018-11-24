var connection = require('../db_config')

function gamesHandler (req,res){
	var user = {
		username: req.body.username,
		game_code: req.body.gamecode, 
		game_name: req.body.gamename,
		purch_date: today,
		game_price: req.body.gameprice,
	};
	connection.query('UPDATE bgn_prevpurch SET name',user, function (error, results, fields) {
		console.log('reci mi error', error, 'reci mi rezultate', results) 
		if (error) {
			return res.json({
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

module.exports = changesHandler
