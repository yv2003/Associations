import { DataTypes } from 'sequelize';
import sequelize from '../utils/DB.js';
import bcrypt from 'bcrypt';

const User = sequelize.define('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  createdAt: { type: DataTypes.DATE, defaultValue: sequelize.NOW }
});

User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 10);
});
export default User;
