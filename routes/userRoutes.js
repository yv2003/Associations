import e from "express";
import { createUser,fetchUserById,updateProfile } from "../controller/userController";
const router = e.Router();

router.post("/createUser", createUser);
router.get("/fetchbyId/:id", fetchUserById);
// router.get("/fetchByName/:name", fetchByName);
router.put("/update/:id", updateProfile);
export default router;