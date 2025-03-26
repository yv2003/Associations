import { DataTypes } from 'sequelize';
import sequelize from '../utils/DB.js';

const Order = sequelize.define('Order', {
  orderNumber: { type: DataTypes.STRING, allowNull: false, unique: true },
  status: { type: DataTypes.ENUM('pending', 'shipped', 'delivered', 'cancelled'), defaultValue: 'pending' },
  totalAmount: { type: DataTypes.FLOAT, allowNull: false },
  orderDate: { type: DataTypes.DATE, defaultValue: sequelize.NOW },
  userId: { type: DataTypes.INTEGER }
});
export default Order;
