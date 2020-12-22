const Project = require('../models/Project');
const User = require('../models/User');

class ProjectController {
  async indexAll(req, res) {
    const dataProject = await Project.findAll({
      where: { user_id: req.userId },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name', 'email'],
        },
      ],
    });

    res.json(dataProject);
  }

  async index(req, res) {
    const ProjectItem = await Project.findByPk(req.params.id);

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
