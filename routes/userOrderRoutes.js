import e from "express";
import { getUserOrderById,getUserOrders,createOrder,updateOrder,deleteOrder } from "../controller/userOrderController";

const router = e.Router();

router.get("/users/:id/orders", getUserOrders);
router.post("/users/:id/orders", createOrder);
router.get("/users/:userId/orders/:orderId", getUserOrderById);
router.put("/update/users/:userId/orders/:orderId", updateOrder);
router.delete("/users/:userId/orders/:orderId", deleteOrder);

export default router;

