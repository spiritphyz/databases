var models = require('../models');
var mysql = require('mysql');
var sql = require('../db/index');
var Promise = require('bluebird');


module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) { // a function which handles posting a message to the database
      console.log('body from user POST is: ', req.body);
      // var user = sql.query('SELECT id FROM users WHERE users.user=\'' + req.body.username + '\';');
      // var room = sql.query('SELECT id FROM rooms WHERE rooms.roomname=\'' + req.body.roomname + '\';');
      // if (user.length === 0) {
      //   sql.query('INSERT INTO `users` (`id`, `user`) VALUES ( NULL, ' + req.body.username + '\';');
      //   user = sql.query('SELECT id FROM users WHERE users.user=\'' + req.body.username + '\';');
      // }

      var user = new Promise(function(todo, todont) {
        sql.query(
          'SELECT id FROM users WHERE users.user=\'' + req.body.username + '\';', function (err, results, fields) {
            if (err) {
              return todont(err);
            }
            return todo(results);
        }) 
      }).then(function(user) {
          if (user.length === 0) {
            sql.query('INSERT INTO `users` (`id`, `user`) VALUES ( NULL, \'' + req.body.username + '\');');
          }
        }).catch(function(err) {
          console.log('couldn\'t insert blank user', err);
      });
      
      // if (room.length === 0) {
      //   sql.query('INSERT INTO `rooms` (`id`, `roomname`) VALUES ( NULL, ' + req.body.roomname + '\';');
      //   user = sql.query('SELECT id FROM rooms WHERE rooms.roomname=\'' + req.body.roomname + '\';');
      // } 
      // sql.query('INSERT INTO `messages` (`id`, `text`, `user_id`, `room_id`) VALUES ( NULL, ' + mysql.escape(req.body.text) + ', \'' + user + '\', \'' + room + '\');' );
    } 
  },


  users: {
    // Ditto as above
    get: function (req, res) {}, 
    post: function (req, res) {}
  }
};

      // var user = new Promise(function(todo, todont) {
      //   sql.query(
      //     'SELECT id FROM users WHERE users.user=\'' + req.body.username + '\';', function (err, results, fields) {
      //       if (err) {
      //         return todont(err);
      //       }
      //       return todo(results);
      //   }).then(function(user) {
      //     if (user.length === 0) {
      //       sql.query('INSERT INTO `users` (`id`, `user`) VALUES ( NULL, ' + req.body.username + '\';')
      //     }
      //   }).catch(function(err) {
      //     console.log('couldn\'t insert blank user', err);
      //   }); 
      // };