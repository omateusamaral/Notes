const Sequelize = require('sequelize');
const database = require('../config/database');
const User = require('../app/models/User');
const Note = require('../app/models/Note');
//configurando o carregamento do model de user
const connection = new Sequelize(database);

User.init(connection);
Note.init(connection);
User.associate(connection.models);
Note.associate(connection.models);

module.exports = connection;
