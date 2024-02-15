import React, {Children, cloneElement, useMemo} from "react";
import {forwardRef} from "@jala-banyu/system";
import {pickChildren} from "@jala-banyu/react-utils";
import {useAriaButton} from "@jala-banyu/use-aria-button";
import {Button} from "@jala-banyu/button";
import {mergeProps} from "@react-aria/utils";

import {usePopoverContext} from "./popover-context";

export interface PopoverTriggerProps {
  children?: React.ReactNode;
}

/**
 * PopoverTrigger opens the popover's content. It must be an interactive element
 * such as `button` or `a`.
 */
const PopoverTrigger = forwardRef<"button", PopoverTriggerProps>((props, _) => {
  const {triggerRef, getTriggerProps} = usePopoverContext();

  const {children, ...otherProps} = props;

  // force a single child
  const child = useMemo<any>(() => {
    if (typeof children === "string") return <p>{children}</p>;

    return Children.only(children) as React.ReactElement & {
      ref?: React.Ref<any>;
    };
  }, [children]);

  const {onPress, ...rest} = useMemo(() => {
    return getTriggerProps(mergeProps(child.props, otherProps), child.ref);
  }, [getTriggerProps, child.props, otherProps, child.ref]);

  // validates if contains a Banyu Button as a child
  const [, triggerChildren] = pickChildren(children, Button);

  const {buttonProps} = useAriaButton({onPress}, triggerRef);

  const hasBanyuButton = useMemo<boolean>(() => {
    return triggerChildren?.[0] !== undefined;
  }, [triggerChildren]);

  return cloneElement(child, mergeProps(rest, hasBanyuButton ? {onPress} : buttonProps));
});

PopoverTrigger.displayName = "Banyu.PopoverTrigger";

export default PopoverTrigger;
