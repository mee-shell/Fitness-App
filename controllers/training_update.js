// Import db_channel
const db_training = require('../models/training')

module.exports = function(req, res, next) {
	db_training.findByIdAndUpdate(
		req.params.id,
		{
			new: true
		}).then(function(training_updated) {
		res.status(200).json(training_updated)
	})
}
