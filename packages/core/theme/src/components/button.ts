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
    "font-medium",
    "subpixel-antialiased",
    "overflow-hidden",
    "tap-highlight-transparent",
    // focus ring
    ...dataFocusVisibleClasses,
  ],
  variants: {
    variant: {
      solid: "border border-transparent",
      outline: "border bg-transparent",
      ghost: "bg-transparent border-transparent",
      rounded: "border bg-transparent",
      iconOnly: ""
    },
    size: {
      sm: "px-2 min-w-12 h-6 text-xs gap-2",
      md: "px-3 min-w-16 h-8 text-md gap-2",
      lg: "px-4 min-w-20 h-10 text-lg gap-2",
      xl: "px-6 min-w-24 h-12 text-xl gap-3",
    },
    color: {
      primary: "",
      danger: "",
      success: "",
      warning: "",
      transparent: "",
      white: "",
      basic: "",
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
      true: "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
    },
    isInGroup: {
      true: "[&:not(:first-child):not(:last-child)]:rounded-none data-[focus=true]:!ring-0",
    },
    isIconOnly: {
      true: "px-unit-0 !gap-unit-0 h-8",
      false: "[&>svg]:max-w-[theme(spacing.unit-4)]",
    },
    disableAnimation: {
      true: "!transition-none",
      false:
        // "data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none",
        "ease-out duration-300"
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
    disableAnimation: false,
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
      color: "danger",
      class: colorVariants.solid.danger,
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
      color: "white",
      class: colorVariants.solid.white,
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

    // outline / color
    {
      variant: "outline",
      color: "primary",
      class: colorVariants.outline.primary,
    },
    {
      variant: "outline",
      color: "danger",
      class: colorVariants.outline.danger,
    },
    {
      variant: "outline",
      color: "warning",
      class: colorVariants.outline.warning,
    },
    {
      variant: "outline",
      color: "success",
      class: colorVariants.outline.success,
    },
    {
      variant: "outline",
      color: "white",
      class: colorVariants.outline.white,
    },
    {
      variant: "outline",
      color: "transparent",
      class: colorVariants.outline.transparent,
    },
    {
      variant: "outline",
      color: "white",
      class: colorVariants.outline.white,
    },
    {
      variant: "outline",
      color: "basic",
      class: colorVariants.outline.basic,
    },

    // ghost / color
    {
      variant: "ghost",
      color: "primary",
      class: colorVariants.ghost.primary,
    },
    {
      variant: "ghost",
      color: "danger",
      class: colorVariants.ghost.danger,
    },
    {
      variant: "ghost",
      color: "warning",
      class: colorVariants.ghost.warning,
    },
    {
      variant: "ghost",
      color: "success",
      class: colorVariants.ghost.success,
    },
    {
      variant: "ghost",
      color: "white",
      class: colorVariants.ghost.white,
    },
    {
      variant: "ghost",
      color: "transparent",
      class: colorVariants.ghost.transparent,
    },
    {
      variant: "ghost",
      color: "white",
      class: colorVariants.ghost.white,
    },
    {
      variant: "ghost",
      color: "basic",
      class: colorVariants.ghost.basic,
    },

    // rounded / color
    {
      variant: "rounded",
      color: "primary",
      class: colorVariants.rounded.primary,
    },
    {
      variant: "rounded",
      color: "danger",
      class: colorVariants.rounded.danger,
    },
    {
      variant: "rounded",
      color: "warning",
      class: colorVariants.rounded.warning,
    },
    {
      variant: "rounded",
      color: "success",
      class: colorVariants.rounded.success,
    },
    {
      variant: "rounded",
      color: "white",
      class: colorVariants.rounded.white,
    },
    {
      variant: "rounded",
      color: "transparent",
      class: colorVariants.rounded.transparent,
    },
    {
      variant: "rounded",
      color: "basic",
      class: colorVariants.rounded.basic,
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
      variant: ["rounded", "outline"],
      color: "primary",
      className: collapseAdjacentVariantBorders.primary,
    },
    {
      isInGroup: true,
      variant: ["rounded", "outline"],
      color: "success",
      className: collapseAdjacentVariantBorders.success,
    },
    {
      isInGroup: true,
      variant: ["rounded", "outline"],
      color: "warning",
      className: collapseAdjacentVariantBorders.warning,
    },
    {
      isInGroup: true,
      variant: ["rounded", "outline"],
      color: "danger",
      className: collapseAdjacentVariantBorders.danger,
    },

    // Icon Button
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
    {
      isIconOnly: true,
      variant: "iconOnly",
      color: "primary",
      class: colorVariants.iconOnly.primary,
    },
    {
      isIconOnly: true,
      variant: "iconOnly",
      color: "danger",
      class: colorVariants.iconOnly.danger,
    },
    {
      isIconOnly: true,
      variant: "iconOnly",
      color: "warning",
      class: colorVariants.iconOnly.warning,
    },
    {
      isIconOnly: true,
      variant: "iconOnly",
      color: "success",
      class: colorVariants.iconOnly.success,
    },
    {
      isIconOnly: true,
      variant: "iconOnly",
      color: "white",
      class: colorVariants.iconOnly.white,
    },
    {
      isIconOnly: true,
      variant: "iconOnly",
      color: "basic",
      class: colorVariants.iconOnly.basic,
    },
    {
      isIconOnly: true,
      variant: "iconOnly",
      color: "transparent",
      class: colorVariants.iconOnly.transparent,
    },

    // variant / hover 👆
    //   primary
    {
      variant: "solid",
      color: "primary",
      class: "data-[hover=true]:bg-brand/60",
    },
    //   danger
    {
      variant: "solid",
      color: "danger",
      class: "data-[hover=true]:bg-danger/60",
    },
    //   warning
    {
      variant: "solid",
      color: "warning",
      class: "data-[hover=true]:bg-warning/60",
    },
    //   success
    {
      variant: "solid",
      color: "success",
      class: "data-[hover=true]:bg-success/60",
    },
    //   white
    {
      variant: "solid",
      color: "white",
      class: "data-[hover=true]:bg-brand/60 data-[hover=true]:border-brand/60 data-[hover=true]:text-white",
    },
    //   basic
    {
      variant: "solid",
      color: "basic",
      class: "data-[hover=true]:bg-neutral-200 data-[hover=true]:border-neutral-200 data-[hover=true]:text-neutral-700",
    },
    //   transparent
    {
      variant: "solid",
      color: "transparent",
      class: "data-[hover=true]:bg-brand-50 data-[hover=true]:border-brand-50",
    },

    //   primary
    {
      variant: ["outline", "rounded"],
      color: "primary",
      class: "data-[hover=true]:bg-brand data-[hover=true]:text-white",
    },
    //   danger
    {
      variant: ["outline", "rounded"],
      color: "danger",
      class: "data-[hover=true]:bg-danger-600 data-[hover=true]:text-white",
    },
    //   warning
    {
      variant: ["outline", "rounded"],
      color: "warning",
      class: "data-[hover=true]:bg-warning-500 data-[hover=true]:text-white",
    },
    //   success
    {
      variant: ["outline", "rounded"],
      color: "success",
      class: "data-[hover=true]:bg-success-500 data-[hover=true]:text-white",
    },
    //   white
    {
      variant: ["outline", "rounded"],
      color: "white",
      class: "data-[hover=true]:bg-white-5a data-[hover=true]:border-white data-[hover=true]:text-white",
    },
    //   basic
    {
      variant: ["outline", "rounded"],
      color: "basic",
      class: "data-[hover=true]:bg-neutral-200 data-[hover=true]:text-black",
    },
    //   transparent
    {
      variant: ["outline", "rounded"],
      color: "transparent",
      class: "data-[hover=true]:bg-brand-50 data-[hover=true]:text-brand",
    },

    //   primary
    {
      variant: "ghost",
      color: "primary",
      class: "data-[hover=true]:text-brand-900 data-[hover=true]:bg-brand-50",
    },
    //   danger
    {
      variant: "ghost",
      color: "danger",
      class: "data-[hover=true]:text-danger-900 data-[hover=true]:bg-danger-50",
    },
    //   warning
    {
      variant: "ghost",
      color: "warning",
      class: "data-[hover=true]:text-warning-900 data-[hover=true]:bg-warning-50",
    },
    //   success
    {
      variant: "ghost",
      color: "success",
      class: "data-[hover=true]:text-success-900 data-[hover=true]:bg-success-50",
    },
    //   white
    {
      variant: "ghost",
      color: "white",
      class: "data-[hover=true]:text-brand-900 data-[hover=true]:bg-brand-50",
    },
    //   basic
    {
      variant: "ghost",
      color: "basic",
      class: "data-[hover=true]:text-brand-900 data-[hover=true]:bg-brand-50",
    },
    //   transparent
    {
      variant: "ghost",
      color: "transparent",
      class: "data-[hover=true]:text-brand-900 data-[hover=true]:bg-brand-50",
    },

    //   primary
    {
      variant: "iconOnly",
      color: "primary",
      class: "data-[hover=true]:bg-brand data-[hover=true]:text-white",
    },
    //   danger
    {
      variant: "iconOnly",
      color: "danger",
      class: "data-[hover=true]:bg-danger-600 data-[hover=true]:text-white",
    },
    //   warning
    {
      variant: "iconOnly",
      color: "warning",
      class: "data-[hover=true]:bg-warning-500 data-[hover=true]:text-white",
    },
    //   success
    {
      variant: "iconOnly",
      color: "success",
      class: "data-[hover=true]:bg-success-500 data-[hover=true]:text-white",
    },
    //   white
    {
      variant: "iconOnly",
      color: "white",
      class: "data-[hover=true]:bg-white-5a data-[hover=true]:border-white data-[hover=true]:text-white",
    },
    //   basic
    {
      variant: "iconOnly",
      color: "basic",
      class: "data-[hover=true]:bg-neutral-200 data-[hover=true]:text-black",
    },
    //   transparent
    {
      variant: "iconOnly",
      color: "transparent",
      class: "data-[hover=true]:bg-brand-50 data-[hover=true]:text-brand",
    },


    // variant / focus 🎯
    //   primary
    {
      variant: "solid",
      color: "primary",
      class: "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-brand-800 data-[focus=true]:ring-brand/60",
    },
    //   danger
    {
      variant: "solid",
      color: "danger",
      class: "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-danger-800 data-[focus=true]:ring-danger/60",
    },
    //   warning
    {
      variant: "solid",
      color: "warning",
      class: "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-warning-800 data-[focus=true]:ring-warning/60",
    },
    //   success
    {
      variant: "solid",
      color: "success",
      class: "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-success-800 data-[focus=true]:ring-success/60",
    },
    //   white
    {
      variant: "solid",
      color: "white",
      class: "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-brand-800 data-[focus=true]:border-brand-800 data-[focus=true]:ring-brand/60 data-[focus=true]:text-white",
    },
    //   basic
    {
      variant: "solid",
      color: "basic",
      class: "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:ring-neutral-200 data-[focus=true]:bg-neutral-300 data-[focus=true]:border-brand-300 data-[focus=true]:border-brand-700",
    },
    //   transparent
    {
      variant: "solid",
      color: "transparent",
      class: "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:ring-brand-200 data-[focus=true]:bg-brand-200 data-[focus=true]:border-brand-200",
    },

    //   primary
    {
      variant: ["outline", "rounded"],
      color: "primary",
      class: "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-brand-800 data-[focus=true]:ring-brand/60 data-[focus=true]:text-white",
    },
    //   danger
    {
      variant: ["outline", "rounded"],
      color: "danger",
      class: "data-[focus=true]:focus:outline-none data-[focus=true]:focus:ring-1 data-[focus=true]:focus:bg-danger-800 data-[focus=true]:focus:border-danger-800 data-[focus=true]:focus:text-white data-[focus=true]:focus:ring-danger/60",
    },
    //   warning
    {
      variant: ["outline", "rounded"],
      color: "warning",
      class: "data-[focus=true]:focus:outline-none data-[focus=true]:focus:ring-1 data-[focus=true]:focus:bg-warning-800 data-[focus=true]:focus:border-warning-800 data-[focus=true]:focus:text-white data-[focus=true]:focus:ring-warning/60",
    },
    //   success
    {
      variant: ["outline", "rounded"],
      color: "success",
      class: "data-[focus=true]:focus:outline-none data-[focus=true]:focus:ring-1 data-[focus=true]:focus:bg-success-800 data-[focus=true]:focus:border-success-800 data-[focus=true]:focus:text-white data-[focus=true]:focus:ring-success/60",
    },
    //   white
    {
      variant: ["outline", "rounded"],
      color: "white",
      class: "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-warning-800 data-[focus=true]:border-warning-800 data-[focus=true]:text-white dark:focus:ring-warning/60",
    },
    //   basic
    {
      variant: ["outline", "rounded"],
      color: "basic",
      class: "data-[focus=true]:focus:outline-none data-[focus=true]:focus:ring-1 data-[focus=true]:focus:bg-neutral-300 data-[focus=true]:focus:border-neutral-300 data-[focus=true]:focus:text-neutral-800 data-[focus=true]:focus:ring-neutral/60",
    },
    //   transparent
    {
      variant: ["outline", "rounded"],
      color: "transparent",
      class: "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-brand-200 data-[focus=true]:border-brand data-[focus=true]:text-brand dark:focus:ring-brand/60",
    },

    //   primary
    {
      variant: "ghost",
      color: "primary",
      class: "data-[focus=true]:ring-1 data-[focus=true]:bg-brand-50 data-[focus=true]:border-brand-50 data-[focus=true]:text-brand-900 data-[focus=true]:ring-brand-50",
    },
    //   danger
    {
      variant: "ghost",
      color: "danger",
      class: "data-[focus=true]:ring-1 data-[focus=true]:bg-danger-50 data-[focus=true]:border-danger-50 data-[focus=true]:text-danger-900 data-[focus=true]:ring-danger-50",
    },
    //   warning
    {
      variant: "ghost",
      color: "warning",
      class: "data-[focus=true]:ring-1 data-[focus=true]:bg-warning-50 data-[focus=true]:border-warning-50 data-[focus=true]:text-warning-900 data-[focus=true]:ring-warning-50",
    },
    //   success
    {
      variant: "ghost",
      color: "success",
      class: "data-[focus=true]:ring-1 data-[focus=true]:bg-success-50 data-[focus=true]:border-success-50 data-[focus=true]:text-success-900 data-[focus=true]:ring-success-50",
    },
    //   white
    {
      variant: "ghost",
      color: "white",
      class: "data-[focus=true]:ring-1 data-[focus=true]:bg-brand-50 data-[focus=true]:border-brand-50 data-[focus=true]:text-brand-900 data-[focus=true]:ring-brand-50",
    },
    //   basic
    {
      variant: "ghost",
      color: "basic",
      class: "data-[focus=true]:ring-1 data-[focus=true]:bg-brand-50 data-[focus=true]:border-brand-50 data-[focus=true]:text-brand-900 data-[focus=true]:ring-brand-50",
    },
    //   transparent
    {
      variant: "ghost",
      color: "transparent",
      class: "data-[focus=true]:ring-1 data-[focus=true]:bg-brand-50 data-[focus=true]:border-brand-50 data-[focus=true]:text-brand-900 data-[focus=true]:ring-brand-50",
    },

    //   primary
    {
      variant: "iconOnly",
      color: "primary",
      class: "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-brand-800 data-[focus=true]:ring-brand/60 data-[focus=true]:text-white",
    },
    //   danger
    {
      variant: "iconOnly",
      color: "danger",
      class: "data-[focus=true]:focus:outline-none data-[focus=true]:focus:ring-1 data-[focus=true]:focus:bg-danger-800 data-[focus=true]:focus:border-danger-800 data-[focus=true]:focus:text-white data-[focus=true]:focus:ring-danger/60",
    },
    //   warning
    {
      variant: "iconOnly",
      color: "warning",
      class: "data-[focus=true]:focus:outline-none data-[focus=true]:focus:ring-1 data-[focus=true]:focus:bg-warning-800 data-[focus=true]:focus:border-warning-800 data-[focus=true]:focus:text-white data-[focus=true]:focus:ring-warning/60",
    },
    //   success
    {
      variant: "iconOnly",
      color: "success",
      class: "data-[focus=true]:focus:outline-none data-[focus=true]:focus:ring-1 data-[focus=true]:focus:bg-success-800 data-[focus=true]:focus:border-success-800 data-[focus=true]:focus:text-white data-[focus=true]:focus:ring-success/60",
    },
    //   white
    {
      variant: "iconOnly",
      color: "white",
      class: "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-warning-800 data-[focus=true]:border-warning-800 data-[focus=true]:text-white dark:focus:ring-warning/60",
    },
    //   basic
    {
      variant: "iconOnly",
      color: "basic",
      class: "data-[focus=true]:focus:outline-none data-[focus=true]:focus:ring-1 data-[focus=true]:focus:bg-gray-800 data-[focus=true]:focus:border-gray-800 data-[focus=true]:focus:text-white data-[focus=true]:focus:ring-gray/60",
    },
    //   transparent
    {
      variant: "iconOnly",
      color: "transparent",
      class: "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-brand-200 data-[focus=true]:border-brand data-[focus=true]:text-brand dark:focus:ring-brand/60",
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
