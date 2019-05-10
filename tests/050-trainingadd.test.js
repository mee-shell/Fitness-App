process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = require('chai').should()
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const server = require('../index')
const db_user = require('../models/user')

// login user

describe('trainingadd', function() {

	it('should filter and display exercises', function(done) {
		chai.request(server).post('/api/signup')
			.send({

			})
	})

	it('should add exercises to a patients list', function(done) {
		chai.request(server).post('/api/signup')
			.send({

			})
	})

})
