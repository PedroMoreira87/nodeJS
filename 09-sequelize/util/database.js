const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'root', 'root', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

const sequelize = new Sequelize('node-complete', 'postgres', 'root', {
  dialect: 'postgres',
  host: 'localhost'
});

module.exports = sequelize;
