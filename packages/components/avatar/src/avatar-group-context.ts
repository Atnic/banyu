import {createContext} from "@jala-banyu/react-utils";

import {ContextType} from "./use-avatar-group";

export const [AvatarGroupProvider, useAvatarGroupContext] = createContext<ContextType>({
  name: "AvatarGroupContext",
  strict: false,
});
