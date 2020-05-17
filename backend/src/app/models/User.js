const Sequelize = require('sequelize');
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');
//model de usuário
class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    //adicionando criptografia hash na senha
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }
  //funcão para checar senha
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
  //relacionamento entre as tabela de note e user
  static associate(models) {
    this.hasMany(models.Note, { foreignKey: 'user_id', as: 'usernotes' });
  }
}
module.exports = User;
