// Import db_channel
const db_training = require('../models/training')

module.exports = function(req, res, next) {
	db_training.create(req.body).then(function(new_training) {
		res.status(201).json(new_training)
	})
}
