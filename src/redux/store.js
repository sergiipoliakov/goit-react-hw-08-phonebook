import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import {
  // persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { phoneBookReducer } from './phoneBook';
import counterButtonReducer from './counterButton/button-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

// const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducer,
    counterButton: counterButtonReducer,
  },
  middleware,
});

export default store;
