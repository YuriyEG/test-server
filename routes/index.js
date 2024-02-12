const Router = require("express");
const router = new Router();

const deviceRouter = require("./deviceRouter");
const userRouter = require("./userRouter");
const brandRouter = require("./brandRouter");
const typeRouter = require("./typeRouter");
const productRouter = require("./productRouter");
const testController = require("./testController");

router.use("/product", productRouter);
router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/device", deviceRouter);
router.use("/test", testController);

module.exports = router;
