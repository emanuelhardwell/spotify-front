import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorites: [],
    favoriteActive: null,
    favoriteModal: false,
  },
  reducers: {
    favoritesGet: (state, action) => {
      state.favorites = action.payload;
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
} = favoriteSlice.actions;
export default favoriteSlice.reducer;
