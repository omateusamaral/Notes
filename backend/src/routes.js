const { Router } = require('express');
const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const NoteController = require('./app/controllers/NoteController');
const authMiddleware = require('./app/middlewares/auth');
const routes = Router();
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/users/:user_id/notes', NoteController.store);
routes.get('/users/:user_id/notes', NoteController.index);
routes.use(authMiddleware);
routes.put('/users', UserController.update);

module.exports = routes;
