import {forwardRef} from "@jala-banyu/system";
import React from "react";

import {InputGroupProvider} from "./input-group-context";
import {UseInputGroupProps, useInputGroup} from "./use-input-group";

export interface InputGroupProps extends UseInputGroupProps {}

const InputGroup = forwardRef<"div", InputGroupProps>((props, ref) => {
  const {Component, domRef, context, children, getInputGroupProps} = useInputGroup({
    ...props,
    ref,
  });

  return (
    <InputGroupProvider value={context}>
      <Component ref={domRef} {...getInputGroupProps()}>
        {children}
      </Component>
    </InputGroupProvider>
  );
});

InputGroup.displayName = "Banyu.InputGroup";

export default InputGroup;
