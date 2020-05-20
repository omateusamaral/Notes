const { Router } = require('express');
const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const NoteController = require('./app/controllers/NoteController');
const authMiddleware = require('./app/middlewares/auth');
const routes = Router();
routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.post('/users/notes', NoteController.store);
routes.get('/users/notes', NoteController.index);
routes.delete('/users/:note_id/notes', NoteController.delete);

module.exports = routes;
