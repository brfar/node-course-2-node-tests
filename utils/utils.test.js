const expect = require('expect'); // makes assertions about shit so we don't have to write duplicate if statements

const utils = require('./utils');

it('should add two numbers', () => {
	const res = utils.add(33, 11);

	expect(res)
		.toBe(44)
		.toBeA('number');
	// if (res !== 44) throw new Error(`expected 44 but got ${res}`);
});

// to test async functions we need to have 'done' as an argument to the callback function
it('should async add two numbers', (done) => {
	utils.asyncAdd(4, 3, sum => {
		expect(sum)
			.toBe(7)
			.toBeA('number');
			done();
	});
});

it('should square a number', () => {
	const res = utils.square(3);

	expect(res)
		.toBe(9)
		.toBeA('numbers');
	// if (res !== 25) throw new Error(`expected 25 but got ${res}`);
});

it('should set firstName and lastName', () => {
	var user = { location: 'philadelphia', age: 25 };
	var res = utils.setName(user, 'andrew mead');

	expect(res).toInclude({
		firstName: 'andrew',
		lastName: 'mead'
	});
});

/* We need to configure the "scripts" in package.json
On test we should call mocha passing in the argument the files we wanna test. 
'**' means mocha should look in every directory; '*.test.js' means it should test every file in the project 
that ends in 'test.js'

Run 'npm test' on the terminal to run the test. 

Run 'nodemon --exec "npm test"' 

If you don't wanna type the whole thing on the terminal, create a new script on package.json: 
"test-watch": "nodemon --exec \"npm test\""
and run `npm run test-watch` and it'll run the test above. */
