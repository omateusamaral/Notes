//configurando o banco de dados
module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'password',
  database: 'notes',
  //funcionalidades a mais
  define: {
    timestamps: true, //garante um createdat e updateat no bd
    //isso tira o padrao camel case do bd
    underscored: true,
    undersciredAll: true,
  },
};
