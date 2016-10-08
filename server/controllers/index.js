var models = require('../models');
var mysql = require('mysql');
var sql = require('../db/index');
var Promise = require('bluebird');


module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
      var messages = new Promise(function(todo, todont) {
          sql.query('select * from messages order by id desc limit 40;', function(err, results, fields) {
          console.log('getting messages from db');
          return err ? todont(err) : todo(results);
        });
      }).then(function(results) {
          console.log('here are results from db');
          var properResults = [].concat(results.reduce((acc, cur) => { 
            return acc.concat( { 
              text: cur.text,
              username: 'zippy',
              roomname: 'lobby',
              createdAt: cur.createdAt,
              updatedAt: cur.createdAt,
              objectId: cur.objectId
            } );
          }, []));
          res.send(properResults);
      }).catch(function(err) {
        console.log('couldn\'t insert message into database', err);
      });
    }, 
    post: function (req, res) { // a function which handles posting a message to the database
      console.log('body from user POST is: ', req.body);

      var user = new Promise(function(todo, todont) {
        var newid = Math.floor(Math.random()* 1292665987).toString(36); 
          sql.query('INSERT INTO `messages` (`id`, `text`, `user_id`, `room_id`, `objectId`, `createdAt` ) VALUES ( NULL, ' + mysql.escape(req.body.text) + ', \'1\', \'1\', \'' + newid + '\', NOW());', function(err, results, fields) {
          console.log('inserted new data into database');
          return err ? todont(err) : todo(results);
          } );
      }).catch(function(err) {
        console.log('couldn\'t insert message into database', err);
      });
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {}, 
    post: function (req, res) {}
  }
};