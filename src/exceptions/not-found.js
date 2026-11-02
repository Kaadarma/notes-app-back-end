import ClientError from './client-error.js';

class NotFoundError extends ClientError {
  constructor(message) {
    super(message, 404);

    this.name = 'NotFoundError';
  }
}

const NotFound = NotFoundError;

export { NotFoundError, NotFound };
export default NotFoundError;