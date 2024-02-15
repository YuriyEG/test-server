const { Sklad } = require("../models/models");

class SkladController {
  async getAll(req, res) {
    const sklads = await Sklad.findAll();
    return res.json(sklads);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const sklad = await Sklad.findOne({ where: { id } });
    if (sklad) {
      return res.json(sklad);
    } else {
      return res.json({ message: "Not found " + id });
    }
  }

  async create(req, res) {
    const { name } = req.body;
    const sklad = await Sklad.create({ name });

    return res.json(sklad);
  }
  async delete(req, res) {
    const { id } = req.params;
    const sklad = await Sklad.destroy({ where: { id } });
    return res.json(sklad);
  }
}

module.exports = new SkladController();
