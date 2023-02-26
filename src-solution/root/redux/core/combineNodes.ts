import { combineReducers } from "@reduxjs/toolkit";

import { createSelfSelector } from "./createSelfSelector";
import type { StoreNode } from "./createSlice";

export function combineNodes<Key extends string, Name extends string, State>(
  name: Key,
  node: StoreNode<Name, State>
): StoreNode<Key, { [N in Name]: State }>;
export function combineNodes<
  Key extends string,
  Name1 extends string,
  Name2 extends string,
  State1,
  State2
>(
  name: Key,
  node1: StoreNode<Name1, State1>,
  node2: StoreNode<Name2, State2>
): StoreNode<Key, { [N in Name1]: State1 } & { [N in Name2]: State2 }>;
export function combineNodes<
  Key extends string,
  Name1 extends string,
  Name2 extends string,
  Name3 extends string,
  State1,
  Stat2,
  State3
>(
  name: Key,
  node1: StoreNode<Name1, State1>,
  node2: StoreNode<Name2, Stat2>,
  node3: StoreNode<Name3, State3>
): StoreNode<
  Key,
  { [N in Name1]: State1 } & { [N in Name2]: Stat2 } & { [N in Name3]: State3 }
>;
export function combineNodes<
  Key extends string,
  Name1 extends string,
  Name2 extends string,
  Name3 extends string,
  Name4 extends string,
  State1,
  State2,
  State3,
  State4
>(
  name: Key,
  node1: StoreNode<Name1, State1>,
  node2: StoreNode<Name2, State2>,
  node3: StoreNode<Name3, State3>
): StoreNode<
  Key,
  { [N in Name1]: State1 } & { [N in Name2]: State2 } & {
    [N in Name3]: State3;
  } & { [N in Name4]: State4 }
>;
export function combineNodes<K extends string>(
  name: K,
  ...nodes: StoreNode<string, any>[]
) {
  const select = createSelfSelector<any, any>((state) => state[name]);

  return {
    reduce: {
      [name]: combineReducers(
        nodes.reduce((reducers, node) => {
          node.select.inject(select);
          return Object.assign(reducers, node.reduce);
        }, {})
      ),
    },
    select,
  };
}
