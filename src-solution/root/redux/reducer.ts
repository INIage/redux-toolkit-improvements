import { featuresNode } from "../../features/store";

import { combineRootNodes } from "./core/combineRootNodes";

export const reducer = combineRootNodes(featuresNode);
