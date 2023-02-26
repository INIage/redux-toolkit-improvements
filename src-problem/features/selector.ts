import { createSelector } from "@reduxjs/toolkit";

import { app_state } from "../root/redux/select";

export const selectFetures = createSelector(
  app_state,
  (state) => state.features
);
