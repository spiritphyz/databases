var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

/* eslint-disable */
var connection = mysql.createConnection({
  // host     : 'localhost:3306',
  host     : 'localhost',
  user     : 'root',
  password : 'hi',
  database : 'chat'
});
/* eslint-enable */

// https://expressjs.com/en/guide/database-integration.html#mysql
connection.connect(function(err) {
  if (err) {
    console.log('can\'t connect to mysql');
    throw err;
  }
  console.log('you\'re connected to mysql');
});

// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) {
//     throw err;
//   }
//   console.log('The solution is: ', rows[0].solution);
// });
// connection.end();

module.exports = connection;