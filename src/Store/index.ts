import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './Reducers';

const middlewares = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(...middlewares),
});

export default store;

declare global {
  type AppDispatch = typeof store.dispatch;
  type RootState = ReturnType<typeof rootReducer>;
}