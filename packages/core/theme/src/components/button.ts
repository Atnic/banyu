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
    "font-md",
    "subpixel-antialiased",
    "overflow-hidden",
    "tap-highlight-transparent",
    // focus ring
    ...dataFocusVisibleClasses,
  ],
  variants: {
    variant: {
      solid: "border border-transparent font-semibold",
      outline: "border bg-transparent font-semibold",
      ghost: "bg-none border border-[#0000] font-semibold",
      rounded: "border bg-transparent font-semibold",
      iconOnly: "",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },
    color: {
      primary: "",
      danger: "",
      success: "",
      warning: "",
      transparent: "",
      white: "",
      secondary: "",
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
      true: "disabled:opacity-20 disabled:pointer-events-none disabled:cursor-not-allowed",
    },
    isInGroup: {
      true: "[&:not(:first-child):not(:last-child)]:rounded-none data-[focus=true]:!ring-0 !w-max",
    },
    isIconOnly: {
      true: "!gap-unit-2",
      false: "[&>svg]:max-w-[theme(spacing.unit-4)]",
    },
    disableAnimation: {
      true: "!transition-none",
      false:
        // "data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none",
        "ease-out duration-300",
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
      color: "secondary",
      class: colorVariants.solid.secondary,
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
      color: "secondary",
      class: colorVariants.outline.secondary,
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
      color: "secondary",
      class: colorVariants.ghost.secondary,
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
      color: "secondary",
      class: colorVariants.rounded.secondary,
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
      class: "rounded-none first:!rounded-s-none last:!rounded-e-none",
    },
    {
      isInGroup: true,
      radius: "sm",
      class: "rounded-none first:!rounded-s-sm last:!rounded-e-sm",
    },
    {
      isInGroup: true,
      radius: "md",
      class: "rounded-none first:!rounded-s-md last:!rounded-e-md",
    },
    {
      isInGroup: true,
      radius: "lg",
      class: "rounded-none first:!rounded-s-lg last:!rounded-e-lg",
    },
    {
      isInGroup: true,
      radius: "xl",
      class: "rounded-none first:!rounded-s-xl last:!rounded-e-xl",
    },
    {
      isInGroup: true,
      radius: "full",
      class: "rounded-none first:!rounded-s-full last:!rounded-e-full",
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

    // Is in group
    {
      isInGroup: true,
      size: "sm",
      class: "!px-2 gap-2",
    },
    {
      isInGroup: true,
      size: "md",
      class: "!px-3 gap-2",
    },
    {
      isInGroup: true,
      size: "lg",
      class: "!px-4 gap-2",
    },
    {
      isInGroup: true,
      size: "xl",
      class: "!px-6 gap-2",
    },

    // Icon Button
    {
      isIconOnly: false,
      size: "sm",
      class: "px-3 min-w-12 py-2 text-[12px] leading-4 gap-2",
    },
    {
      isIconOnly: false,
      size: "md",
      class: "px-3 min-w-16 py-2 text-[14px] leading-5 gap-2",
    },
    {
      isIconOnly: false,
      size: "lg",
      class: "px-4 min-w-20 py-2.5 text-[14px] leading-5 gap-2",
    },
    {
      isIconOnly: false,
      size: "xl",
      class: "px-6 min-w-24 py-3.5 text-[16px] leading-5 gap-3",
    },

    {
      isIconOnly: true,
      size: "sm",
      class: "text-md min-w-unit-7 min-h-unit-7",
    },
    {
      isIconOnly: true,
      size: "md",
      class: "!text-xl min-w-unit-8 min-h-unit-8",
    },
    {
      isIconOnly: true,
      size: "lg",
      class: "!text-xl min-w-unit-10 min-h-unit-10",
    },
    {
      isIconOnly: true,
      size: "xl",
      class: "!text-xl min-w-unit-12 min-h-unit-12",
    },
    {
      isLoading: true,
      size: "sm",
      class: "!text-lg min-w-unit-7 min-h-unit-7",
    },
    {
      isLoading: true,
      size: "md",
      class: "!text-xl min-w-unit-8 min-h-unit-8",
    },
    {
      isLoading: true,
      size: "lg",
      class: "!text-xl min-w-unit-10 min-h-unit-10",
    },
    {
      isLoading: true,
      size: "xl",
      class: "!text-xl min-w-unit-12 min-h-unit-12",
    },

    // variant / hover 👆
    //   primary
    {
      variant: "solid",
      color: "primary",
      class: "bg-brand-700 data-[hover=true]:bg-brand-800",
    },
    //   danger
    {
      variant: "solid",
      color: "danger",
      class: "data-[hover=true]:bg-danger-400",
    },
    //   warning
    {
      variant: "solid",
      color: "warning",
      class: "data-[hover=true]:bg-warning-400",
    },
    //   success
    {
      variant: "solid",
      color: "success",
      class: "data-[hover=true]:bg-success-400",
    },
    //   white
    {
      variant: "solid",
      color: "white",
      class:
        "data-[hover=true]:bg-brand-500 data-[hover=true]:border-brand-500 data-[hover=true]:text-white",
    },
    //   secondary
    {
      variant: "solid",
      color: "secondary",
      class:
        "data-[hover=true]:bg-neutral-300 data-[hover=true]:border-neutral-300 data-[hover=true]:text-neutral-700",
    },
    //   transparent
    {
      variant: "solid",
      color: "transparent",
      class: "data-[hover=true]:bg-brand-50 data-[hover=true]:border-brand-50",
    },

    //   primary
    {
      variant: ["outline"],
      color: "primary",
      class:
        "data-[hover=true]:bg-brand data-[hover=true]:border-brand data-[hover=true]:text-white",
    },
    //   danger
    {
      variant: ["outline"],
      color: "danger",
      class:
        "data-[hover=true]:bg-danger-400 data-[hover=true]:border-danger-400 data-[hover=true]:text-white",
    },
    //   warning
    {
      variant: ["outline"],
      color: "warning",
      class:
        "data-[hover=true]:bg-warning-500 data-[hover=true]:border-warning-500 data-[hover=true]:text-white",
    },
    //   success
    {
      variant: ["outline"],
      color: "success",
      class:
        "data-[hover=true]:bg-success-500 data-[hover=true]:border-success-500 data-[hover=true]:text-white",
    },
    //   white
    {
      variant: ["outline"],
      color: "white",
      class:
        "data-[hover=true]:bg-white-50a data-[hover=true]:border-white data-[hover=true]:text-white",
    },
    //   secondary
    {
      variant: ["outline"],
      color: "secondary",
      class:
        "data-[hover=true]:bg-neutral-300 data-[hover=true]:border-neutral-300 data-[hover=true]:text-black",
    },
    //   transparent
    {
      variant: ["outline"],
      color: "transparent",
      class:
        "text-neutral-800 data-[hover=true]:bg-brand-50 data-[hover=true]:border-brand-50 data-[hover=true]:text-brand  data-[hover=true]:border-brand",
    },

    //   primary
    {
      variant: "ghost",
      color: "primary",
      class: "data-[hover=true]:text-brand-900",
    },
    //   danger
    {
      variant: "ghost",
      color: "danger",
      class: "data-[hover=true]:text-danger-900",
    },
    //   warning
    {
      variant: "ghost",
      color: "warning",
      class: "data-[hover=true]:text-warning-900",
    },
    //   success
    {
      variant: "ghost",
      color: "success",
      class: "data-[hover=true]:text-success-900",
    },
    //   white
    {
      variant: "ghost",
      color: "white",
      class: "data-[hover=true]:text-neutral-400",
    },
    //   secondary
    {
      variant: "ghost",
      color: "secondary",
      class: "data-[hover=true]:text-brand-800",
    },
    //   transparent
    {
      variant: "ghost",
      color: "transparent",
      class:
        "data-[hover=true]:text-brand-900 data-[hover=true]:bg-brand-50 data-[hover=true]:border-brand-50",
    },

    //   primary
    {
      isIconOnly: true,
      color: "primary",
      class: "data-[hover=true]:bg-brand-500 data-[hover=true]:text-white",
    },
    //   danger
    {
      isIconOnly: true,
      color: "danger",
      class: "data-[hover=true]:bg-danger-200 data-[hover=true]:text-white",
    },
    //   warning
    {
      isIconOnly: true,
      color: "warning",
      class: "data-[hover=true]:bg-warning-200 data-[hover=true]:text-white",
    },
    //   success
    {
      isIconOnly: true,
      color: "success",
      class: "data-[hover=true]:bg-success-400 data-[hover=true]:text-white",
    },
    //   white
    {
      isIconOnly: true,
      color: "white",
      class:
        "data-[hover=true]:bg-white-5a data-[hover=true]:border-white data-[hover=true]:text-black",
    },
    //   secondary
    {
      isIconOnly: true,
      color: "secondary",
      class: "data-[hover=true]:bg-neutral-200 data-[hover=true]:text-black",
    },
    //   transparent
    {
      isIconOnly: true,
      color: "transparent",
      class: "data-[hover=true]:bg-neutral-800 data-[hover=true]:text-white",
    },

    // variant / focus 🎯
    //   primary
    {
      variant: "solid",
      color: "primary",
      class:
        "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-brand-900 data-[focus=true]:ring-brand/60",
    },
    //   danger
    {
      variant: "solid",
      color: "danger",
      class:
        "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-danger-600 data-[focus=true]:ring-danger/60",
    },
    //   warning
    {
      variant: "solid",
      color: "warning",
      class:
        "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-warning-600 data-[focus=true]:ring-warning/60",
    },
    //   success
    {
      variant: "solid",
      color: "success",
      class:
        "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-success-600 data-[focus=true]:ring-success/60",
    },
    //   white
    {
      variant: "solid",
      color: "white",
      class:
        "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-brand-800 data-[focus=true]:border-brand-800 data-[focus=true]:ring-brand/60 data-[focus=true]:text-white",
    },
    //   secondary
    {
      variant: "solid",
      color: "secondary",
      class:
        "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:ring-neutral-200 data-[focus=true]:bg-neutral-400 data-[focus=true]:border-neutral-400",
    },
    //   transparent
    {
      variant: "solid",
      color: "transparent",
      class:
        "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:ring-white-20a data-[focus=true]:bg-brand-200 data-[focus=true]:border-brand-200",
    },

    //   primary
    {
      variant: ["outline"],
      color: "primary",
      class:
        "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-brand-900 data-[focus=true]:border-brand-800 data-[focus=true]:ring-brand/60 data-[focus=true]:text-white",
    },
    //   danger
    {
      variant: ["outline"],
      color: "danger",
      class:
        "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-danger-600 data-[focus=true]:border-danger-600 data-[focus=true]:text-white data-[focus=true]:ring-danger/60",
    },
    //   warning
    {
      variant: ["outline"],
      color: "warning",
      class:
        "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-warning-600 data-[focus=true]:border-warning-600 data-[focus=true]:text-white data-[focus=true]:ring-warning/60",
    },
    //   success
    {
      variant: ["outline"],
      color: "success",
      class:
        "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-success-600 data-[focus=true]:border-success-600 data-[focus=true]:text-white data-[focus=true]:ring-success/60",
    },
    //   white
    {
      variant: ["outline"],
      color: "white",
      class: "data-[focus=true]:outline-none",
    },
    //   secondary
    {
      variant: ["outline"],
      color: "secondary",
      class:
        "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-neutral-400 data-[focus=true]:border-neutral-400 data-[focus=true]:text-neutral-800 data-[focus=true]:ring-transparent",
    },
    //   transparent
    {
      variant: ["outline"],
      color: "transparent",
      class:
        "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-brand-200 data-[focus=true]:border-brand data-[focus=true]:text-brand dark:ring-brand/60",
    },

    //   primary
    {
      variant: "ghost",
      color: "primary",
      class:
        "data-[focus=true]:ring-1 data-[focus=true]:bg-brand-50 data-[focus=true]:border-brand-50 data-[focus=true]:text-brand-900 data-[focus=true]:ring-brand-50",
    },
    //   danger
    {
      variant: "ghost",
      color: "danger",
      class:
        "data-[focus=true]:ring-1 data-[focus=true]:bg-danger-50 data-[focus=true]:border-danger-50 data-[focus=true]:text-danger-900 data-[focus=true]:ring-danger-50",
    },
    //   warning
    {
      variant: "ghost",
      color: "warning",
      class:
        "data-[focus=true]:ring-1 data-[focus=true]:bg-warning-50 data-[focus=true]:border-danger-50 data-[focus=true]:text-warning-900 data-[focus=true]:ring-warning-50",
    },
    //   success
    {
      variant: "ghost",
      color: "success",
      class:
        "data-[focus=true]:ring-1 data-[focus=true]:bg-success-50 data-[focus=true]:border-success-50 data-[focus=true]:text-success-900 data-[focus=true]:ring-success-50",
    },
    //   white
    {
      variant: "ghost",
      color: "white",
      class: "data-[focus=true]:text-neutral-400",
    },
    //   secondary
    {
      variant: "ghost",
      color: "secondary",
      class:
        "data-[focus=true]:ring-1 data-[focus=true]:bg-none data-[focus=true]:border-transparent data-[focus=true]:text-brand-900 data-[focus=true]:bg-transparent data-[focus=true]:ring-black-10a",
    },
    //   transparent
    {
      variant: "ghost",
      color: "transparent",
      class:
        "data-[focus=true]:ring-1 data-[focus=true]:bg-brand-200 data-[focus=true]:border-brand-200 data-[focus=true]:text-brand-900 data-[focus=true]:ring-brand-50",
    },

    //   primary
    {
      isIconOnly: true,
      color: "primary",
      class:
        "border-transparent text-brand-800 h-max data-[hover=true]:bg-brand-800 data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-brand-900 data-[focus=true]:border-brand-900 data-[focus=true]:ring-brand/60 data-[focus=true]:text-white",
    },
    //   danger
    {
      isIconOnly: true,
      color: "danger",
      class:
        "border-transparent text-danger-600 h-max data-[hover=true]:bg-danger-200 data-[hover=true]:border-danger-200 data-[hover=true]:text-danger-600 data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:!bg-danger-200 data-[focus=true]:!border-danger-200 data-[focus=true]:ring-danger-20a data-[focus=true]:!text-danger-600",
    },
    //   warning
    {
      isIconOnly: true,
      color: "warning",
      class:
        "border-transparent text-warning-600 h-max data-[hover=true]:bg-warning-200 data-[hover=true]:border-warning-200 data-[hover=true]:text-warning-600 data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:!bg-warning-200 data-[focus=true]:!border-warning-200 data-[focus=true]:ring-warning-20a data-[focus=true]:!text-warning-600",
    },
    //   success
    {
      isIconOnly: true,
      color: "success",
      class:
        "border-transparent text-success-600 h-max data-[hover=true]:bg-success-200 data-[hover=true]:border-success-200 data-[hover=true]:text-success-600 data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:!bg-success-200 data-[focus=true]:!border-success-200 data-[focus=true]:ring-success-20a data-[focus=true]:!text-success-600",
    },
    //   white
    {
      isIconOnly: true,
      color: "white",
      class:
        "data-[hover=true]:bg-white-50a data-[hover=true]:border-white data-[hover=true]:text-white",
    },
    //   secondary
    {
      isIconOnly: true,
      color: "secondary",
      class:
        "data-[hover=true]:bg-neutral-200 data-[hover=true]:border-neutral-300 data-[hover=true]:text-black",
    },
    //   transparent
    {
      isIconOnly: true,
      color: "transparent",
      class: "data-[hover=true]:bg-transparent data-[hover=true]:text-brand",
    },

    //   primary
    {
      isIconOnly: true,
      color: "primary",
      class:
        "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-brand-800 data-[focus=true]:border-brand-800 data-[focus=true]:ring-brand/60 data-[focus=true]:text-white",
    },
    //   danger
    {
      isIconOnly: true,
      color: "danger",
      class:
        "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-danger-800 data-[focus=true]:border-danger-800 data-[focus=true]:text-white data-[focus=true]:ring-danger/60",
    },
    //   warning
    {
      isIconOnly: true,
      color: "warning",
      class:
        "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-warning-800 data-[focus=true]:border-warning-800 data-[focus=true]:text-white data-[focus=true]:ring-warning/60",
    },
    //   success
    {
      isIconOnly: true,
      color: "success",
      class:
        "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-success-800 data-[focus=true]:border-success-800 data-[focus=true]:text-white data-[focus=true]:ring-success/60",
    },
    //   white
    {
      isIconOnly: true,
      color: "white",
      class: "data-[focus=true]:outline-none",
    },
    //   secondary
    {
      isIconOnly: true,
      color: "secondary",
      class:
        "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-neutral-300 data-[focus=true]:border-neutral-300 data-[focus=true]:text-neutral-800 data-[focus=true]:ring-transparent",
    },
    //   transparent
    {
      isIconOnly: true,
      color: "transparent",
      class:
        "data-[focus=true]:outline-none data-[focus=true]:ring-1 data-[focus=true]:bg-brand-200 data-[focus=true]:border-brand data-[focus=true]:text-brand dark:ring-brand/60",
    },
  ],
});

// size: {
//   sm: "px-3 h-8 text-sm",
//   md: "px-4 h-10 text-md",
//   lg: "px-6 h-12 text-md",
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
