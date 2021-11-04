const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

  sequelize = new Sequelize(process.env.JAWSDB_URL);

module.exports = sequelize;