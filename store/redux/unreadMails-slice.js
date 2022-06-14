import { createSlice } from "@reduxjs/toolkit";

const unreadMailsSlice = createSlice({
  name: "unreadMails",
  initialState: {
    numberOfUnreadMails: 10,
  },
  reducers: {
    refreshNumberOfUnreadMails: (state, action) => {
      state.numberOfUnreadMails = action.payload.numberOfUnreadMails;
    },
  },
});

export const refreshNumberOfUnreadMails =
  unreadMailsSlice.actions.refreshNumberOfUnreadMails;
export default unreadMailsSlice.reducer;
