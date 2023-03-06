/**
 * All error descriptions shown in the app are managed here.
 */

class ApiError extends Error {
  name: string;
  message: string;
  status?: number;
  body?: any;

  constructor(error: ApiErrorConstructor) {
    super();
    this.name = error.name;
    this.message = error.message;
    this.status = error?.status;
    this.body = error?.body;
  }
}

type ApiErrorConstructor = {
  name: string;
  message: string;
  status?: number;
  body?: any;
};

export default ApiError;
