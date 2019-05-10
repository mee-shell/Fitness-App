// Import db.js
const db = require('../db')
// Import mongoose from node_modules
const mongoose = require('mongoose')

let schema = mongoose.Schema
let ObjectId = schema.Types.ObjectId

// Create schema for user
const db_patient = db.model('patient', {
	__v: {
		type: Number,
		select: false
	},
	//....................patient details ...................
	patWeight: {
		type: Number
	},
	patHeight: {
		type: Number
	},
	// only if hasnt been included in general account creation : validation
	patJob: {
		type: String
	},
	patAcivityPerWeek: {
		type: Number
	},
	patSport: {
		type: String
	},

	// ...................Injury ......................
	patInjury: {
		type: String,
		required: true
	},
	patInjCreation: {
		type: String,
		required: true
	},
	patPainLevel: {
		type: Number,
		required: true
	},
	patPrevInjuries: {
		type: String
	},
	// from users
	patUser: {
 	type: ObjectId,
 	ref: 'user',
 	required: [true, 'User is required']
 }

})

// Export
module.exports = db_patient
