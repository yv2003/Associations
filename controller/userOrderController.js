// import User from "../models/User.js";
import Order from "../models/Order.js";

// Get all orders of a user
export const getUserOrders = async (req, res) => {
    try {
        const orders = await Order.findAll({ where: { userId: req.params.id } });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Create an order for a user
export const createOrder = async (req, res) => {
    try {
        const { orderNumber, status, totalAmount,orderDate, userId} = req.body;
        const order = await Order.create({ orderNumber, status, totalAmount, orderDate, userId});
        res.status(201).json(order);
    } catch (e) {
        console.log("Error creating order:", e);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Get a specific order of a user
export const getUserOrderById = async (req, res) => {
    try {
        const order = await Order.findOne({ where: { id: req.params.orderId, userId: req.params.userId } });
        if (!order) return res.status(404).json({ error: "Order not found" });
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Update an order
export const updateOrder = async (req, res) => {
    try {
        const { totalAmount, status } = req.body;
        const updated = await Order.update(
            { totalAmount, status },
            { where: { id: req.params.orderId, userId: req.params.userId } }
        );
        if (!updated[0]) return res.status(404).json({ error: "Order not found or no changes made" });
        res.json({ message: "Order updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Delete an order
export const deleteOrder = async (req, res) => {
    try {
        const delOrder = await Order.destroy({where: {
                orderId: req.params.orderId,
                userId:req.params.userId
        }
        });
        console.log(delOrder);
        const finddeleted = await Order.findAll({
            where: {
                orderId: req.params.orderId,
                userId:req.params.userId
            }
        })
        if (!finddeleted) return res.status(200).json({ message: "The data was deleted successfully" })
        else return res.status(500).json({ message: "the order was not deleted" });

    } catch (e) {
        res.status(500).json({ message: "Internal server error" })
    }
}