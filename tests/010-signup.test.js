process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = require('chai').should()
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const server = require('../index')
const db_user = require('../models/user')

// Sign up user

describe('signup', function() {

	it('should create a new user', function(done) {
		chai.request(server).post('/api/signup')
			.send({
				name: 'John',
				email: 'john@email.com',
				password: '123123'
			})
			.end(function(err, res) {
				if (err) {
					console.log('ERR', err);
				}
				console.log('RES BODY', res.body);
				res.body.email.should.equal('john@email.com')
				done()
			})
	})

	it('should not create a user with the same email', function(done) {
		chai.request(server).post('/api/signup')
			.send({
				name: 'John',
				email: 'john@email.com',
				password: '123123'
			})
			.end(function(err, res) {
				if (err) {
					console.log('ERR', err);
				}
				console.log('RES BODY', res.body);
				res.body.message.should.equal('User already exists')
				done()
			})
	})

})
