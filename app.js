import path from 'path';

import 'express-async-errors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

// router
import {
  authRouter,
  goalRouter,
  missionRouter,
  subMissionRouter,
  todoRouter,
} from './routes/index.js';

// middleware
import { errorHandlerMiddleware } from './middleware/index.js';
import notFoundMiddleware from './middleware/not-found.js';

const app = express();
app.use(express.static(path.join(process.cwd(), 'client', 'build')));

// middleware
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));


// routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1', goalRouter);
app.use('/api/v1', missionRouter);
app.use('/api/v1', subMissionRouter);
app.use('/api/v1', todoRouter);

// react
app.get('/*',  (req, res, next) => {
  res.sendFile(path.join(process.cwd(), 'client', 'build', 'index.html'))
});

// app endpoint
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

export default app;
