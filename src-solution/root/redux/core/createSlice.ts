import { createSlice as createReduxSlice } from "@reduxjs/toolkit";
import type {
  CreateSliceOptions,
  Reducer,
  SliceCaseReducers,
} from "@reduxjs/toolkit";

import type { AppState } from "../store";

import type { SelfSelector } from "./createSelfSelector";
import { createSelfSelector } from "./createSelfSelector";

export type StoreNode<Name extends string, State> = {
  reduce: { [N in Name]: Reducer<State> };
  select: SelfSelector<any, State>;
};

export function createSlice<
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
  const { name, reducer, ...slice } = createReduxSlice<
    State,
    CaseReducers,
    Name
  >(options);

  const node: StoreNode<Name, State> = {
    reduce: { [name]: reducer } as {
      [N in Name]: Reducer<State>;
    },
    select: createSelfSelector<any, State>((state) => state[name]),
  };

  return {
    ...slice,
    node,
  };
}
