import { configureStore } from "@reduxjs/toolkit";
import slice from "./reducers/slices";

export const store = configureStore({
  reducer: {
    slicer: slice,
  },
});
