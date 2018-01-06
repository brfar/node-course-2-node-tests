var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  // Check if email already exists
  // Save the user to the database
  db.saveUser({ email, password });
  // Send the welcome email
}

/* Spies let you swap a real function like saveUser for a testing utility. When that test function gets
called, you can create various assertions about it, making sure it was called with certain arguments.
 */