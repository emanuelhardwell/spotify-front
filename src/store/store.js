import { configureStore } from "@reduxjs/toolkit";
import { artistSlice } from "./slices/artist/artistSlice";
import { authSlice } from "./slices/auth/authSlice";
import { searchSlice } from "./slices/search/searchSlice";
import { trackSlice } from "./slices/track/trackSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    track: trackSlice.reducer,
    artist: artistSlice.reducer,
    search: searchSlice.reducer,
  },
});
