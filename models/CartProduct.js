import { DataTypes } from "sequelize";
import sequelize from "../utils/DB.js";
import Cart from "./Cart.js";
import Product from "./Product.js";

const CartProduct = sequelize.define("CartProduct", {

  cartId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Cart,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1, // Each product should have a quantity
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

export default CartProduct;
