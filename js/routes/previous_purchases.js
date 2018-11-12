var connection = require('../db_config')

function purchaseHandler (req,res) {
	var username = req.user.username
	connection.query('SELECT * FROM bgn_prevpurch WHERE username = ?',[username], function (error, results, fields){
		if (results.length < 1) {
			res.status(400).json({
				message: 'No games were bought'
			})
		}

		res.status(200).json({
			game: results[0].game_name,
			date: results[0].purch_date,
			price: results[0].game_price,
			
		})

	});
}

module.exports = purchaseHandler 
