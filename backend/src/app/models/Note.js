const Sequelize = require('sequelize');
const { Model } = require('sequelize');

class Note extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.TEXT,
        notify: Sequelize.DATE,
      },
      {
        sequelize,
      }
    );
    return this;
  }
  //relacionamneto de tabelas feito usando fk
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}
module.exports = Note;
