/* eslint-disable */
const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
	const res = utils.add(33, 11);

	expect(res).toBe(44);
	// if (res !== 44) throw new Error(`expected 44 but got ${res}`);
});

it('should square a number', () => {
	const res = utils.square(5);

	if (res !== 25) throw new Error(`expected 25 but got ${res}`);
});
