process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = require('chai').should()
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const server = require('../index')
const db_user = require('../models/user')

// login user

describe('contact', function() {

	it('should submit a category,email and message to db', function(done) {
		chai.request(server).post('/api/signup')
			.send({

			})
	})

	it('should not create an entry with a category missing', function(done) {
		chai.request(server).post('/api/signup')
			.send({

			})
	})

})
