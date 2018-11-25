var connection = require('../db_config')

function gamesHandler (req,res) {
	var game_code = req.game_code
	connection.query('SELECT * FROM bgn_games WHERE game_code = ?',[game_code], function (error, results, fields){
		if (results.length < 1) {
			res.status(400).json({
				message: 'There are no games'
			})
		}

		res.status(200).json(results)

	});
}

module.exports = gamesHandler 