class UserController {
  async registration(req, res) {}
  async login(req, res) {}
  async check(req, res) {
    const { id } = req.query;
    res.json(id);
  }
  async test(req, res) {
    res.json({ test: "test" });
  }
}

module.exports = new UserController();
