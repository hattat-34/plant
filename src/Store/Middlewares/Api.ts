import {
  createAction,
  Middleware,
  MiddlewareAPI,
  PayloadAction,
} from '@reduxjs/toolkit';
import axios, {AxiosRequestConfig} from 'axios';
import ApiError from '../../Services/ApiError';
import {Constants} from '../../Utils/Constants';

interface Payload {
  config: AxiosRequestConfig;
  onStart?: string;
  onSuccess?: string;
  onError?: string;
}

const client = axios.create({
  baseURL: Constants.ENDPOINT,
  // Api request will thrown an exception when exceeded timeout as milliseconds.
  timeout: 10000,
});

/**
 * Redux middleware that handle all api requests.
 */
const apiMiddleware: Middleware =
  ({dispatch}: MiddlewareAPI<AppDispatch, RootState>) =>
  next =>
  async (action: PayloadAction<Payload>) => {
    if (action.type !== apiCall.type) {
      return next(action);
    }

    // Dispatch next middleware action
    next(action);

    const {config, onStart, onSuccess, onError} = action.payload;

    // Dispatch specific onStart action
    if (onStart) {
      dispatch({type: onStart});
    }

    try {
      // Api calls starts here
      const response = await client(config);

      onSuccess
        ? dispatch({type: onSuccess, payload: response.data}) // Request has specific action on success.
        : dispatch(apiCallSuccess(response.data)); // General Api call success action
    } catch (err: any) {
      let error: ApiError;

      // Creating a custom error
      if (axios.isAxiosError(err)) {
        error = new ApiError({
          name: err.name,
          message: err.message,
          status: err.response?.status,
          body: err.response?.data,
        });
      } else {
        error = new ApiError({
          name: err.name,
          message: err.message,
        });
      }

      onError
        ? dispatch({type: onError, payload: error}) // Specific action
        : dispatch(apiCallFailed(error)); // General api call failed action
    }
  };

export default apiMiddleware;

/** General api middleware actions */
const apiCall = createAction<Payload>('api/callBegan');
const apiCallSuccess = createAction<string>('api/callSuccess');
const apiCallFailed = createAction<ApiError>('api/callFailed');

export {apiCall};
