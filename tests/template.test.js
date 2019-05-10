process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = require('chai').should()
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const server = require('../index')
const db_user = require('../models/user')

// login user

describe('login', function() {

	it('should create a new user', function(done) {
		chai.request(server).post('/api/signup')
			.send({

			})
	})

	it('should not create a user with the same email', function(done) {
		chai.request(server).post('/api/signup')
			.send({
				
			})
	})

})
