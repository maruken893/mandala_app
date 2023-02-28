import { Sequelize, DataTypes } from 'sequelize';

const User = sequelize.define('User', {
  userId: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
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
    unique: true,
    validate: {
      isEmail: true,
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
    type: DataTypes.NUMBER,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
});

User.hasOne;
