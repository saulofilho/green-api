const Project = require('../models/Project');
const User = require('../models/User');
const Green = require('../models/Green');
const Img = require('../models/Img');
class ProjectController {
  async indexAll(req, res) {
    const dataProject = await Project.findAll({
      where: { user_id: req.userId },
      order: ['id'],
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name', 'email'],
        },
        {
          model: Green,
          as: 'green',
          order: [['createdAt', 'DESC']],
          limit: 28,
          attributes: [
            'id',
            'infos',
            'ph_water',
            'ph_soil',
            'ec',
            'temp_max',
            'temp_min',
            'moisture',
            'air_humidity',
            'plant_size',
            'phase',
            'project_id',
            'img_id',
            'createdAt',
            'updatedAt',
          ],
        },
      ],
    });

    res.json(dataProject);
  }

  async index(req, res) {
    const { page = 1 } = req.query;

    const ProjectItem = await Project.findByPk(req.params.id, {
      where: { user_id: req.userId },
      order: ['id'],
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name', 'email'],
        },
        {
          model: Green,
          as: 'green',
          order: ['id'],
          limit: 28,
          offset: (page - 1) * 28,
          attributes: [
            'id',
            'infos',
            'ph_water',
            'ph_soil',
            'ec',
            'temp_max',
            'temp_min',
            'moisture',
            'air_humidity',
            'plant_size',
            'phase',
            'project_id',
            'img_id',
            'createdAt',
            'updatedAt',
          ],
          include: [
            {
              model: Img,
              as: 'img',
              attributes: ['id', 'path', 'url', 'name'],
            },
          ],
        },
      ],
    });

    if (ProjectItem === null) {
      res.json({ error: 'Project not found!' });
    } else {
      res.json(ProjectItem);
    }
  }

  async store(req, res) {
    const {
      id,
      harvest_name,
      strain_name,
      breeder,
      flowering_type,
      infos,
      tools,
      nutrients,
      soil,
      pot_size,
      light_schedule,
      grow_techniques,
    } = req.body;

    const addProject = await Project.create({
      user_id: req.userId,
      id,
      harvest_name,
      strain_name,
      breeder,
      flowering_type,
      infos,
      tools,
      nutrients,
      soil,
      pot_size,
      light_schedule,
      grow_techniques,
    });

    return res.json(addProject);
  }

  async delete(req, res) {
    const projectDelete = await Project.findByPk(req.params.id);

    await projectDelete.destroy();

    return res.json(projectDelete);
  }

  async update(req, res) {
    const projectEdit = await Project.findByPk(req.params.id);

    await projectEdit.update(req.body);

    return res.json(projectEdit);
  }
}

module.exports = new ProjectController();
