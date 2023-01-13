import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "Jh de la cruz",
  name: "Jh que bendicion",
  token: "beto12345",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.token = action.payload.token;
    },

    unsetUser: (state) => {
      state.email = "";
      state.name = "";
      state.token = "";
    },
  },
});

export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;
