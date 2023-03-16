import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import { rootReducer } from "./Reducers/RootReducer";
const persistConfig = {
  key: "storage",
  storage: sessionStorage,
};

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(),

  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export default { store, persistor };
