import 'express-async-errors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

// db
import sequelize from './db/connect.js';

// router
import { authRouter } from './routes/index.js';

// middleware
import { errorHandlerMiddleware } from './middleware/index.js';
import notFoundMiddleware from './middleware/not-found.js';

// setting
const PORT = process.env.PORT || 8000;
const app = express();

// middleware
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

// routes
app.use('/api/v1/auth', authRouter);

// app endpoint
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

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
