import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import logger from "redux-logger";
import Reducer from "./reducers/Reducer";
const persistConfig = {
  key: "storage",
  storage: sessionStorage,
};

const store = configureStore({
  reducer: {
    rootReducer: persistReducer(persistConfig, Reducer),
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),

  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
