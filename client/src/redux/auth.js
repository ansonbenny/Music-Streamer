import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: null,
  reducers: {
    setAuth: (state, { payload }) => {
      return payload;
    },
    exitAuth: (state, actions) => {
      return null;
    },
  },
});

export const { setAuth, exitAuth } = authSlice.actions;

export default authSlice.reducer;
