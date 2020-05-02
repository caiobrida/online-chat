import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "messages",
  initialState: {
    list: [],
  },
  reducers: {
    messagesReceived: (messages, action) => {
      messages.list = action.payload;
    },

    messageAdded: (messages, action) => {
      messages.list.push(action.payload);
    },
  },
});

const { messageAdded, messagesReceived } = slice.actions;
export default slice.reducer;

const url = "/messages";

export const loadMessages = () => (dispatch) =>
  dispatch(
    apiCallBegan({
      url,
      onSuccess: messagesReceived.type,
    })
  );

export const addMessage = (message) =>
  apiCallBegan({
    url,
    method: "post",
    data: message,
  });

export const addMessageToArray = (message) => (dispatch) => {
  return dispatch(messageAdded(message));
};
