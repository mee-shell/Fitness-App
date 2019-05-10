// Import db_user
const db_help = require('../models/help')

module.exports = function(req, res, next) {
	db_help
	.find({})
	.select({
		created: 0
	})
	.then(function(helps) {
		res.status(200).json(helps)
	})
}
