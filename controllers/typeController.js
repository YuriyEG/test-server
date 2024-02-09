class TypeController {
  async getAll(req, res) {
    res.json({ all: "all" });
  }
}

module.exports = new TypeController();
