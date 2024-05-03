import type {VariantProps} from "tailwind-variants";

import {dataFocusVisibleClasses} from "../utils";
import {tv} from "../utils/tv";

/**
 * BreadcrumbsItem wrapper **Tailwind Variants** component
 *
 * const { base, item, separator } = breadcrumbItem({...})
 *
 * @example
 */
const breadcrumbItem = tv({
  slots: {
    base: "flex items-center",
    item: [
      "flex gap-1 items-center justify-center",
      "cursor-pointer",
      "whitespace-nowrap",
      "line-clamp-1",
      "outline-none",
      "tap-highlight-transparent",
      "rounded-md",
      // focus ring
      ...dataFocusVisibleClasses,
    ],
    separator: "text-neutral-800 px-1",
  },
  variants: {
    color: {
      primary: {
        item: "text-neutral",
        separator: "",
      },
      success: {
        item: "text-neutral",
        separator: "",
      },
      warning: {
        item: "text-neutral",
        separator: "",
      },
      danger: {
        item: "text-neutral",
        separator: "",
      },
    },
    size: {
      sm: {
        item: "text-xs !px-2 !py-1 !min-h-7 !min-w-7",
      },
      md: {
        item: "text-sm !px-2 !py-1 !min-h-8 !min-w-8",
      },
      lg: {
        item: "text-md !px-2 !py-1 !min-h-8 !min-w-8",
      },
    },
    underline: {
      none: {
        item: "no-underline",
      },
      hover: {
        item: "hover:underline",
      },
      always: {
        item: "underline",
      },
      active: {
        item: "active:underline",
      },
      focus: {
        item: "focus:underline",
      },
    },
    isCurrent: {
      true: {
        item: "cursor-default",
      },
      false: {
        item: ["hover:opacity-80", "active:opacity-disabled"],
      },
    },
    isDisabled: {
      true: {
        item: "opacity-disabled pointer-events-none",
        separator: "opacity-disabled",
      },
    },
    disableAnimation: {
      false: {
        item: "!ease-out !duration-300",
      },
      true: {
        item: "transition-none",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    underline: "none",
    isDisabled: false,
    disableAnimation: false,
  },
  compoundVariants: [
    // isCurrent && color
    {
      isCurrent: true,
      color: "primary",
      class: {
        item: "text-neutral",
      },
    },
    {
      isCurrent: true,
      color: "success",
      class: {
        item: "text-neutral",
      },
    },
    {
      isCurrent: true,
      color: "warning",
      class: {
        item: "text-neutral",
      },
    },
    {
      isCurrent: true,
      color: "danger",
      class: {
        item: "text-neutral",
      },
    },
    // !isCurrent && underline
    {
      isCurrent: false,
      underline: "none",
      class: {
        item: "no-underline",
      },
    },
    {
      isCurrent: false,
      color: "primary",
      class: {
        item: "hover:text-white text-brand hover:bg-brand-700",
      },
    },
    {
      isCurrent: false,
      color: "success",
      class: {
        item: "hover:text-white text-success hover:bg-success-700",
      },
    },
    {
      isCurrent: false,
      color: "warning",
      class: {
        item: "hover:text-white text-warning hover:bg-warning-700",
      },
    },
    {
      isCurrent: false,
      color: "danger",
      class: {
        item: "hover:text-white text-danger hover:bg-danger-700",
      },
    },
    // !isCurrent && underline
    {
      isCurrent: false,
      underline: "none",
      class: {
        item: "no-underline",
      },
    },
    // Underline
    {
      underline: ["hover", "always", "active", "focus"],
      class: "underline-offset-4",
    },
  ],
});

/**
 * Breadcrumbs wrapper **Tailwind Variants** component
 *
 * const { base, list, ellipsis, separator } = breadcrumbs({...})
 *
 * @example
 */
const breadcrumbs = tv({
  slots: {
    base: "",
    list: "flex flex-wrap list-none",
    ellipsis: "text-neutral-800",
    separator: "text-neutral-800 px-1",
  },
  variants: {
    size: {
      sm: {},
      md: {},
      lg: {},
    },
    radius: {
      none: {
        list: "rounded-none",
      },
      sm: {
        list: "rounded-sm",
      },
      md: {
        list: "rounded-md",
      },
      lg: {
        list: "rounded-lg",
      },
      full: {
        list: "rounded-full",
      },
    },
    variant: {
      solid: {
        list: "bg-neutral-100",
      },
      bordered: {
        list: "border border-neutral-300",
      },
      default: "",
    },
  },
  defaultVariants: {
    size: "md",
    radius: "sm",
    variant: "default",
  },
  compoundVariants: [
    // variant
    {
      variant: ["solid", "bordered"],
      class: {
        list: "max-w-fit",
      },
    },
    // variant={solid,bordered} && size
    {
      variant: ["solid", "bordered"],
      size: "sm",
      class: {
        list: "px-2 py-1",
      },
    },
    {
      variant: ["solid", "bordered"],
      size: "md",
      class: {
        list: "px-2.5 py-1.5",
      },
    },
    {
      variant: ["solid", "bordered"],
      size: "lg",
      class: {
        list: "px-3 py-2",
      },
    },
  ],
});

export type BreadcrumbsVariantProps = VariantProps<typeof breadcrumbs>;
export type BreadcrumbsSlots = keyof ReturnType<typeof breadcrumbs>;
export type BreadcrumbItemVariantProps = VariantProps<typeof breadcrumbItem>;
export type BreadcrumbItemSlots = keyof ReturnType<typeof breadcrumbItem>;

export {breadcrumbs, breadcrumbItem};
