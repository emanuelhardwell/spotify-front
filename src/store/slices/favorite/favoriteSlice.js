import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favoritesArtists: [],
    favoritesTracks: [],
    favoriteActive: null,
    favoriteModal: false,
  },
  reducers: {
    favoritesGetArtists: (state, action) => {
      state.favoritesArtists = action.payload;
    },
    favoritesGetTracks: (state, action) => {
      state.favoritesTracks = action.payload;
    },
    favoriteActive: (state, action) => {
      state.favoriteActive = action.payload;
    },
    favoriteClearActive: (state, action) => {
      state.favoriteActive = {};
    },
    favoriteModalOpen: (state, action) => {
      state.favoriteModal = true;
    },
    favoriteModalClose: (state, action) => {
      state.favoriteModal = false;
    },
  },
});

export const {
  favoritesGet,
  favoriteActive,
  favoriteClearActive,
  favoriteModalOpen,
  favoriteModalClose,
  favoritesGetTracks,
  favoritesGetArtists,
} = favoriteSlice.actions;
export default favoriteSlice.reducer;
