process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = require('chai').should()
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const server = require('../index')
const db_user = require('../models/user')

// login user

describe('bid', function() {

	it('should filter and get different chart points', function(done) {
		chai.request(server).post('/api/signup')
			.send({

			})
	})

	it('should...', function(done) {
		chai.request(server).post('/api/signup')
			.send({

			})
	})

})
