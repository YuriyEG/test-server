const Router = require("express");
const router = new Router();
const nomenclatureController = require("../controllers/nomenclatureController");

router.get("/", nomenclatureController.getAll);
router.get("/:id", nomenclatureController.getOne);
// router.post("/registration", productController.registration);
// router.post("/login", productController.login);
// router.get("/auth", productController.check);
router.post("/", nomenclatureController.create);
router.delete("/:id", nomenclatureController.delete);
router.put("/:id", nomenclatureController.update);

module.exports = router;
