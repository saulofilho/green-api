const Green = require('../models/Green');
const Img = require('../models/Img');
const Project = require('../models/Project');
const User = require('../models/User');

class GreenController {
  async indexAll(req, res) {
    const dataGreen = await Green.findAll({
      include: [
        {
          model: Img,
          as: 'img',
        },
        {
          model: Project,
          as: 'project',
          attributes: ['name', 'infos'],
          where: { user_id: req.userId },
          include: [
            {
              model: User,
              as: 'user',
              attributes: ['id', 'name', 'email'],
            },
          ],
        },
      ],
    });

    res.json(dataGreen);
  }

  async index(req, res) {
    const ProjectItem = await Green.findByPk(req.params.id);

    if (ProjectItem === null) {
      res.json({ error: 'Project not found!' });
    } else {
      res.json(ProjectItem);
    }
  }

  async store(req, res) {
    const {
      ph,
      ec,
      temp_max,
      temp_min,
      moisture,
      infos,
      img_id,
      id,
      phases,
    } = req.body;

    const addGreen = await Green.create({
      user_id: req.userId,
      ph,
      ec,
      temp_max,
      temp_min,
      moisture,
      infos,
      img_id,
      id,
      phases,
    });

    return res.json(addGreen);
  }

  async delete(req, res) {
    const green = await Green.findByPk(req.params.id);

    await green.destroy();

    return res.json(green);
  }

  async update(req, res) {
    const {
      ph,
      ec,
      temp_max,
      temp_min,
      moisture,
      infos,
      img_id,
      id,
      phases,
    } = req.body;

    const greenEdit = await Green.findOne({ where: { green: req.body.green } });

    if (greenEdit === null) {
      res.json({ error: 'Green not found!' });
    } else {
      const greenEdit = await Green.update(
        {
          ph,
          ec,
          temp_max,
          temp_min,
          moisture,
          infos,
          img_id,
          id,
          phases,
        },
        {
          where: {
            id,
          },
        }
      );
      console.log(greenEdit instanceof Green);
      console.log(greenEdit.green);
    }

    return res.json({
      ph,
      ec,
      temp_max,
      temp_min,
      moisture,
      infos,
      img_id,
      id,
      phases,
    });
  }
}

module.exports = new GreenController();
