import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import contactsReducer from './contactsReducer';

const persistConfig = {
  key: "contacts",
  version: 1,
  storage,
  whitelist: ["contacts"],
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export let store = configureStore({
  reducer: persistedReducer,
  devTools: false,
  middleware: [thunk],
});

export let persistor = persistStore(store);