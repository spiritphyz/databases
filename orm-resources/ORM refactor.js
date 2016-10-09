var Sequelize = require('sequelize');
var db = new Sequelize('chatter', 'root', '');

var Users = db.define('Users', {
  user: Sequelize.STRING,
});

var Rooms = db.define('rooms', {
  room: Sequelize.STRING,
})

var Message = db.define('Message', {
  text: Sequelize.STRING,
  objectId: Sequelize.STRING,
  createdAt: Sequelize.TIMESTAMP
});


Message.belongsTo(Users);
Message.belongsTo(Rooms);
Rooms.hasMany(Message);
Users.hasMany(Message);

Users.sync();
Messages.sync();
Rooms.sync();
  // .then(function() {
  //   // Now instantiate an object and save it:
  //   return User.create({username: 'Jean Valjean'});
  // })
  // .then(function() {
  //   // Retrieve objects from the database:
  //   return User.findAll({ where: {username: 'Jean Valjean'} });
  // })
  // .then(function(users) {
  //   users.forEach(function(user) {
  //     console.log(user.username + ' exists');
  //   });
  //   db.close();
  // })
  // .catch(function(err) {
  //   // Handle any error in the chain
  //   console.error(err);
  //   db.close();
  // });