const YUP = require('yup');
const User = require('../models/User');
const Note = require('../models/Note');

module.exports = {
  async index(req, res) {
    const user = await User.findByPk(req.userId, {
      include: { association: 'usernotes' },
    });
    return res.json(user.usernotes);
  },
  async store(req, res) {
    const schema = YUP.object().shape({
      title: YUP.string().required(),
      description: YUP.string().required().max(255),
      notify: YUP.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { title, description, notify } = req.body;

    const UserExists = await User.findByPk(req.userId);
    if (!UserExists) {
      return res.status(400).json({ error: 'User does not exists' });
    }

    const notes = await Note.create({
      title,
      description,
      notify,
      user_id: req.userId,
    });

    return res.json(notes);
  },

  async delete(req, res) {
    const { note_id } = req.params;
    const NoteExists = await Note.findByPk(note_id);

    if (!NoteExists) {
      return res.status(400).json({ error: 'Note does not exists' });
    }

    await Note.destroy({
      where: {
        id: note_id,
      },
    });
    return res.json({ message: 'the note was deleted whit sucess' });
  },
};
