import { DataTypes } from 'sequelize';

import sequelize from '../db/connect.js';

const Mission = sequelize.define(
  'Mission',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      default: '',
    },
    position: {
      type: DataTypes.INTEGER,
      validate: {
        isIn: [[0, 1, 2, 3, 4, 5, 6, 7, 8]],
      },
    },
    UserId: {
      type: DataTypes.UUID,
    },
  },
  {
    timestamps: false,
  }
);

export default Mission;
