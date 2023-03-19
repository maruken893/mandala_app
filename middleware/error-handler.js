import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req, res, next) => {
  const error = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong, try again later',
  };

  if (err.message.startsWith('Validation error:')) {
    (error.statusCode = StatusCodes.BAD_REQUEST),
      (error.msg = err.message.split(': ')[1]);
  }

  if (err.message === 'Email has already been taken') {
    (error.statusCode = StatusCodes.BAD_REQUEST), (error.msg = err.message);
  }

  res.status(error.statusCode).json({ msg: error.msg });
};

export default errorHandlerMiddleware;
