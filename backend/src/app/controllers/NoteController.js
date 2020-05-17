const YUP = require('yup');
const { startOfHour } = require('date-fns');
const { parseISO } = require('date-fns');
const { isBefore } = require('date-fns');
const User = require('../models/User');
const Note = require('../models/Note');

module.exports = {
  //metodo para listar os notes
  async index(req, res) {
    const user = await User.findByPk(req.userId, {
      include: { association: 'usernotes' }, //fazendo a associação entre as tabelas
    });
    return res.json(user.usernotes);
  },
  //metodo de criação de note
  async store(req, res) {
    //usando yup para validar dados de criação
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

    /**
     * Checando se é data passada
     */
    const hourStart = startOfHour(parseISO(notify));

    if (isBefore(hourStart, new Date())) {
      return res.status(400).json({ error: 'Past dates are not permitted' });
    }

    const notes = await Note.create({
      title,
      description,
      notify,
      user_id: req.userId,
    });

    return res.json(notes);
  },
  //metodo para deletar note
  async delete(req, res) {
    //pegando o id do note por parametro
    const { note_id } = req.params;
    const UserExists = await User.findByPk(req.userId);
    const NoteExists = await Note.findByPk(note_id);

    if (!UserExists) {
      return res.status(400).json({ error: 'User does not exists' });
    }

    if (!NoteExists) {
      return res.status(400).json({ error: 'Note does not exists' });
    }

    await Note.destroy({
      where: {
        id: note_id, //deletando pelo id do note
      },
    });
    return res.json({ message: 'the note was deleted whit sucess' });
  },
};
