var connection = require('../db_config')

function changesHandler (req,res){
	//test1
	console.log(req.body);
	var user = JSON.parse(req.body.user)
	var query = "UPDATE bgn_user SET name = '" + user.name + "', last_name = '" + user.lastname + "', `e-mail` = '" + user.email + "' where username = '" + user.username +"'";
	//test2 - nakon dodjeljivanja varijabli
	console.log(query);
	connection.query(query,user, function (error, results, fields) {
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
				message:'User has succesfully changed his data'
			})
		}
	});

}

module.exports = changesHandler

