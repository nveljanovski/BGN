var connection = require('../db_config')

function profileHandler (req,res) {
	var username = req.user.username
	connection.query('SELECT * FROM bgn_user WHERE username = ?',[username], function (error, results, fields){
		if (results.length < 1) {
			res.status(400).json({
				message: 'There is no such user'
			})
		}

		res.status(200).json({
			name: results[0].name,
			lastName: results[0].last_name,
			email: results[0]['e-mail'],
			username: results[0].username,
			password: results[0].password
		})

	});
}

module.exports = profileHandler 







