import {forwardRef} from "@jala-banyu/system";

import {RadioGroupProvider} from "./radio-group-context";
import {UseRadioGroupProps, useRadioGroup} from "./use-radio-group";

export interface RadioGroupProps extends Omit<UseRadioGroupProps, "defaultChecked"> {}

const RadioGroup = forwardRef<"div", RadioGroupProps>((props, ref) => {
  const {
    Component,
    children,
    label,
    context,
    description,
    errorMessage,
    getGroupProps,
    getLabelProps,
    getWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
  } = useRadioGroup({...props, ref});

  return (
    <Component {...getGroupProps()}>
      {label && <span {...getLabelProps()}>{label}</span>}
      <div {...getWrapperProps()}>
        <RadioGroupProvider value={context}>{children}</RadioGroupProvider>
      </div>
      {errorMessage ? (
        <div {...getErrorMessageProps()}>{errorMessage as string}</div>
      ) : description ? (
        <div {...getDescriptionProps()}>{description}</div>
      ) : null}
    </Component>
  );
});

RadioGroup.displayName = "Banyu.RadioGroup";

export default RadioGroup;
