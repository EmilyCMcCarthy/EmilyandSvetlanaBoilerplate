const Sequelize = require('sequelize');


const db = new Sequelize('postgres://localhost:5432/Boilerplate', {
  logging: false // unless you like the logs
  // ...and there are many other options you may want to play with
});

db.sync({force: false});
require('./models');
module.exports = db;
