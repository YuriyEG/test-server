const Router = require("express");
const router = new Router();
const typeController = require("../controllers/typeController");

router.post("/");
router.get("/");
router.get("/test", typeController.getAll);

module.exports = router;
