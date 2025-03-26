import { DataTypes } from "sequelize";
import sequelize from "../utils/DB.js";
import User from "./User.js";
const Cart = sequelize.define("Cart", {
  // cartId: {
  //   type: DataTypes.INTEGER,
  //   autoIncrement: true,
  //   primaryKey: true,
  // },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key:"id"
    }
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    defaultValue: 0.0, 
  },
  status: {
    type: DataTypes.ENUM("active", "ordered"),
    defaultValue: "active", 
  },
});

export default Cart;
