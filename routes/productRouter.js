const Router = require("express");
const router = new Router();
const productController = require("../controllers/productController");

router.post("/", productController.getAll);
// router.post("/registration", productController.registration);
// router.post("/login", productController.login);
// router.get("/auth", productController.check);

// router.post("/", productController.create);
router.delete("/:id", productController.delete);

module.exports = router;
