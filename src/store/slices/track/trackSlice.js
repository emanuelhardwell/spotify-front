import { createSlice } from "@reduxjs/toolkit";

export const trackSlice = createSlice({
  name: "track",
  initialState: {
    tracks: [],
  },
  reducers: {
    tracksGet: (state, action) => {
      state.tracks = action.payload;
    },
  },
});

export const { tracksGet } = trackSlice.actions;
export default trackSlice.reducer;
