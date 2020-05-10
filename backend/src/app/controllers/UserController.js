const Yup = require('yup');
const User = require('../models/User');
//controller de usuário
module.exports = {
  //metodo para criar um usuario
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const userExists = await User.findOne({
      //verificando se um usuário já existe com email passado pelo usuario
      where: { email: req.body.email },
    });
    //se existe vai cair aqui
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }
    //se não existe é criado
    const { id, name, email } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  },
  //metodo para atualizar um usuário
  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      //quando o campo password é informado o confirmpassword tbm deve ser confirmado
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const { email, oldPassword } = req.body;
    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      //se email digitado pelo usuário for diferente do que existe ele cai aqui
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }
    //metodo para mudar a senha
    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }
    const { id, name } = await user.update(req.body);
    return res.json({ id, name, email });
  },
};
