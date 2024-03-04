import {createContext} from "@jala-banyu/react-utils";

import {ContextType} from "./use-input-group";

export const [InputGroupProvider, useInputGroupContext] = createContext<ContextType>({
  name: "InputGroupContext",
  strict: false,
});
