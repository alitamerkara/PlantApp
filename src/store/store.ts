import { configureStore } from "@reduxjs/toolkit";
import slice from "./reducers/slices";

export const store = configureStore({
  reducer: {
    slicer: slice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
