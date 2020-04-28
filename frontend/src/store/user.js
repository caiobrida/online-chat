import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    userAdded: (user, action) => {
      user.name = action.payload.name;
      user.id = Math.random() * 100 + 1;
    },
  },
});

export const { userAdded } = slice.actions;
export default slice.reducer;
