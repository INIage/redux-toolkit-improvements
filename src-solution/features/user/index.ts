import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../root/redux/core/createSlice";

interface CounterState {
  name: string;
}

const initialState: CounterState = {
  name: "",
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set_name(state, { payload = "" }: PayloadAction<string>) {
      state.name += payload;
    },
  },
});

export const { set_name: SetName } = slice.actions;

export const userNode = slice.node;
export const selectUser = userNode.select;
