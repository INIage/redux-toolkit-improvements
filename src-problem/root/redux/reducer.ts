import { combineReducers } from "@reduxjs/toolkit";

import { reduceFeatures } from "../../features/reducer";

export const reducer = combineReducers({
  ...reduceFeatures,
});
