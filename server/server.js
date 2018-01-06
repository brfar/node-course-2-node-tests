const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('hello world');
});

app.get('/users', (req, res) => {
	res.send([
		{
			name: 'bruno',
			age: 27,
		},
		{
			name: 'junia',
			age: 30,
		},
		{
			name: 'miro',
			age: 53,
		}
	]);
});

app.listen(3000, () => {
	console.log('server is running');
});

module.exports.app = app;
