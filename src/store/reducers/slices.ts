import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SliceState {
  onboard: boolean;
}

const initialState: SliceState = {
  onboard: true,
};

const slice = createSlice({
  name: "slices",
  initialState,
  reducers: {
    setOnboard(state, action: PayloadAction<boolean>) {
      state.onboard = action.payload;
    },
  },
});

export const { setOnboard } = slice.actions;
export default slice.reducer;
