// xxx Used to be message :
// Import db.js
const db = require('../db')
// Import mongoose from node_modules
const mongoose = require('mongoose')

let schema = mongoose.Schema
let ObjectId = schema.Types.ObjectId

// Create schema for message
const db_injury = db.model('injury', {
	__v: {
		type: Number,
		select: false
	},
	injName: {
		type: String,
		required: true
	},
	// injCreated: {
	// 	type: Date,
	// 	required: true,
	// 	default: Date.now
	// },
	injRehabStage: {
		type: String
	},
	injRehabStage: {
		type: String
	},
	injMuscleAvoidance: {
		type: String
	},

	injMuscle: {
		type: ObjectId,
		ref: 'exercises',
		required: [true, 'User is required']
	}
})

// Export
module.exports = db_injury
