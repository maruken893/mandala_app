import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { DataTypes } from 'sequelize';

import sequelize from '../db/connect.js';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: { msg: 'Email has already been taken' },
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

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
});

User.prototype.createJWT =  function () {
  return jwt.sign(
    { iss: 'mandala_app', uid: this.id },
    process.env.JWT_KEY,
    { expiresIn: '1d' }
  );
};

export default User;
