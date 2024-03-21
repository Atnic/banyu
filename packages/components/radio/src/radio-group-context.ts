import type {ContextType} from "./use-radio-group";

import {createContext} from "@jala-banyu/react-utils";

export const [RadioGroupProvider, useRadioGroupContext] = createContext<ContextType>({
  name: "RadioGroupContext",
  strict: false,
});
