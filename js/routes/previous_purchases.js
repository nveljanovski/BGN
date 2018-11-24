var connection = require('../db_config')

function purchaseHandler (req,res) {
	var username = req.user.username
	connection.query('SELECT * FROM bgn_prevpurch WHERE username = ?',[username], function (error, results, fields){
		if (results.length < 1) {
			res.status(400).json({
				message: 'No games were bought'
			})
		}

		res.status(200).json(results)

	});
}

module.exports = purchaseHandler 
