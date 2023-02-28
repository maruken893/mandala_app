import express from 'express';

// db
import sequelize from './db/connect.js';

// router
import { authRouter } from './routes/index.js';

// setting
const PORT = process.env.PORT || 8000;
const app = express();

// middleware
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

// routes
app.use('/api/v1/auth', authRouter)

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('db connection');
    app.listen(PORT, (req, res) => {
      console.log(`Server listening port on ${PORT}...`);
    });
  } catch (err) {}
};

startServer();
