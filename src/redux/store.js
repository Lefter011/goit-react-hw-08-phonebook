import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist';
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authSlice";

import { reducer } from "./phonebook/contactsSlice";
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const store = configureStore({
    reducer: {
        contacts: reducer,
    auth: persistReducer(authPersistConfig, authReducer),
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);