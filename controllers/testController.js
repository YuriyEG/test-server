const { Test } = require("../models/models");

class TestController {
  async getAll(req, res) {
    const tests = await Test.findAll();
    return res.json(tests);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const test = await Test.findOne({ where: { id } });
    if (test) {
      return res.json(test);
    } else {
      return res.json({ message: "Not found " + id });
    }
  }

  async create(req, res) {
    const { name } = req.body;
    const test = await Test.create({ name });

    return res.json(test);
  }
  async delete(req, res) {
    const { id } = req.params;
    const test = await Test.destroy({ where: { id } });
    return res.json(test);
  }
}

module.exports = new TestController();
