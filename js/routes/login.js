var jwt = require('jsonwebtoken')

var connection = require('../db_config')
var constants = require('../constants')


function loginHandler (req,res) {
	var username = req.body.username; 
	var password = req.body.password;

	connection.query('SELECT * FROM bgn_user WHERE username = ?',[username], function (error, results, fields){
		//console.log('reci mi error', error, 'reci mi rezultate', results) 
    	if (results.length === 0){
			return res.json({
				status: false, 
				message: 'Unedentified user, please register'
			})
		}
		else{
			if(results.length > 0){
				console.log('results', results[0])
				if(password==results[0].password){
					return res.json({
						status:true,
						token: jwt.sign({username: results[0].username}, constants.JWT_SECRET),
						message:'User logged in succesfully!'
					})

				} 
				else {
					return res.json({
						status:false,
						message:"Username and password don't match! Please try again"	


					})


				}

			};

		}
	})
}

module.exports = loginHandler