var connection = require('../db_config')

function userListHandler (req,res) {
	var username = req.user.username
	connection.query('SELECT * FROM bgn_user ',[username], function (error, results, fields){
		if (results.length < 1) {
			res.status(400).json({
				message: 'There are no users'
			})
		}

		res.status(200).json(results)

	});
}

module.exports = userListHandler 

