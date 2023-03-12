import { DataTypes } from 'sequelize';

import sequelize from '../db/connect.js';

export const statuses = {
  1: { type: 'notStarted' },
  2: { type: 'inProgress' },
  3: { type: 'done' },
};

const Status = sequelize.define(
  'Status',
  {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      default: 'notStarted',
    },
  },
  { timestamps: false }
);

export default Status;
