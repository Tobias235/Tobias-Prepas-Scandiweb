import { combineReducers } from "@reduxjs/toolkit";
import activeReducer from "./ActiveReducer";
import modalReducer from "./ModalReducer";
import cartReducer from "./CartReducer";

export const rootReducer = combineReducers({
  activeReducer,
  modalReducer,
  cartReducer,
});
