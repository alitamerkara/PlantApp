import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DatasType } from "../../components/types";

interface SliceState {
  onboard: boolean;
  activeIndex: number;
  getStarted: boolean;
  datas: DatasType;
}

const initialState: SliceState = {
  onboard: true,
  activeIndex: 0,
  getStarted: true,
  datas: {
    data: [],
    error: false,
    loading: true,
  },
};

const slice = createSlice({
  name: "slices",
  initialState,
  reducers: {
    setOnboard(state, action: PayloadAction<boolean>) {
      state.onboard = action.payload;
    },
    setActiveIndex(state, action: PayloadAction<number>) {
      state.activeIndex = action.payload;
    },
    setGetStarted(state, action: PayloadAction<boolean>) {
      state.getStarted = action.payload;
    },
    setDatas(state, action: PayloadAction<Partial<SliceState>>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setOnboard, setActiveIndex, setGetStarted, setDatas } =
  slice.actions;
export default slice.reducer;
