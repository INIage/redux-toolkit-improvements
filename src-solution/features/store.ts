import { combineNodes } from "../root/redux/core/combineNodes";

import { counterNode } from "./counter";
import { userNode } from "./user";

export const featuresNode = combineNodes("features", counterNode, userNode);
