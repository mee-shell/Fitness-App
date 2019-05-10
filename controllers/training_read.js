// Import db_channel
const db_training = require('../models/training')

module.exports = function(req, res, next) {
	db_training.findById(req.params.id).then(function(training) {
		res.status(200).json(training)
	})
}
