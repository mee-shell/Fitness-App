// xxx Used to be message :
// Import db.js
const db = require('../db')
// Import mongoose from node_modules
const mongoose = require('mongoose')

let schema = mongoose.Schema
let ObjectId = schema.Types.ObjectId

// Create schema for message
const db_help = db.model('help', {
	__v: {
		type: Number,
		select: false
	},
	helpContent: {
		type: String,
		required: true
	},
	helpCreated: {
		type: Date,
		required: true,
		default: Date.now
	},
	helpCategory: {
		type: String
	},
	// arrays of tags?
	helpTag: {
		type: String
	},
})

// Export
module.exports = db_help
