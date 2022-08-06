import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    artists: [],
    tracks: [],
  },
  reducers: {
    searchsGet: (state, action) => {
      state.artists = action.payload.artists;
      state.tracks = action.payload.tracks;
    },
  },
});

export const { searchsGet } = searchSlice.actions;
export default searchSlice.reducer;
