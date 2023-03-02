import { StatusCodes } from 'http-status-codes';

import CustomApiError from './custom-api.js';

class UnauthorizedError extends CustomApiError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.UNAUTHORIZED;
  }
}

export default UnauthorizedError