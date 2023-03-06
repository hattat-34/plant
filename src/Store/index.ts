import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import apiMiddleware from './Middlewares/Api';
import rootReducer from './Reducers';

const middlewares = [apiMiddleware];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(...middlewares),
});

const persistedStore = persistStore(store);

export default store;
export {persistedStore};

declare global {
  type AppDispatch = typeof store.dispatch;
}
