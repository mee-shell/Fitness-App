process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = require('chai').should()
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const server = require('../index')
const db_user = require('../models/user')

// login user

describe('help', function() {

	it('should send a topic to the db', function(done) {
		chai.request(server).post('/api/signup')
			.send({
			})
	})

	it('should display the content for a topic', function(done) {
		chai.request(server).post('/api/signup')
			.send({

			})
	})

})
