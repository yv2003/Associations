import {createUser,fetchUserById,updateProfile} from "../controller/userController.js";
import { getUserOrders, createOrder, getUserOrderById, updateOrder, deleteOrder } from "../controller/userOrderController.js"
import { addtoCart, deleteFromCart } from "../controller/cartController.js";
import { addtoCartProducts,deleteFromCartProducts, getAllProducts } from "../controller/cartProductController.js";
import e from "express";
const router = e.Router();
router.post("/createUser", createUser);
router.get("/fetchbyId/:id", fetchUserById);
// router.get("/fetchByName/:name", fetchByName);
router.put("/update/:id", updateProfile);


// getUserOrderById.js routers

router.get("/users/:id/orders", getUserOrders);
router.post("/users/:id/orders", createOrder);
router.get("/users/:userId/orders/:orderId", getUserOrderById);
router.put("/update/users/:userId/orders/:orderId", updateOrder);
router.delete("/users/:userId/orders/:orderId", deleteOrder);

//cart routers:;:
router.post("/cart/add", addtoCart);
router.delete("/cart/delete/:id", deleteFromCart);


//cartProducts routers:;:
router.post("/cart/addprod", addtoCartProducts);
router.get("/cart/getAllCartProds", getAllProducts);
router.delete("/cart/deleteprod/:id", deleteFromCartProducts);

export default router;
