import { DataTypes } from 'sequelize';

import sequelize from '../db/connect.js';

const Todo = sequelize.define('Todo', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    allowNull: false,
    primaryKey: true,
  },
  content: {
    type: DataTypes.STRING,
  },
  memo: {
    type: DataTypes.STRING,
  },
  dueDate: {
    type: DataTypes.DATE,
  },
  endDate: {
    type: DataTypes.DATE,
  },
  UserId: {
    type: DataTypes.UUID,
  },
  StatusId: {
    type: DataTypes.INTEGER,
  },
  MissionId: {
    type: DataTypes.INTEGER,
  },
});

export default Todo;
