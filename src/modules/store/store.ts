import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { novelSlice } from "../reducers/novel";
import { chapterSlice } from "../reducers/chapter";
import { bannerSlice } from "../reducers/banner";
import { boardSlice } from "../reducers/board";
import { duckPickSlice } from "../reducers/duckPick";

export const store = configureStore({
  reducer: {
    [boardSlice.reducerPath]: boardSlice.reducer,
    [bannerSlice.reducerPath]: bannerSlice.reducer,
    [chapterSlice.reducerPath]: chapterSlice.reducer,
    [novelSlice.reducerPath]: novelSlice.reducer,
    [duckPickSlice.reducerPath]: duckPickSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      boardSlice.middleware,
      bannerSlice.middleware,
      chapterSlice.middleware,
      novelSlice.middleware,
      duckPickSlice.middleware
    ),
});

setupListeners(store.dispatch);
