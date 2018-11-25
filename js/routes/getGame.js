var connection = require('../db_config')

function getGameHandler (req,res) {
	var game_code = req.params.game_code
	connection.query('SELECT * FROM bgn_games  WHERE game_code = ?',[game_code], function (error, results, fields){
		if (results.length < 1) {
			res.status(400).json({
				message: 'There is no game here'
			})
		}

		res.status(200).json(results)

	});
}

module.exports = getGameHandler 

