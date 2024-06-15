import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { UserState, AddAccessTokenAction, AddUserAction } from "./types";

const initialState: UserState = {
  user: null,
  accessToken: null,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<AddUserAction>) {
      state.user = action.payload.user;
    },
    addAccessToken(state, action: PayloadAction<AddAccessTokenAction>) {
      state.accessToken = action.payload.accessToken;
    },
    removeUser(state) {
      state.user = null;
      state.accessToken = null;
    },
  },
});

export const actions = slice.actions;
export const reducer = slice.reducer;
