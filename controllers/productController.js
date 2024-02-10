const { Type, Product } = require("../models/models");

class ProductController {
  async getAll(req, res) {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header(
    //   "Access-Control-Allow-Headers",
    //   "Origin, X-Requested-With, Content-Type, Accept,recording-session"
    // );
    // res.header("Access-Control-Allow-Methods", "DELETE, POST, GET");
    const products = await Product.findAll();
    return res.json(products);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const product = await Product.findOne({ where: { id } });
    if (product) {
      return res.json(product);
    } else {
      return res.json({ message: "Not found " + id });
    }
  }

  async create(req, res) {
    const { name, price, count } = req.body;
    // const product = await Product.create({ name, price, count });
    // return res.json(product);
    return res.json({ name, price, count });
  }
  async delete(req, res) {
    const { id } = req.query;
    const product = await Product.findOne(id);
    return res.json(product);
  }
}

module.exports = new ProductController();
