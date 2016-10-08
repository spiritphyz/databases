var models = require('../models');
var fs = require('fs');


var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};


module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
      content = '';
      req.on('data', function(chunk) {
        content += chunk;
      });
      req.on('end', function() {
        content = content.toString();
        fs.appendFile('/Volumes/student/2016-09-databases/server/fakeMessages.txt', content, 'utf8', function(err) {
          if (err) {
            console.log('error on appendFile', err);
          }
        });
      });
      console.log('content inside post is', content);
      res.writeHead(200, headers);
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

