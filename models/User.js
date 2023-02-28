import { DataTypes } from 'sequelize';

import sequelize from '../db/connect.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userName: {
    type: DataTypes.STRING(20),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: { mst: 'Email has already been taken' },
    validate: {
      isEmail: { msg: 'Email is invalid' },
      notEmpty: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  biography: {
    type: DataTypes.STRING(200),
  },
  mainGoal: {
    type: DataTypes.STRING(20),
  },
  goadGenreId: {
    type: DataTypes.INTEGER,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
});

export default User;
