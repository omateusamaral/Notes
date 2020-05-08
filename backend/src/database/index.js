const Sequlize = require('sequelize');
const User = require('../app/models/User');
const database = require('../config/database');
//configurando o carregamento do model de user
const connection = new Sequlize(database);

User.init(connection);

module.exports = connection;
