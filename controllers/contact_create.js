// Import db_message
const db_contact = require('../models/contact')

module.exports = function(req, res, next) {

	req.body.user = req.user._id

	db_contact.create(req.body).then(function(new_contact) {
		db_contact
			.findById(new_contact._id)
			.populate({
				path: 'user',
				select: 'name'
			}).then(function(saved_contact) {
				res.status(201).json(saved_contact)
			})
	})

	// Only works on update
	// db_message.populate(req.body,
	// 	{
	// 		path: 'user',
	// 		select: 'name'
	// 	},
	// 	function(err, new_message) {
	// 		res.status(201).json(new_message)
	// 	}
	// )

}
