// xxx Used to be message :
// Import db.js
const db = require('../db')
// Import mongoose from node_modules
const mongoose = require('mongoose')

let schema = mongoose.Schema
let ObjectId = schema.Types.ObjectId

// Create schema for message
const db_search = db.model('search', {
	__v: {
		type: Number,
		select: false
	},
	searchPageNr: {
		type: Number
	},
	searchPageName: {
		type: String,
	},
	searchPageLink: {
		type: String,
	},
	// xxx how to properly connect : search name and find ID 
	searchUser: {   // this needs to be connected to user id?
		type: ObjectId,
		ref: 'user',
		// required: [true, 'User is required']
	}
})

// Export
module.exports = db_search
