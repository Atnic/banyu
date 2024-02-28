import type {InputProps} from "./index";
import type {ReactRef} from "@jala-banyu/react-utils";
import type {InputGroupVariantProps} from "@jala-banyu/theme";

import {inputGroup} from "@jala-banyu/theme";
import {HTMLBanyuProps, PropGetter, mapPropsVariants} from "@jala-banyu/system";
import {useDOMRef} from "@jala-banyu/react-utils";
import {useMemo, useCallback} from "react";
interface Props extends HTMLBanyuProps, InputGroupVariantProps {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLDivElement | null>;
  /**
   * Whether the buttons are disabled.
   * @default false
   */
  isDisabled?: InputProps["isDisabled"];
}

export type ContextType = {
  size?: InputProps["size"];
  variant?: InputProps["variant"];
  radius?: InputProps["radius"];
  isDisabled?: InputProps["isDisabled"];
  disableAnimation?: InputProps["disableAnimation"];
};

export type UseInputGroupProps = Props &
  Partial<Pick<InputProps, "size" | "label" | "radius" | "variant" | "disableAnimation">>;

export function useInputGroup(originalProps: UseInputGroupProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, inputGroup.variantKeys);

  const {
    ref,
    as,
    children,
    size = "md",
    variant = "flat",
    isDisabled = false,
    disableAnimation = false,
    className,
    ...otherProps
  } = props;

  const Component = as || "div";

  const domRef = useDOMRef(ref);

  const classNames = useMemo(
    () =>
      inputGroup({
        ...variantProps,
        className,
      }),
    [...Object.values(variantProps), className],
  );

  const context = useMemo<ContextType>(
    () => ({
      size,
      isDisabled,
      disableAnimation,
      fullWidth: !!originalProps?.fullWidth,
    }),
    [size, variant, isDisabled, disableAnimation, originalProps?.fullWidth],
  );

  const getInputGroupProps: PropGetter = useCallback(
    () => ({
      role: "group",
      "data-slot": "input-group",
      class: classNames,
      ...otherProps,
    }),
    [otherProps],
  );

  return {
    Component,
    children,
    domRef,
    // label,
    context,
    classNames,
    getInputGroupProps,
  };
}

export type UseButtonGroupReturn = ReturnType<typeof useInputGroup>;
