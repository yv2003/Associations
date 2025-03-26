import Profile from "../models/Profile.js";
import User from "../models/User.js";
import Product from "../models/Product.js";
import Cart from "../models/Cart.js";
import CartProduct from "../models/Cartproduct.js";
import Order from "../models/Order.js"
//ONE TO ONE, a user has one profile
export const userRealtionship = () => {
    User.hasOne(Profile, {
        foreignKey: "userId",
        // sourceKey:"id"
    });
    Profile.belongsTo(User, {
        foreignKey: "userId",
        // sourceKey:"id"
    });//user id must be added to profile
}
export const userCartRealtionship = () => {
    User.hasOne(Cart, {
        foreignKey: "userId",
        // sourceKey:"id"
    });
    Cart.belongsTo(User, {
        foreignKey: "userId",
        // sourceKey:"id"
    });//user id must be added to profile
}
//one to many
export const UserOrderRelationship = () => {
    User.hasMany(Order, { foreignKey: "userId"});
    Order.belongsTo(User, { foreignKey: "userId" });
}
//many to many
export const CartProductRelationship = () => {
    Cart.belongsToMany(Product, { through: CartProduct, foreignKey: "cartId" });
    Product.belongsToMany(Cart, { through: CartProduct, foreignKey: "productId" });

    // Cart.hasMany(CartProduct, { foreignKey: "cartId", onDelete: "CASCADE" });
    // CartProduct.belongsTo(Cart, { foreignKey: "cartId" });

    // Product.hasMany(CartProduct, { foreignKey: "productId", onDelete: "CASCADE" });
    // CartProduct.belongsTo(Product, { foreignKey: "productId" });

}

//user and profile -> one to one
//user and cart -> one to one
//cart and products -> many to many
//user and order -> one to many