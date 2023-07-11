import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { submitButtonSlice } from "./slices/submitButtonSlice";

//https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"; //action types from redux persist
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const reducers = combineReducers({
  editBtn: submitButtonSlice.reducer,
});

//https://www.bam.tech/en/article/redux-persist-how-it-works-and-how-to-change-the-structure-of-your-persisted-store
export const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["error"], //n'ajoute pas ces states/données a localstorage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  //https://redux-toolkit.js.org/api/getDefaultMiddleware
  middleware: getDefaultMiddleware({

    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })//.concat(useArgentBankAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
// the persistor object is returned by persistStore with the following methods:
// .purge()
// purges state from disk and returns a promise
// .flush()
// immediately writes all pending state to disk and returns a promise
// .pause()
// pauses persistence
// .persist()
// resumes persistence
