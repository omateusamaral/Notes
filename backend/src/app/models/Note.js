const Sequelize, {Model} = require('sequelize');

class Note extends Model{
  static init(sequelize){
    super.init({
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

}
module.exports = Note;
