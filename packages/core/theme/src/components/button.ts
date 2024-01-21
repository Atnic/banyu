import type {VariantProps} from "tailwind-variants";

import {tv} from "../utils/tv";
import {collapseAdjacentVariantBorders, colorVariants, dataFocusVisibleClasses} from "../utils";

/**
 * Button wrapper **Tailwind Variants** component
 *
 * const classNames = button({...})
 *
 * @example
 * <button
 *  className={classNames())}
 *  data-pressed={true/false}
 *  data-hover={true/false}
 *  data-focus={true/false}
 *  data-focus-visible={true/false}
 * >
 *   Button
 * </button>
 */
const button = tv({
  base: [
    "z-0",
    "group",
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "box-border",
    "appearance-none",
    "outline-none",
    "select-none",
    "whitespace-nowrap",
    "min-w-max",
    "font-normal",
    "subpixel-antialiased",
    "overflow-hidden",
    "tap-highlight-transparent",
    // focus ring
    ...dataFocusVisibleClasses,
  ],
  variants: {
    variant: {
      solid: "",
      outline: "border bg-transparent",
      ghost: "",
      white: "bg-white",
      transparent: "bg-transparent",
      link: "bg-transparent",
    },
    size: {
      sm: "px-2 min-w-12 h-6 text-xs gap-2",
      md: "px-3 min-w-16 h-8 text-md gap-2",
      lg: "px-4 min-w-20 h-10 text-lg gap-2",
      xl: "px-6 min-w-24 h-12 text-xl gap-3",
    },
    color: {
      primary: "",
      critical: "",
      success: "",
      warning: "",
      basic: "",
      transparent: "",
      white: "",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    fullWidth: {
      true: "w-full",
    },
    isDisabled: {
      true: "opacity-disabled pointer-events-none cursor-not-allowed",
    },
    isInGroup: {
      true: "[&:not(:first-child):not(:last-child)]:rounded-none",
    },
    isIconOnly: {
      true: "px-unit-0 !gap-unit-0",
      false: "[&>svg]:max-w-[theme(spacing.unit-8)]",
    },
    disableAnimation: {
      true: "!transition-none",
      false:
        "data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none",
    },
  },
  defaultVariants: {
    size: "md",
    radius: "md",
    variant: "solid",
    color: "primary",
    fullWidth: false,
    isDisabled: false,
    isInGroup: false,
    disableAnimation: true,
  },
  compoundVariants: [
    // solid / color
    {
      variant: "solid",
      color: "primary",
      class: colorVariants.solid.primary,
    },
    {
      variant: "solid",
      color: "critical",
      class: colorVariants.solid.critical,
    },
    {
      variant: "solid",
      color: "warning",
      class: colorVariants.solid.warning,
    },
    {
      variant: "solid",
      color: "success",
      class: colorVariants.solid.success,
    },
    {
      variant: "solid",
      color: "transparent",
      class: colorVariants.solid.transparent,
    },
    {
      variant: "solid",
      color: "basic",
      class: colorVariants.solid.basic,
    },
    {
      variant: "white",
      color: "white",
      class: colorVariants.solid.white,
    },
    {
      variant: "link",
      color: "white",
      class: colorVariants.solid.white,
    },
    // outline / color
    {
      variant: "outline",
      color: "primary",
      class: colorVariants.outline.primary,
    },
    // isInGroup / radius / size <-- radius not provided
    {
      isInGroup: true,
      class: "rounded-none first:rounded-s-md last:rounded-e-md",
    },
    {
      isInGroup: true,
      size: "sm",
      class: "rounded-none first:rounded-s-sm last:rounded-e-sm",
    },
    {
      isInGroup: true,
      size: "md",
      class: "rounded-none first:rounded-s-md last:rounded-e-md",
    },
    {
      isInGroup: true,
      size: "lg",
      class: "rounded-none first:rounded-s-lg last:rounded-e-lg",
    },
    {
      isInGroup: true,
      size: "xl",
      class: "rounded-none first:rounded-s-lg last:rounded-e-lg",
    },
    {
      isInGroup: true,
      isRounded: true,
      class: "rounded-none first:rounded-s-full last:rounded-e-full",
    },
    // isInGroup / radius <-- radius provided
    {
      isInGroup: true,
      radius: "none",
      class: "rounded-none first:rounded-s-none last:rounded-e-none",
    },
    {
      isInGroup: true,
      radius: "sm",
      class: "rounded-none first:rounded-s-sm last:rounded-e-sm",
    },
    {
      isInGroup: true,
      radius: "md",
      class: "rounded-none first:rounded-s-md last:rounded-e-md",
    },
    {
      isInGroup: true,
      radius: "lg",
      class: "rounded-none first:rounded-s-lg last:rounded-e-lg",
    },
    {
      isInGroup: true,
      radius: "xl",
      class: "rounded-none first:rounded-s-xl last:rounded-e-xl",
    },
    {
      isInGroup: true,
      radius: "full",
      class: "rounded-none first:rounded-s-full last:rounded-e-full",
    },
    // isInGroup / bordered / ghost
    {
      isInGroup: true,
      variant: ["ghost", "outline"],
      color: "primary",
      className: collapseAdjacentVariantBorders.primary,
    },
    {
      isInGroup: true,
      variant: ["ghost", "outline"],
      color: "success",
      className: collapseAdjacentVariantBorders.success,
    },
    {
      isInGroup: true,
      variant: ["ghost", "outline"],
      color: "warning",
      className: collapseAdjacentVariantBorders.warning,
    },
    {
      isInGroup: true,
      variant: ["ghost", "outline"],
      color: "critical",
      className: collapseAdjacentVariantBorders.critical,
    },
    {
      isIconOnly: true,
      size: "sm",
      class: "min-w-unit-8 w-unit-8 h-unit-8",
    },
    {
      isIconOnly: true,
      size: "md",
      class: "min-w-unit-10 w-unit-10 h-unit-10",
    },
    {
      isIconOnly: true,
      size: "lg",
      class: "min-w-unit-12 w-unit-12 h-unit-12",
    },
    {
      isIconOnly: true,
      size: "xl",
      class: "min-w-unit-12 w-unit-12 h-unit-12",
    },
    // variant / hover
    {
      variant: ["solid", "outline", "ghost", "transparent", "white", "link"],
      class: "data-[hover=true]:opacity-hover",
    },
  ],
});

// size: {
//   sm: "px-3 h-8 text-small",
//   md: "px-4 h-10 text-medium",
//   lg: "px-6 h-12 text-medium",
// },

/**
 * ButtonGroup wrapper **Tailwind Variants** component
 *
 * const classNames = buttonGroup({...})
 *
 * @example
 * <div role="group" className={classNames())}>
 *   // button elements
 * </div>
 */
const buttonGroup = tv({
  base: "inline-flex items-center justify-center h-auto",
  variants: {
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    fullWidth: false,
  },
});

export type ButtonGroupVariantProps = VariantProps<typeof buttonGroup>;
export type ButtonVariantProps = VariantProps<typeof button>;

export {button, buttonGroup};
