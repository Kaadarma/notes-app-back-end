import ClientError from './client-error.js';

class InvariantError extends ClientError {
  constructor(message) {
    super(message);

    this.name = 'InvariantError';
  }
}

const InvarianError = InvariantError;

export { InvariantError, InvarianError };
export default InvariantError;