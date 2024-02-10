const { Type } = require("../models/models");

class ProductController {
  async getAll(req, res) {
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
    const type = await Type.create({ name });
    return res.json(Type);
  }
  // async delete(req, res) {
  //   const { id } = req.query;
  //   const type = await Type.findOne(id);
  //   return res.json(type);
  // }
}

module.exports = new ProductController();
