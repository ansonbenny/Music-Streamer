import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../lib/axios";

export const getTrack = createAsyncThunk(
  "player/track",
  async ({ type, id, offset }) => {
    let response = await instance.get("/music/get-audio-tracks", {
      params: {
        id,
        type,
        offset,
      },
    });

    return response?.data?.data;
  }
);

const playerSlice = createSlice({
  name: "player",
  initialState: {
    data: {
      total: 0,
      offset: 0,
      type: null,
      id: null,
      track: null,
    },
    volume: localStorage.getItem("volume") || 1,
    time: { current: `00 : 00`, duration: `00 : 00` },
    status: false,
  },
  reducers: {
    setTime: (state, { payload }) => {
      if (payload?.current) {
        state.time.current = payload.current;
      }

      if (payload?.duration) {
        state.time.duration = payload.duration;
      }

      return state;
    },
    resetData: (state, actions) => {
      state.data = {
        total: 0,
        offset: 0,
        type: null,
        id: null,
        track: null,
      };
      return state;
    },
    setVolume: (state, { payload }) => {
      state.volume = payload;
      return state;
    },
    setStatus: (state, { payload }) => {
      state.status = payload;
      return state;
    },
  },
  extraReducers: (callback) => {
    callback.addCase(getTrack.fulfilled, (state, { payload }) => {
      state.data = payload;

      state.status = true;
      return state;
    });

    callback.addCase(getTrack.rejected, (state, { error }) => {
      state.data.track = null;
      return state;
    });
  },
});

export const { setTime, resetData, setVolume, setStatus } = playerSlice.actions;
export default playerSlice.reducer;
