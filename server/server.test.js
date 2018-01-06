const request = require('supertest');
// 'supertest' was made by the creators of express to make testing express apps simpler

const expect = require('expect');

var app = require('./server.js').app;

// the 'it' still is coming from mocha, 'supertest' is used to fill in the gaps.
it('should return hello world response', done => {
	/* to use supertest we call request, passing in the express application */
	request(app)
		.get('/')
		.expect(200)
		.expect('hello world')
		.end(done);
});

it('should return my user object', done => {
	request(app)
		.get('/users')
		.expect(200)
		.expect(res => {
			expect(res.body).toInclude({
				name: 'bruno',
				age: 27,
			})
		})
		.end(done); // <~ wrap up the request!
});