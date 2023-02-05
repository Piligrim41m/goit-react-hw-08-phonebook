import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authReducer } from 'auth/auth-slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactReducer } from './contactSlice';
import filterSlice from './filterSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      ignoredActionPaths: ['payload.headers', 'payload.config', 'payload.request'],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist:['token']
}

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactReducer,
    filter: filterSlice.reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store)

