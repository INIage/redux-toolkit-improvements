import { createSelector } from "@reduxjs/toolkit";

import { selectCounter } from "./index";

export const selectCount = createSelector(
  selectCounter,
  (state) => state.count
);
