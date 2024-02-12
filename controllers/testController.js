const { Type, Product } = require("../models/models");

class ProductController {
  async getAll(req, res) {
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
    const { name, price, rating, img, count } = req.body;
    const product = await Product.create({ name, price, rating, img, count });

    return res.json(product);
  }
  async delete(req, res) {
    const { id } = req.params;
    const product = await Product.destroy({ where: { id } });
    return res.json(product);
  }
}

module.exports = new ProductController();
