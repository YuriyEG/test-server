const Router = require("express");
const router = new Router();
const skladController = require("../controllers/skladController");

router.get("/", skladController.getAll);
router.get("/:id", skladController.getOne);
// router.post("/registration", productController.registration);
// router.post("/login", productController.login);
// router.get("/auth", productController.check);
router.post("/", skladController.create);
router.delete("/:id", skladController.delete);

module.exports = router;
