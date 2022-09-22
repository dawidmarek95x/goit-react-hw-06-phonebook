import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { reducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
  whitelist: ['contacts'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export let store = configureStore({
  reducer: persistedReducer,
  devTools: false,
  middleware: [thunk],
});

export let persistor = persistStore(store);