import type {VariantProps} from "tailwind-variants";

import {tv} from "../utils/tv";
import {ringClasses, colorVariants} from "../utils";

/**
 * Chip wrapper **Tailwind Variants** component
 *
 * @example
 * ```js
 * const {base, content, dot, avatar, closeButton} = chip({...})
 *
 * <div className={base())}>
 *    // left content
 *   <span className={avatar()}/>
 *   <svg className={dot()}/>
 *   <span className={content()}>Default</span>
 *   <svg className={closeButton()}>close button</svg>
 *    // right content
 * </div>
 * ```
 */
const chip = tv({
  slots: {
    base: [
      "relative",
      "max-w-fit",
      "inline-flex",
      "items-center",
      "justify-between",
      "box-border",
      "whitespace-nowrap",
    ],
    content: "flex-1 text-inherit font-normal",
    dot: ["w-2", "h-2", "ml-1", "rounded-full"],
    avatar: "flex-shrink-0",
    closeButton: [
      "z-10",
      "appearance-none",
      "outline-none",
      "select-none",
      "transition-opacity",
      "opacity-70",
      "hover:opacity-100",
      "cursor-pointer",
      "active:opacity-disabled",
      "tap-highlight-transparent",
    ],
  },
  variants: {
    variant: {
      solid: {},
      soft: {},
      outline: {
        base: "border-1 bg-transparent",
      },
      white: {},
    },
    color: {
      primary: {
        dot: "bg-primary",
      },
      success: {
        dot: "bg-success",
      },
      warning: {
        dot: "bg-warning",
      },
      danger: {
        dot: "bg-danger",
      },
      transparent: {
        dot: "bg-transparent",
      },
      white: {
        dot: "bg-white",
      },
      basic: {
        dot: "bg-neutral",
      },
    },
    size: {
      sm: {
        base: "px-1 h-6 text-xs",
        content: "px-1",
        closeButton: "text-md",
        avatar: "w-4 h-4",
      },
      md: {
        base: "px-1 h-7 text-sm",
        content: "px-2",
        closeButton: "text-lg",
        avatar: "w-5 h-5",
      },
      lg: {
        base: "px-2 h-8 text-lg",
        content: "px-2",
        closeButton: "text-xl",
        avatar: "w-6 h-6",
      },
    },
    radius: {
      none: {
        base: "rounded-none",
      },
      sm: {
        base: "rounded-sm",
      },
      md: {
        base: "rounded-md",
      },
      lg: {
        base: "rounded-lg",
      },
      full: {
        base: "rounded-full",
      },
    },
    isOneChar: {
      true: {},
      false: {},
    },
    isCloseable: {
      true: {},
      false: {},
    },
    hasStartContent: {
      true: {},
    },
    hasEndContent: {
      true: {},
    },
    isDisabled: {
      true: {base: "opacity-disabled pointer-events-none"},
    },
    isCloseButtonFocusVisible: {
      true: {
        closeButton: [...ringClasses, "ring-1", "rounded-full"],
      },
    },
  },
  defaultVariants: {
    variant: "solid",
    color: "primary",
    size: "md",
    radius: "full",
    isDisabled: false,
  },
  compoundVariants: [
    // solid / color
    {
      variant: "solid",
      color: "primary",
      class: {
        base: colorVariants.solid.primary,
      },
    },
    {
      variant: "solid",
      color: "success",
      class: {
        base: colorVariants.solid.success,
      },
    },
    {
      variant: "solid",
      color: "warning",
      class: {
        base: colorVariants.solid.warning,
      },
    },
    {
      variant: "solid",
      color: "danger",
      class: {
        base: colorVariants.solid.danger,
      },
    },
    {
      variant: "solid",
      color: "transparent",
      class: {
        base: colorVariants.solid.transparent,
      },
    },
    {
      variant: "solid",
      color: "white",
      class: {
        base: colorVariants.solid.white,
      },
    },
    {
      variant: "solid",
      color: "basic",
      class: {
        base: colorVariants.solid.basic,
      },
    },
    // bordered / color
    {
      variant: "outline",
      color: "primary",
      class: {
        base: ["bg-brand-100", colorVariants.outline.primary],
      },
    },
    {
      variant: "outline",
      color: "success",
      class: {
        base: ["bg-success-100", colorVariants.outline.success],
      },
    },
    {
      variant: "outline",
      color: "warning",
      class: {
        base: ["bg-warning-100", colorVariants.outline.warning],
      },
    },
    {
      variant: "outline",
      color: "danger",
      class: {
        base: ["bg-danger-100", colorVariants.outline.danger],
      },
    },
    {
      variant: "outline",
      color: "transparent",
      class: {
        base: colorVariants.outline.transparent,
      },
    },
    {
      variant: "outline",
      color: "white",
      class: {
        base: ["bg-white-100", colorVariants.outline.white],
      },
    },
    {
      variant: "outline",
      color: "basic",
      class: {
        base: ["bg-neutral-100", colorVariants.outline.basic],
      },
    },
    // soft
    {
      variant: "soft",
      color: "primary",
      class: {
        base: colorVariants.soft.primary,
      },
    },
    {
      variant: "soft",
      color: "success",
      class: {
        base: colorVariants.soft.success,
      },
    },
    {
      variant: "soft",
      color: "warning",
      class: {
        base: colorVariants.soft.warning,
      },
    },
    {
      variant: "soft",
      color: "danger",
      class: {
        base: colorVariants.soft.danger,
      },
    },
    {
      variant: "soft",
      color: "transparent",
      class: {
        base: colorVariants.soft.transparent,
      },
    },
    {
      variant: "soft",
      color: "white",
      class: {
        base: colorVariants.soft.white,
      },
    },
    {
      variant: "soft",
      color: "basic",
      class: {
        base: colorVariants.soft.basic,
      },
    },
    // white
    {
      variant: "white",
      color: "primary",
      class: {
        base: colorVariants.white.primary,
      },
    },
    {
      variant: "white",
      color: "success",
      class: {
        base: colorVariants.white.success,
      },
    },
    {
      variant: "white",
      color: "warning",
      class: {
        base: colorVariants.white.warning,
      },
    },
    {
      variant: "white",
      color: "danger",
      class: {
        base: colorVariants.white.danger,
      },
    },
    {
      variant: "white",
      color: "transparent",
      class: {
        base: colorVariants.white.transparent,
      },
    },
    {
      variant: "white",
      color: "white",
      class: {
        base: colorVariants.white.white,
      },
    },
    {
      variant: "white",
      color: "basic",
      class: {
        base: colorVariants.white.basic,
      },
    },
    // isOneChar / size
    {
      isOneChar: true,
      size: "sm",
      class: {
        base: "w-5 h-5 min-w-unit-5 min-h-5",
      },
    },
    {
      isOneChar: true,
      size: "md",
      class: {
        base: "w-6 h-6 min-w-unit-6 min-h-6",
      },
    },
    {
      isOneChar: true,
      size: "lg",
      class: {
        base: "w-7 h-7 min-w-unit-7 min-h-7",
      },
    },
    // isOneChar / isCloseable
    {
      isOneChar: true,
      isCloseable: false,
      class: {
        base: "px-0 justify-center",
        content: "px-0 flex-none",
      },
    },
    {
      isOneChar: true,
      isCloseable: true,
      class: {
        base: "w-auto",
      },
    },
    // hasStartContent / size
    {
      hasStartContent: true,
      size: "sm",
      class: {
        content: "pl-0.5",
      },
    },
    {
      hasStartContent: true,
      size: ["md", "lg"],
      class: {
        content: "pl-1",
      },
    },
    // hasEndContent / size
    {
      hasEndContent: true,
      size: "sm",
      class: {
        content: "pr-0.5",
      },
    },
    {
      hasEndContent: true,
      size: ["md", "lg"],
      class: {
        content: "pr-1",
      },
    },
  ],
});

export type ChipVariantProps = VariantProps<typeof chip>;
export type ChipSlots = keyof ReturnType<typeof chip>;

export {chip};

// calculated classNames
// src/components/chip/src/use-chip
// max-h-[80%]
