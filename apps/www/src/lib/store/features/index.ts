import { combineReducers } from "@reduxjs/toolkit";
import { authReducer, authActions } from "./auth";
export * from "./auth";

export const rootReducer = combineReducers({
  auth: authReducer,
  [authActions.reducerPath]: authActions.reducer,
});
