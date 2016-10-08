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



// example query
// https://www.terlici.com/2015/08/13/mysql-node-express.html
// connection.query('CREATE TABLE people(id int primary key, name varchar(255), age int, address text)', function(err, result) {
//   if (err) {
//     throw err;
//   }
//   connection.query('INSERT INTO people (name, age, address) VALUES (?, ?, ?)', ['Larry', '41', 'California, USA'], function(err, result) {
//     if (err) {
//       throw err;
//     }
//     connection.query('SELECT * FROM people', function(err, results) {
//       if (err) {
//         throw err;
//       }
//       console.log(results[0].id);
//       console.log(results[0].name);
//       console.log(results[0].age);
//       console.log(results[0].address);
//     });
//   });
// }); 

