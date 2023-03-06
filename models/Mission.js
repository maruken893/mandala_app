import { DataTypes } from 'sequelize';

import sequelize from '../db/connect.js';

const Mission = sequelize.define(
  'Mission',
  {
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
