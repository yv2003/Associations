import e from "express";
import { getUserOrderById,getUserOrders,createOrder,updateOrder,deleteOrder } from "../controller/userOrderController.js";

const router = e.Router();

router.get("/:id/orders", getUserOrders);
router.post("/:id/orders", createOrder);
router.get("/:userId/orders/:orderId", getUserOrderById);
router.put("/update/:userId/orders/:orderId", updateOrder);
router.delete("/:userId/orders/:orderId", deleteOrder);

export default router;

