import express from "express";
import userRoutes from "../routes/userRoutes.js"
import userOrderRoutes from "../routes/userOrderRoutes.js";
import cartRoutes from "../routes/cartRoutes.js";
import cartProductRoutes from "../routes/cartProductRoutes.js";
import e from "express";
const router = e.Router();

router.use("/user", userRoutes);
router.use("/userorders", userOrderRoutes);
router.use("/cart", cartRoutes);
router.use("/cartprod", cartProductRoutes);

export default router;