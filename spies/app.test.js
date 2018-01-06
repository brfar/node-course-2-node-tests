// spies come built with expect, all we have to do it load it in.
const expect = require('expect');

/* Rewire let's us swap out variables for tests. In our case, in our test file we'll be able to 
replace the db object with something else completely. Then we the code runs, instead of calling 
db.saveUser() as defined on db.js it's gonna be calling db.saveUser() which will be a spy. */
const rewire = require('rewire');
/* The way the 'rewire' works is that it requires you to user 'rewire' instead of 'require' when you're
loading in the file you wanna mock out. In our case we wanna replace db (on app.js) for something else
so when we load in 'app' we have to load it in in a special way: */
var app = rewire('./app.js');
/* Rewire loads your file through 'require' but also adds two methods on to app: app.__get__ and 
app.__set__ we can use these to mock out various data inside of app.js. That means we're gonna make a
simulation of the db object, the one that comes back from db.js and we'll swap out the function with a spy */

/* Creates very first test. */
describe('App', () => {
	var db = {
		saveUser: expect.createSpy() //saveUser is the only thing we wanna mock out
	};
	/* Now we have this db variable and the only thing left to do is replace it and we do that using: */
	app.__set__('db', db); // 1st arg. is the thing we wanna replace and the 2nd is what we wanna replace it.

	// Individuals test cases
	it('should call the spy correctly', () => {
		/* To create a spy, you're gonna call this function, which is gonna return a function 
    and that is the function you're gonna swap out with the real one, which means we do wanna 
    store it in a variable */
		var spy = expect.createSpy();
		/* Now we would inject 'spy' into our code, whether it's app.js or some other function and
    we would wait for it to get called. */

		/* Calling it right here. Now we can set up a series of assertions using expect's spy assertions */
		spy('Andrew', 25);
		expect(spy).toHaveBeenCalledWith('Andrew', 25);
	});

	it('should call saveUser with user object', () => {
		// this is what's gonna actually run when the test gets executed
		var email = 'andrew@example.com';
		var password = '123abc';

		app.handleSignup(email, password);
		/* At this point, handleSignup is gonna get executed, that means the code over app.js is gonna run
      and it's gonna fire db.saveUser(), but db.saveUser() is not the method in db.js, it's a spy instead,
      which mean we can now use those assertions we just learned about. */

		/*expect now is used to expect something about db.saveUser() in this function! */
		expect(db.saveUser).toHaveBeenCalledWith({ email, password });
	});
});
