import { DataTypes } from 'sequelize';
import sequelize from '../utils/DB.js';

const Product = sequelize.define('Product', {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING },
  price: { type: DataTypes.FLOAT, allowNull: false },
  stock: { type: DataTypes.INTEGER, allowNull: false },
  category: { type: DataTypes.STRING }
});

export default Product;