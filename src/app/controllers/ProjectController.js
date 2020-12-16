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
    const Project = await Project.findByPk(req.params.id);

    await Project.destroy();

    return res.json(Project);
  }

  async update(req, res) {
    const {
      id,
      harvest_name,
      strain_name,
      breeder,
      infos,
      tools,
      nutrients,
      soil,
      pot_size,
      light_schedule,
      grow_techniques,
    } = req.body;

    const ProjectEdit = await Project.findOne({
      where: { Project: req.body.Project },
    });

    if (ProjectEdit === null) {
      res.json({ error: 'Project not found!' });
    } else {
      const ProjectEdit = await Project.update(
        {
          id,
          harvest_name,
          strain_name,
          breeder,
          infos,
          tools,
          nutrients,
          soil,
          pot_size,
          light_schedule,
          grow_techniques,
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
      harvest_name,
      strain_name,
      breeder,
      infos,
      tools,
      nutrients,
      soil,
      pot_size,
      light_schedule,
      grow_techniques,
    });
  }
}

module.exports = new ProjectController();
