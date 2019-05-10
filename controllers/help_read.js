// Import db_user
const db_help = require('../models/help')

module.exports = function(req, res, next) {
	db_help.findById(req.params.id).then(function(help) {
		res.json(help)
	})
}
