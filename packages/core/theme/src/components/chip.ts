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
      outline: {
        base: "border-medium bg-transparent",
      },
      light: {
        base: "bg-transparent",
      },
      flat: {},
      faded: {
        base: "border-medium",
      },
      shadow: {},
      dot: {
        base: "border-medium border-default text-foreground bg-transparent",
      },
    },
    color: {
      default: {
        dot: "bg-default-400",
      },
      primary: {
        dot: "bg-primary",
      },
      success: {
        dot: "bg-success",
      },
      warning: {
        dot: "bg-warning",
      },
      critical: {
        dot: "bg-critical",
      },
    },
    size: {
      sm: {
        base: "px-1 h-6 text-tiny",
        content: "px-1",
        closeButton: "text-medium",
        avatar: "w-4 h-4",
      },
      md: {
        base: "px-1 h-7 text-small",
        content: "px-2",
        closeButton: "text-large",
        avatar: "w-5 h-5",
      },
      lg: {
        base: "px-2 h-8 text-medium",
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
        base: "rounded-small",
      },
      md: {
        base: "rounded-medium",
      },
      lg: {
        base: "rounded-large",
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
    color: "default",
    size: "md",
    radius: "full",
    isDisabled: false,
  },
  compoundVariants: [
    // solid / color
    {
      variant: "solid",
      color: "default",
      class: {
        base: colorVariants.solid.primary,
      },
    },
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
      color: "critical",
      class: {
        base: colorVariants.solid.critical,
      },
    },
    // outline / color
    {
      variant: "outline",
      color: "primary",
      class: {
        base: colorVariants.outline.primary,
      },
    },
    {
      variant: "outline",
      color: "success",
      class: {
        base: colorVariants.outline.success,
      },
    },
    {
      variant: "outline",
      color: "warning",
      class: {
        base: colorVariants.outline.warning,
      },
    },
    {
      variant: "outline",
      color: "critical",
      class: {
        base: colorVariants.outline.critical,
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
