import { createSlice } from "@reduxjs/toolkit";
import type { UserState } from "./types";

const initialState: UserState = {
  user: null,
  accessToken: null,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const actions = slice.actions;
export const reducer = slice.reducer;

