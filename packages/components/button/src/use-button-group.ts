import type {ButtonProps} from "./index";
import type {ReactRef} from "@jala-banyu/react-utils";
import type {ButtonGroupVariantProps} from "@jala-banyu/theme";

import {buttonGroup} from "@jala-banyu/theme";
import {HTMLBanyuProps, PropGetter, mapPropsVariants} from "@jala-banyu/system";
import {useDOMRef} from "@jala-banyu/react-utils";
import {useMemo, useCallback} from "react";
interface Props extends HTMLBanyuProps, ButtonGroupVariantProps {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLDivElement | null>;
  /**
   * Whether the buttons are disabled.
   * @default false
   */
  isDisabled?: ButtonProps["isDisabled"];
  /** An accessibility label for this item. */
  "aria-label"?: string;
}

export type ContextType = {
  size?: ButtonProps["size"];
  color?: ButtonProps["color"];
  variant?: ButtonProps["variant"];
  radius?: ButtonProps["radius"];
  isDisabled?: ButtonProps["isDisabled"];
  disableAnimation?: ButtonProps["disableAnimation"];
  disableRipple?: ButtonProps["disableRipple"];
  isIconOnly?: ButtonProps["isIconOnly"];
  fullWidth?: boolean;
};

export type UseButtonGroupProps = Props &
  Partial<
    Pick<
      ButtonProps,
      "size" | "color" | "radius" | "variant" | "isIconOnly" | "disableAnimation" | "disableRipple"
    >
  >;

export function useButtonGroup(originalProps: UseButtonGroupProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, buttonGroup.variantKeys);

  const {
    ref,
    as,
    children,
    color = "primary",
    size = "md",
    variant = "outline",
    radius = "sm",
    isDisabled = false,
    disableAnimation = false,
    disableRipple = true,
    isIconOnly = false,
    className,
    ...otherProps
  } = props;

  const Component = as || "div";

  const domRef = useDOMRef(ref);

  const classNames = useMemo(
    () =>
      buttonGroup({
        ...variantProps,
        className,
      }),
    [...Object.values(variantProps), className],
  );

  const context = useMemo<ContextType>(
    () => ({
      size,
      color,
      variant,
      radius,
      isIconOnly,
      isDisabled,
      disableAnimation,
      disableRipple,
      fullWidth: !!originalProps?.fullWidth,
    }),
    [
      size,
      color,
      variant,
      radius,
      isDisabled,
      isIconOnly,
      disableAnimation,
      disableRipple,
      originalProps?.fullWidth,
    ],
  );

  const getButtonGroupProps: PropGetter = useCallback(
    () => ({
      role: "group",
      ...otherProps,
    }),
    [otherProps],
  );

  return {
    Component,
    children,
    domRef,
    context,
    classNames,
    getButtonGroupProps,
  };
}

export type UseButtonGroupReturn = ReturnType<typeof useButtonGroup>;
