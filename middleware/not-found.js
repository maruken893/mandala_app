import NotFoundError from '../errors/not-found.js';

const notFoundMiddleware = (req, res, next) => {
  throw new NotFoundError('Route does not exists.');
};

export default notFoundMiddleware;
