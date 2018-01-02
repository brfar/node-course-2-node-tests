/*eslint-disable*/
const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

it('should return hello world response', done => {
	request(app)
		.get('/')
		.expect(200)
		.expect('hello world')
		.end(done);
});

it('stuff', done => {
	request(app)
		.get('/users')
		.expect(200)
		.expect(res => {
			expect(res.body).toInclude({
				name: 'bruno',
				age: 27,
			})
		})
		.end(done);
});