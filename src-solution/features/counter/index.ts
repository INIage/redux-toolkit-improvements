import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "../../root/redux/core/createSlice";

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

export const { increment: Increment } = slice.actions;

export const counterNode = slice.node;
export const selectCounter = counterNode.select;
