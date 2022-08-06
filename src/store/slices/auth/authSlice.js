import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    checking: true,
    // name: null,
    // id: null,
  },
  reducers: {
    authCheckingFinish: (state) => {
      state.checking = false;
    },
    authLogin: (state, action) => {
      state.checking = false;
      state.id = action.payload.id;
      state.idExtra = action.payload.idExtra;
    },
    authGetInfo: (state, action) => {
      state.name = action.payload.name;
      state.idSpotify = action.payload.idSpotify;
    },
    authLogout: (state) => {
      state.checking = false;
      state.name = undefined;
      state.email = undefined;
      state.id = undefined;
    },
  },
});

export const { authCheckingFinish, authLogin, authLogout, authGetInfo } =
  authSlice.actions;
export default authSlice.reducer;
