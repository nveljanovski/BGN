var connection = require('../db_config')

function usersHandler (req,res) {
	var username = req.user.username
	connection.query('SELECT * FROM bgn_user WHERE username = ?',[username], function (error, results, fields){
		if (results.length < 1) {
			res.status(400).json({
				message: 'There are no users'
			})
		}

		res.status(200).json(results)

	});
}

module.exports = usersHandler 