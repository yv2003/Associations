import { addtoCartProducts,getAllProducts,deleteFromCartProducts } from "../controller/cartProductController.js";
import e from "express";
const router = e.Router();
//cartProducts routers:;:
router.post("/addprod", addtoCartProducts);
router.get("/getAllCartProds", getAllProducts);
router.delete("/deleteprod/:id", deleteFromCartProducts);

export default router;