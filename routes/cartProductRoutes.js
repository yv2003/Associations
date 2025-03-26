import { addtoCartProducts,getAllProducts,deleteFromCartProducts } from "../controller/cartProductController";
import e from "express";
const router = e.Router();
//cartProducts routers:;:
router.post("/cart/addprod", addtoCartProducts);
router.get("/cart/getAllCartProds", getAllProducts);
router.delete("/cart/deleteprod/:id", deleteFromCartProducts);

export default router;