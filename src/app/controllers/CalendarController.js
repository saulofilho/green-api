const Calendar = require('../models/Calendar');

class CalendarController {
  async index(req, res) {
    const allCalendar = await Calendar.findAll();

    return res.json(allCalendar);
  }

  async store(req, res) {
    const { title, all_day, start, end, project_id } = await Calendar.create(
      req.body
    );

    return res.json({
      title,
      all_day,
      start,
      end,
      project_id,
      user_id: req.userId,
    });
  }

  async update(req, res) {
    const updateCalendar = await Calendar.findByPk(req.params.id);

    await updateCalendar.update(req.body);

    return res.json(updateCalendar);
  }

  async delete(req, res) {
    const deletCalendar = await Calendar.findByPk(req.params.id);

    await deletCalendar.destroy();

    return res.json(deletCalendar);
  }
}

module.exports = new CalendarController();
