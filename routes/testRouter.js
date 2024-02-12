const Router = require("express");
const router = new Router();
const testController = require("../controllers/testController");

router.get("/", testController.getAll);
router.get("/:id", testController.getOne);
// router.post("/registration", productController.registration);
// router.post("/login", productController.login);
// router.get("/auth", productController.check);
router.post("/", testController.create);
router.delete("/:id", testController.delete);

module.exports = router;
