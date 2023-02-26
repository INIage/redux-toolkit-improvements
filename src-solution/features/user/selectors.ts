import { createSelector } from "@reduxjs/toolkit";

import { selectUser } from "./index";

export const selectName = createSelector(selectUser, (state) => state.name);
