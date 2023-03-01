import app from './app.js';

// db
import sequelize from './db/connect.js';

// setting
const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await sequelize.sync();
    console.log('db connection');
    app.listen(PORT, (req, res) => {
      console.log(`Server listening port on ${PORT}...`);
    });
  } catch (err) {}
};

startServer();
