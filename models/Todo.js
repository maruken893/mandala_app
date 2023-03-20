import { DataTypes } from 'sequelize';

import sequelize from '../db/connect.js';

const Todo = sequelize.define(
  'Todo',
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
      validate: {
        notEmpty: { arg: true, msg: 'Provided todo is empty.' },
        len: {
          arg: [1, 20],
          msg: 'Provided todo is too long. Todo is limited to 20 characters.',
        },
      },
    },
    memo: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 50],
        msg: 'Provided memo is too long. Memo is limited to 50 characters.',
      },
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
    },
    UserId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    StatusId: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    },
    todoType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          arg: [1, 20],
          msg: 'Provided todo type is too long. Todo type is limited to 20 characters.',
        },
      },
    },
  },
  {
    timestamps: true,
    updatedAt: false,
  }
);

export default Todo;
