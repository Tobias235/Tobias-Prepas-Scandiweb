import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import logger from "redux-logger";
import ActiveReducer from "./reducers/ActiveReducer";
import ModalReducer from "./reducers/ModalReducer";
import CartReducer from "./reducers/CartReducer";
const persistConfig = {
  key: "storage",
  storage: sessionStorage,
};

const rootReducer = combineReducers({
  activeReducer: ActiveReducer,
  modalReducer: ModalReducer,
  cartReducer: CartReducer,
});

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),

  devTools: process.env.NODE_ENV === "production",
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
