import { createSlice } from "@reduxjs/toolkit";

const additionalSlice = createSlice({
  name: "additional",
  initialState: {
    loading: true,
    expand: false,
    contentLoad: true,
  },
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
      if (payload === true) {
        state.contentLoad = true;
      }
      return state;
    },
    setExpand: (state, { payload }) => {
      state.expand = payload;
      return state;
    },
    setContentLoad: (state, { payload }) => {
      state.contentLoad = payload;
      return state;
    },
  },
});

export const { setLoading, setExpand, setContentLoad } =
  additionalSlice.actions;

export default additionalSlice.reducer;
