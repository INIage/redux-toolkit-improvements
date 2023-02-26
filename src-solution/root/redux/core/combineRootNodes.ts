import { CombinedState, combineReducers, Reducer } from "@reduxjs/toolkit";

import type { StoreNode } from "./createSlice";

export type ReducerMap<Name extends string, State> = {
  [N in Name]: CombinedState<State>;
};

export function combineRootNodes<Name extends string, State>(
  node: StoreNode<Name, State>
): Reducer<{
  [N in Name]: CombinedState<State>;
}>;
export function combineRootNodes<
  Name1 extends string,
  Name2 extends string,
  State1,
  State2
>(
  node1: StoreNode<Name1, State1>,
  node2: StoreNode<Name2, State2>
): Reducer<
  {
    [N in Name1]: CombinedState<State1>;
  } & {
    [N in Name2]: CombinedState<State2>;
  }
>;
export function combineRootNodes<
  Name1 extends string,
  Name2 extends string,
  Name3 extends string,
  State1,
  State2,
  State3
>(
  node1: StoreNode<Name1, State1>,
  node2: StoreNode<Name2, State2>,
  node3: StoreNode<Name3, State3>
): Reducer<
  {
    [N in Name1]: CombinedState<State1>;
  } & {
    [N in Name2]: CombinedState<State2>;
  } & {
    [N in Name3]: CombinedState<State3>;
  }
>;
export function combineRootNodes<
  Name1 extends string,
  Name2 extends string,
  Name3 extends string,
  Name4 extends string,
  State1,
  State2,
  State3,
  State4
>(
  node1: StoreNode<Name1, State1>,
  node2: StoreNode<Name2, State2>,
  node3: StoreNode<Name3, State3>
): Reducer<
  {
    [N in Name1]: CombinedState<State1>;
  } & {
    [N in Name2]: CombinedState<State2>;
  } & {
    [N in Name3]: CombinedState<State3>;
  } & {
    [N in Name4]: CombinedState<State4>;
  }
>;
export function combineRootNodes(...nodes: StoreNode<string, any>[]) {
  return combineReducers(
    nodes.reduce((reducers, node) => Object.assign(reducers, node.reduce), {})
  );
}
