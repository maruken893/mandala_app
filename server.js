import app from './app.js';

// db
import sequelize from './db/connect.js';
import { User, GoalGenre } from './models/index.js';
import { goalGenres } from './models/GoalGenre.js';

// setting
const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await sequelize.sync();
    Object.values(goalGenres).forEach(async ({name}) => {
      await GoalGenre.findOrCreate({ where: { name } });
    })
    // association
    GoalGenre.hasMany(User);
    User.belongsTo(GoalGenre);
    console.log('db connection');
    app.listen(PORT, (req, res) => {
      console.log(`Server listening port on ${PORT}...`);
    });
  } catch (err) {}
};

startServer();
