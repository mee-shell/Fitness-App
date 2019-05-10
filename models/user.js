// Import db.js
const db = require('../db')
// Import mongoose from node_modules
const mongoose = require('mongoose')

let schema = mongoose.Schema
let ObjectId = schema.Types.ObjectId

// Create schema for user
const db_user = db.model('user', {
	__v: {
		type: Number,
		select: false
	},
	// ..................... personal Info ................
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	// date of birth
	dob: {
		type: String,
		required: true
	},
	// specialization, skills as physio
	skills: {
		type: String,
	},

	job: {
		type: String
	},
	// ...................Address ......................
	addressStreet: {
		type: String,
		required: true
	},
	addressTown: {
		type: String,
		required: true
	},
	addressStreetNr: {
		type: Number,
		required: true
	},
	addressPostCode: {
		type: String,
		required: true
	},
	addressCountry: {
		type: Number,
		required: true
	},
	// .....................Email login ..................
	email: {
		type: String,
		required: true,
		validate: [
			{
				validator: function(email) {
					return email.length > 6
				},
				message: 'email must be 7 characters minimum'
			}
		]
	},
	password: {
		type: String,
		required: function() {
			return this.google == null
		}
	},
	// ......................account type .....................
	// user status: physio: false, customer: true
	status: {
		type: Boolean,
		default: false
	},
	// premium account: true, free account: false
	account: {
		type: Boolean,
		default: false
	},
	// account creation date
	created: {
		type: Date,
		required: true,
		default: Date.now
	},
	// ............. login via google ................
	google: {
		id: {
			type: String
		}
	}
})

// Export
module.exports = db_user
