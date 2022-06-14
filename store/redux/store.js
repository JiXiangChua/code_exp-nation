import { configureStore } from "@reduxjs/toolkit";
import unreadMailsReducer from "./unreadMails-slice";

export const store = configureStore({
  reducer: {
    unreadMails: unreadMailsReducer,
  },
});
