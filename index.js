import express from "express";
import router from "./routes/cartRoutes.js";
import sequelize from "./utils/DB.js";
import dotenv from 'dotenv';
import {userRealtionship,UserOrderRelationship,CartProductRelationship, userCartRealtionship} from "./utils/relationships.js";
import User from "./models/User.js";
import Profile from "./models/Profile.js";
import Cart from "./models/Cart.js";
import Product from "./models/Product.js";
import userRoutes from "./routes/userRoutes.js"
import userOrderRoutes from "./routes/userOrderRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import cartProductRoutes from "./routes/cartProductRoutes.js";

const app = express();
app.use(express.json());
dotenv.config();
console.log(process.env.DB_NAME, process.env.DB_USER, process.env.USER_PASS)
app.use("/user", userRoutes);
app.use("/orders", userOrderRoutes);
app.use("/cart", cartRoutes);
app.use("/cartprod", cartProductRoutes);
console.log("logg");

userRealtionship();
userCartRealtionship();
UserOrderRelationship();
CartProductRelationship();

console.log("User",User.associations);
console.log("profile", Profile.associations);
console.log("Cart ", Cart.associations);
console.log("Product ",Product.associations);

(async () => {
    try {
        // await connectDatabase(); 
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
        await sequelize.sync({alter:true});
        console.log('Database synced successfully.');
    } catch (error) {
        console.error('Error starting the server or syncing the database:', error);
    }
})();