import type {VariantProps} from "tailwind-variants"

import {tv} from "../utils/tv"

/**
 * Snippet wrapper **Tailwind Variants** component
 *
 * const {base, content, pre, copy} = snippet({...})
 *
 * @example
 * <div className={base())}>
 *   <pre className={pre()}>
 *      // code snippet
 *      <div className={content()}>...</div>
 *   </pre>
 *   <button className={copy()}>
 *    <svg>
 *    // copy icon / check icon
 *    </svg>
 *  </button>
 * </div>
 */
const snippet = tv({
  slots: {
    base: "inline-flex items-center justify-between h-fit rounded-lg gap-2",
    pre: "bg-transparent text-inherit font-mono font-normal inline-block whitespace-nowrap",
    content: "flex flex-col",
    symbol: "select-none",
    copyButton: [
      "group",
      "relative",
      "z-10",
      "text-lg",
      "text-inherit",
      "data-[hover=true]:bg-transparent",
    ],
    copyIcon: [
      "absolute text-inherit opacity-100 scale-100 group-data-[copied=true]:opacity-0 group-data-[copied=true]:scale-50",
    ],
    checkIcon: [
      "absolute text-inherit opacity-0 scale-50 group-data-[copied=true]:opacity-100 group-data-[copied=true]:scale-100",
    ],
  },
  variants: {
    variant: {
      solid: "",
      outline: "border-md bg-transparent",
      ghost: "",
      soft: "",
      white: "",
      link: "",
    },
    color: {
      primary: {},
      success: {},
      warning: {},
      critical: {},
      transparent: {},
      basic: {},
      white: {},
    },
    size: {
      sm: {
        base: "px-1.5 py-0.5 text-xs rounded-sm",
      },
      md: {
        base: "px-3 py-1.5 text-sm rounded-md",
      },
      lg: {
        base: "px-4 py-2 text-md rounded-lg",
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
    },
    fullWidth: {
      true: {
        base: "w-full",
      },
    },
    disableAnimation: {
      true: {},
      false: {
        copyIcon: "transition-transform-opacity",
        checkIcon: "transition-transform-opacity",
      },
    },
  },
  defaultVariants: {
    color: "primary",
    variant: "solid",
    size: "md",
    fullWidth: false,
    disableAnimation: false,
  },
  compoundVariants: [
    // solid - shadow / color
    {
      variant: ["solid"],
      color: "primary",
      class: {
        copyButton: "data-[focus-visible]:outline-primary-foreground",
      },
    },
    {
      variant: ["solid"],
      color: "success",
      class: {
        copyButton: "data-[focus-visible]:outline-success-foreground",
      },
    },
    {
      variant: ["solid"],
      color: "warning",
      class: {
        copyButton: "data-[focus-visible]:outline-warning-foreground",
      },
    },
    {
      variant: ["solid"],
      color: "critical",
      class: {
        copyButton: "data-[focus-visible]:outline-danger-foreground",
      },
    },
  ],
})

export type SnippetVariantProps = VariantProps<typeof snippet>
export type SnippetSlots = keyof ReturnType<typeof snippet>

export {snippet}
