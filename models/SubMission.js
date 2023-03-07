import { DataTypes } from 'sequelize';

import sequelize from '../db/connect.js';

const SubMission = sequelize.define(
  'SubMission',
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
    MissionId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

export default SubMission;
