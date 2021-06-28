import { createSlice } from "@reduxjs/toolkit";
import { get } from "lodash";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export const selectAuthToken = (state) => get(state, "auth.user.key");

export const selectUser = (state) => get(state, "auth.user.user");

export default authSlice.reducer;
