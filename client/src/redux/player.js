import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../lib/axios";

export const getTrack = createAsyncThunk(
  "player/track",
  async ({ type, id, offset, position, limit }) => {
    let response = await instance.get("/music/get-audio-tracks", {
      params: {
        id,
        type,
        offset,
        position,
        limit,
      },
    });

    return response?.data?.data;
  }
);

const playerSlice = createSlice({
  name: "player",
  initialState: {
    data: {
      position: 0,
      total: 0,
      offset: 0,
      type: null,
      id: null,
      tracks: [],
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
        position: 0,
        total: 0,
        offset: 0,
        type: null,
        id: null,
        tracks: [],
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
    changeAudio: (state, { payload }) => {
      state.data.position = payload;
      return state;
    },
  },
  extraReducers: (callback) => {
    callback.addCase(getTrack.fulfilled, (state, { payload }) => {
      let old = JSON.parse(JSON.stringify(state));

      state.status = true;

      if (
        payload?.type === "album" &&
        old?.data?.type === "album" &&
        payload?.id === old?.data?.id &&
        payload?.offset > old?.data?.offset
      ) {
        state.data = {
          ...payload,
          tracks: [...old?.data?.tracks, ...payload?.tracks],
        };
      } else if (
        payload?.type === "playlist" &&
        old?.data?.type === "playlist" &&
        payload?.id === old?.data?.id &&
        payload?.offset > old?.data?.offset
      ) {
        state.data = {
          ...payload,
          tracks: [...old?.data?.tracks, ...payload?.tracks],
        };
      } else if (payload?.id !== old?.data?.id) {
        state.data = payload;
      }
      return state;
    });

    callback.addCase(getTrack.rejected, (state, { error }) => {
      state.data.tracks = [];
      return state;
    });
  },
});

export const { setTime, resetData, setVolume, setStatus, changeAudio } =
  playerSlice.actions;
export default playerSlice.reducer;
