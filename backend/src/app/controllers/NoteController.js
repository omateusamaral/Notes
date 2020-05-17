const User = require('../models/User');
const Note = require('../models/Note');

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;
    const user = await User.findByPk(user_id, {
      include: { association: 'usernotes' },
    });
    return res.json(user.usernotes);
  },
  async store(req, res) {
    const { user_id } = req.params;
    const { title, description, notify } = req.body;
    const UserExists = await User.findByPk(user_id);
    if (!UserExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const notes = await Note.create({
      title,
      description,
      notify,
      user_id,
    });

    return res.json(notes);
  },
};
