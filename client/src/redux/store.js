import { configureStore } from "@reduxjs/toolkit";
import player from "./player";
import library from "./library";
import additional from "./additional";
import user from "./user";

export const store = configureStore({
  reducer: {
    player,
    library,
    additional,
    user,
  },
});
