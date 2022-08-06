import { createSlice } from "@reduxjs/toolkit";

export const artistSlice = createSlice({
  name: "artist",
  initialState: {
    artists: [],
  },
  reducers: {
    artistsGet: (state, action) => {
      state.artists = action.payload;
    },
  },
});

export const { artistsGet } = artistSlice.actions;
export default artistSlice.reducer;
