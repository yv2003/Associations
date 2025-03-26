import {createUser,fetchUserById,updateProfile} from "../controller/userController.js";
import { getUserOrders, createOrder, getUserOrderById, updateOrder, deleteOrder } from "../controller/userOrderController.js"
import { addtoCart, deleteFromCart } from "../controller/cartController.js";
import { addtoCartProducts,deleteFromCartProducts, getAllProducts } from "../controller/cartProductController.js";
import e from "express";
const router = e.Router();

//cart routers:;:
router.post("/add", addtoCart);
router.delete("/delete/:id", deleteFromCart);

export default router;
