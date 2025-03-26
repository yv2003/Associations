import Cart from "../models/Cart.js";
import { calculateTotalPrice } from "./cartProductController.js";
export const addtoCart = async (req, res) => {
    const { userId} = req.body;
    try {
        const addtocart = await Cart.create({ userId });
        const totalPrice = await calculateTotalPrice(addtocart.id);
        await addtocart.update({ totalPrice });
        res.json(addtocart);
    } catch (e) {
        console.error("Error in addtoCart:", e);
        res.status(500).json({ message: "Couldn't add to cart" });
    }
};

export const deleteFromCart = async (req, res) => {
    const deletefromcart = await Cart.destroy({
        where: {
            id: req.params.id,
        }
    });
    const finddeleted = await Order.findAll({
        where: {
            id: req.params.id,
        }
    });
    if (!finddeleted) return res.status(200).json({ message: "deleted succesfully" });
    else return res.status(404).json({ message: "Couldnt delete" });
};
    