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

    // Mission.hasMany(Todo);
    // Todo.belongsTo(Mission);

    // Demoユーザー
    const demoUser = await User.findOne({
      where: { email: 'demo@example.com' },
    });
    if (!demoUser) {
      const demoUser = await User.create({
        name: 'demo user',
        email: 'demo@example.com',
        password: 'password',
      });
      await Todo.bulkCreate(
        [...Array(20)].map((_, i) => ({
          content: `todo-${i}`,
          dueDate: new Date(),
          UserId: demoUser.id,
        }))
      );
    }
    console.log('db connection');
    app.listen(PORT, (req, res) => {
      console.log(`Server listening port on ${PORT}...`);
    });
  } catch (err) {}
};

startServer();
