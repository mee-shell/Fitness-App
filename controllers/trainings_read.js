// Import db_channel
const db_training = require('../models/training')

module.exports = function(req, res, next) {
	db_training.find({}).then(function(trainings) {
		res.json(trainings)
	})
}
