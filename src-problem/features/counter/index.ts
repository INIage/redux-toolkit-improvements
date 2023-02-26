import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { selectFetures } from "../selector";

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, { payload = 1 }: PayloadAction<number>) {
      state.count += payload;
    },
  },
});

export const reduceCounter = { [slice.name]: slice.reducer };
export const selectCounter = createSelector(
  selectFetures,
  (state) => state[slice.name]
);
