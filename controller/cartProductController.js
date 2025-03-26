import CartProduct from "../models/Cartproduct.js";
import Product from "../models/Product.js";
export const addtoCartProducts = async (req, res) => {
    const { cartId, productId, quantity, price } = req.body;
    try {
        const addtocart = await CartProduct.create({ cartId,productId,quantity,price });
        res.json(addtocart)
    } catch (e) {
        console.log(e);
        res.status(404).json({ message: "couldnt add to cart" });
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const allProductsinCart = await CartProduct.findAll();
        console.log(allProductsinCart);
        res.json(allProductsinCart);
    } catch (e) {
        console.log(e);
        res.status(500).json({message:"Internal server error"})
    }
}

export const deleteFromCartProducts = async (req, res) => {
    console.log(req.params.id);
    const deletefromcart = await CartProduct.destroy({
        where: {
            cartId: req.params.id,
        }
    });
    ///console.log(cartId);
    console.log(deletefromcart);
    const finddeleted = await CartProduct.findAll({
        where: {
            cartId: req.params.id,
        }
    });
    console.log(finddeleted);
    if (finddeleted.length==0) return res.status(200).json({ message: "deleted succesfully" });
    else return res.status(404).json({ message: "Couldnt delete" });
};
    


export const calculateTotalPrice = async (cartId) => {
    try {
        const cartItems = await CartProduct.findAll({
            where: { cartId },
            include: [{ model: Product, attributes: ['price'] }]
        });

        return cartItems.reduce((sum, item) => sum + item.Product.price * item.quantity, 0);
    } catch (error) {
        console.error("Error calculating total price:", error);
        throw error; 
    }
};