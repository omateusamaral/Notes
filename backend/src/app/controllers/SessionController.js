const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authConfig = require('../../config/auth');
//controller de sessão
module.exports = {
  //criando uma sessão
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } }); //pocurando um usuário pelo seu email

    if (!user) {
      return res.status(401).json({ error: 'User not found in our database' });
    }

    if (!(await user.checkPassword(password))) {
      //verificando se a senha esta correta
      return res.json(401).json({ error: 'Password does not match' });
    }
    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        //passando o segredo e quando expira o token
        expiresIn: authConfig.expiresIn,
      }),
    });
  },
};
