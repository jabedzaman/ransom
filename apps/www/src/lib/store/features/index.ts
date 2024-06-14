import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
export * from "./auth";

export const rootReducer = combineReducers({
  auth: authReducer,
});
