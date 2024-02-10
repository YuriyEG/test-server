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
    const { name } = req.body;
    // const type = await Type.create({ name });
    // return res.json(type);
    res.json({ result: "create" });
  }
  async delete(req, res) {
    const { id } = req.query;
    const type = await Type.findOne(id);
    return res.json(type);
  }
}

module.exports = new ProductController();
