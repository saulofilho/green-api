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
    const { id, name, infos, tools } = req.body;

    const addProject = await Project.create({
      user_id: req.userId,
      id,
      name,
      infos,
      tools,
    });

    return res.json(addProject);
  }

  async delete(req, res) {
    const Project = await Project.findByPk(req.params.id);

    await Project.destroy();

    return res.json(Project);
  }

  async update(req, res) {
    const { id, name, infos, tools } = req.body;

    const ProjectEdit = await Project.findOne({
      where: { Project: req.body.Project },
    });

    if (ProjectEdit === null) {
      res.json({ error: 'Project not found!' });
    } else {
      const ProjectEdit = await Project.update(
        {
          id,
          name,
          infos,
          tools,
        },
        {
          where: {
            id,
          },
        }
      );
      console.log(ProjectEdit instanceof Project);
      console.log(ProjectEdit.Project);
    }

    return res.json({
      id,
      name,
      infos,
      tools,
    });
  }
}

module.exports = new ProjectController();
