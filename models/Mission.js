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
      validate: {
        len: {
          args: [1, 20],
          msg: 'Provided mission is too long. Mission is limited to 20 characters',
        },
        notEmpty: {
          args: true,
          msg: 'Provided mission is empty.',
        },
      },
    },
    position: {
      type: DataTypes.INTEGER,
      validate: {
        isIn: {
          args: [0, 1, 2, 3, 4, 5, 6, 7, 8],
          msg: 'Provided position is out of range. Only  0~3, 5~8.',
        },
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
