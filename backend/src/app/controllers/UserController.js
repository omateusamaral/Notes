const User = require('../models/User');
//controller de usuário
module.exports = {
  //metodo para criar um usuario
  async store(req, res) {
    const userExists = await UserModel.findOne({
      //verificando se um usuário já existe com email passado pelo usuario
      where: { email: req.body.email },
    });
    //se existe vai cair aqui
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }
    //se não existe é criado
    const { id, name, email } = await UserModel.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  },
  //metodo para atualizar um usuário
  async update(req, res) {
    const { email, oldpassword } = req.body;
    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      //se email digitado pelo usuário for diferente do que existe ele cai aqui
      const userExists = await UserModel.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }
    //metodo para mudar a senha
    if (oldpassword && !(await user.checkPassword(oldpassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }
    const { id, name } = await user.update(req.body);
    return res.json({ id, name, email });
  },
};
