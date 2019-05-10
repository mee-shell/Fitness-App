// Import db_message
const db_contact = require('../models/contact')

module.exports = function(req, res, next) {

	let query = {}

	if (req.query.channel) {
		query = {'channel' : req.query.channel}
	}

	db_contact
	.find(query)
	.populate({
		path: 'channel',
		select: 'name'
	})
	.populate({
		path: 'user',
		select: 'name'
	})
	.then(function(contacts) {
		res.status(200).json(contacts)
	})
}
