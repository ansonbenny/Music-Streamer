import { configureStore } from "@reduxjs/toolkit";
import player from "./player";
import library from "./library";
import loading from "./loading";

export const store = configureStore({
  reducer: {
    player,
    library,
    loading,
  },
});
