//configurando o banco de dados
require('../bootstrap');
module.exports = {
  dialect: process.env.DB_DIALECT || 'mysql',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'notes', //IF YOU RUN THE TESTS PUT HERE process.env.DB_NAME
  storage: './__tests__/database.sqlite',
  logging: false,
  //funcionalidades a mais
  define: {
    timestamps: true, //garante um createdat e updateat no bd
    //isso tira o padrao camel case do bd
    underscored: true,
    undersciredAll: true,
  },
};
