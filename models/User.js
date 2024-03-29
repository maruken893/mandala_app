import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { DataTypes } from 'sequelize';

import sequelize from '../db/connect.js';
import { Mission, SubMission, GoalGenre } from './index.js';

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { arg: true, msg: 'Provided name is empty.' },
        len: {
          args: [1, 20],
          msg: 'Provided name is too long. Name is limited to 20 characters',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: { msg: 'Email has already been taken' },
      validate: {
        isEmail: { msg: 'Email is invalid' },
        notEmpty: { arg: true, msg: 'Provided email is empty' },
        len: {
          args: [1, 255],
          msg: 'Password is too long. Password is limited to 255 characters',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
      validate: {
        len: {
          args: [0, 100],
          msg: 'Provided biography is too long. Biography is limited to 100 characters',
        },
      },
    },
    goal: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'Provided goal is empty' },
        len: {
          args: [1, 20],
          msg: 'Provided goal is too long. Goal is limited to 20 characters',
        },
      },
    },
    GoalGenreId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    defaultScope: {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    },
    scopes: {
      withoutPassword: {
        attributes: { exclude: ['password'] },
      },
      withoutAllValues: {
        attributes: {
          exclude: [
            'name',
            'email',
            'password',
            'biography',
            'mainGoal',
            'goalGenreId',
            'isAdmin',
          ],
        },
      },
    },
  }
);

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
});

User.prototype.createJWT = function () {
  return jwt.sign({ iss: 'mandala_app', uid: this.id }, process.env.JWT_KEY, {
    expiresIn: '1d',
  });
};

User.prototype.comparePassword = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password);
  return isMatch;
};

User.prototype.fetchMissions = async function () {
  const missionsData = await Mission.findAll({
    where: { UserId: this.id },
    attributes: ['content', 'position'],
    include: {
      model: SubMission,
      attributes: ['content', 'position'],
    },
  });
  if (missionsData.length === 0) {
    return []
  }
  const missions = missionsData.map((mission, i) => {
    if (i === 4) {
      return {
        cont: this.goal,
        goalId: this.GoalGenreId,
      };
    } else {
      return {
        cont: mission.content,
        missionPos: mission.position,
      };
    }
  });
  let shapedMissions = [
    ...missionsData.slice(0, 4).map((mission) => {
      const shaped = mission.SubMissions.map((subMission) => {
        if (subMission.position === 4) {
          return {
            cont: mission.content,
            pos: subMission.position,
            missionPos: mission.position,
          };
        }
        return {
          cont: subMission.content,
          pos: subMission.position,
        };
      });
      return shaped;
    }),
    missions,
    ...missionsData.slice(5).map((mission) => {
      const shaped = mission.SubMissions.map((subMission) => {
        if (subMission.position === 4) {
          return {
            cont: mission.content,
            pos: mission.position,
            missionPos: mission.position,
          };
        }
        return {
          cont: subMission.content,
          pos: subMission.position,
        };
      });
      return shaped;
    }),
  ];
  return shapedMissions;
};

export default User;
