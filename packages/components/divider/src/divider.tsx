import {forwardRef} from "@banyu/system-rsc";

import {UseDividerProps, useDivider} from "./use-divider";

export interface DividerProps extends Omit<UseDividerProps, "children"> {}

const Divider = forwardRef<"div", DividerProps>((props, ref) => {
  const {Component, getDividerProps} = useDivider({...props});

  return <Component ref={ref} {...getDividerProps()} />;
});

Divider.displayName = "Banyu.Divider";

export default Divider;
