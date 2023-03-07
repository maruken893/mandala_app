import 'express-async-errors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

// router
import { authRouter, goalRouter, missionRouter } from './routes/index.js';

// middleware
import { errorHandlerMiddleware } from './middleware/index.js';
import notFoundMiddleware from './middleware/not-found.js';

const app = express();

// middleware
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.get('/', (req, res) => {
  res.send('Hello Express!');
});
app.use('/api/v1/auth', authRouter);
app.use('/api/v1', goalRouter);
app.use('/api/v1', missionRouter);

// app endpoint
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

export default app;
