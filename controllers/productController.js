const { Type } = require("../models/models");

class ProductController {
  async getAll(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept,recording-session"
    );
    res.header("Access-Control-Allow-Methods", "DELETE, POST, GET");
    const types = await Type.findAll();
    return res.json(types);
  }
  // async registration(req, res) {}
  // async login(req, res) {}
  // async check(req, res) {
  //   res.json({ check: "check" });
  // }
  async create(req, res) {
    const { name, producer, about } = req.body;
    // const type = await Type.create({ name, producer, about });
    return res.json({ name, producer, about });
    // return res.json({ result: true });
  }
  async delete(req, res) {
    const { id } = req.query;
    const type = await Type.findOne(id);
    return res.json(type);
  }
}

module.exports = new ProductController();
