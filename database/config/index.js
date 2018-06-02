const Sequelize = require('sequelize');

const db = new Sequelize('auction', 'Joseph', '', {
  host: 'localhost',
  dialect: 'postgres'
});

db.authenticate()
  .then(() => console.log('db authenticated'))
  .catch(err => console.log('error authenticating db'))
  
module.exports = {
  db: db
};