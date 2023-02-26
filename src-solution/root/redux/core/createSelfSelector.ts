import { AppState } from "../store";

const select = (state: any) => state;

export type SelfSelector<State, Return> = {
  (state: State): Return;
  inject<State, Return>(selector: (staate: State) => Return): void;
};

export const createSelfSelector = <State, Return>(
  selector: (staate: State) => Return
): SelfSelector<State, Return> => {
  let node = select;

  const self = (state: any) => selector(node(state));

  self.inject = <State, Return>(selector: (staate: State) => Return) => {
    node = selector;
  };

  return self;
};
