// Import db_channel
const db_training = require('../models/training')

module.exports = function(req, res, next) {
	db_training.findByIdAndRemove(req.params.id).then(function(deleted_training) {
		res.status(200).json(deleted_training)
	})
}
	
