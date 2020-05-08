const express = require('express');
const User = require('./app/models/User');
const routes = express.Router();
//rota teste para ver se esta funcionando a criação do usuário
routes.get('/', async (req, res) => {
  try {
    const user = await User.create({
      name: 'mateus',
      email: 'mateus@gmail.com',
      password_hash: '12345679',
    });
    return res.json(user);
  } catch (error) {
    return res.json({ err: error });
  }
});

module.exports = routes;
