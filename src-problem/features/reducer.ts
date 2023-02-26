import { combineReducers } from "@reduxjs/toolkit";

import { reduceCounter } from "./counter";

export const reduceFeatures = {
  features: combineReducers({
    ...reduceCounter,
  }),
};
