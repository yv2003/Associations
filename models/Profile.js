import { DataTypes } from 'sequelize';
import sequelize from '../utils/DB.js';

const Profile = sequelize.define('Profile', {
  bio: { type: DataTypes.STRING },
  age: { type: DataTypes.INTEGER, allowNull: false },
  phoneNumber: { type: DataTypes.STRING, unique: true },
  address: { type: DataTypes.STRING },
  userId: { type: DataTypes.INTEGER, unique: true }
});

export default Profile;
