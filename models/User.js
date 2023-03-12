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
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: { msg: 'Email has already been taken' },
      validate: {
        isEmail: { msg: 'Email is invalid' },
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.STRING(200),
    },
    goal: {
      type: DataTypes.STRING(20),
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
  const missions = missionsData.map((mission, i) => {
    if (i === 4) {
      return {
        cont: this.goal,
        goal: true,
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
