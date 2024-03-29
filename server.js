import app from './app.js';

// db
import sequelize from './db/connect.js';
import {
  User,
  GoalGenre,
  Mission,
  SubMission,
  Todo,
  Status,
} from './models/index.js';
import { goalGenres } from './models/GoalGenre.js';
import { statuses } from './models/Status.js';

// setting
const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await sequelize.sync();
    // ゴールジャンルを作成
    Object.values(goalGenres).forEach(async ({ name }) => {
      await GoalGenre.findOrCreate({ where: { name } });
    });
    Object.values(statuses).forEach(async ({ type }) => {
      await Status.findOrCreate({ where: { type } });
    });

    // association
    GoalGenre.hasMany(User);
    User.belongsTo(GoalGenre);

    User.hasMany(Mission);
    Mission.belongsTo(User);

    Mission.hasMany(SubMission);
    SubMission.belongsTo(Mission);

    User.hasMany(Todo);
    Todo.belongsTo(User);

    Status.hasMany(Todo);
    Todo.belongsTo(Status);

    console.log('db connection');
    app.listen(PORT, (req, res) => {
      console.log(`Server listening port on ${PORT}...`);
    });
  } catch (err) {}
};

startServer();
