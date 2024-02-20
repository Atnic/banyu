import {forwardRef} from "@jala-banyu/system-rsc";
import React from "react";

import {UseDividerProps, useDivider} from "./use-divider";

export interface DividerProps extends Omit<UseDividerProps, "children"> {}

const Divider = forwardRef<"div", DividerProps>((props, ref) => {
  const {label, labelPosition, getDividerProps, getLabelProps, getWrapperProps} = useDivider({
    ...props,
  });

  const labelContent = label ? <label {...getLabelProps()}>{label}</label> : null;

  return (
    <div ref={ref}>
      <div {...getWrapperProps()}>
        {labelPosition === "start" && labelContent}
        <div {...getDividerProps()} />
        {labelPosition === "middle" && labelContent}
        <div {...getDividerProps()} />
        {labelPosition === "end" && labelContent}
      </div>
    </div>
  );
});

Divider.displayName = "Banyu.Divider";

export default Divider;
