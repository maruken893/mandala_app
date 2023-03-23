import { DataTypes } from 'sequelize';

import sequelize from '../db/connect.js';

const SubMission = sequelize.define(
  'SubMission',
  {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      default: '',
      validate: {
        len: {
          args: [1, 20],
          msg: 'Provided sub mission is too long. Sub mission is limited to 20 characters',
        },
        notEmpty: {
          args: true,
          msg: 'Provided sub mission is empty.',
        },
      },
    },
    position: {
      type: DataTypes.INTEGER,
      validate: {
        isIn: [[0, 1, 2, 3, 4, 5, 6, 7, 8]],
      },
    },
    MissionId: {
      type: DataTypes.UUID,
    },
  },
  {
    timestamps: false,
  }
);

export default SubMission;
