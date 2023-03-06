import { DataTypes } from 'sequelize';

import { User } from './index.js';
import sequelize from '../db/connect.js';

export const goalGenres = {
  1: { name: 'スポーツ' },
  2: { name: '受験' },
  3: { name: '就職' },
  4: { name: 'その他' },
};

const GoalGenre = sequelize.define(
  'GoalGenre',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
  },
  { timestamps: false }
);

export default GoalGenre;
