var jwt = require('express-jwt')
var constants = require('../constants')

module.exports = jwt({secret: constants.JWT_SECRET})