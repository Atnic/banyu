import type {VariantProps} from "tailwind-variants";

import {tv} from "../utils/tv";
import {colorVariants, dataFocusVisibleClasses} from "../utils";

/**
 * Pagination wrapper **Tailwind Variants** component
 *
 * const {base,cursor, prev, next, item } = pagination({...})
 *
 * @example
 * <ul className={base()} aria-label="pagination navigation">
 *    <li className={cursor()} aria-hidden="true">{active page}</li> // this marks the active page
 *    <li role="button" className={prev()} aria-label="Go to previous page" data-disabled="true">Prev</li>
 *    <li role="button" className={item()} aria-label="page 1" data-active="true">1</li>
 *    <li role="button" className={item()} aria-label="page 2">2</li>
 *    <li role="button" className={item()} aria-hidden="true">...</li>
 *    <li role="button" className={item()} aria-label="page 10">10</li>
 *    <li role="button" className={next()} aria-label="Go to next page">Next</li>
 *  </ul>
 */
const pagination = tv(
  {
    slots: {
      base: ["p-2.5", "-m-2.5", "overflow-x-scroll", "scrollbar-hide"],
      wrapper: [
        "flex",
        "flex-nowrap",
        "h-fit",
        "max-w-fit",
        "relative",
        "gap-1",
        "items-center",
        "overflow-visible",
      ],
      item: ["tap-highlight-transparent", "select-none", "touch-none"],
      prev: "text-danger",
      next: "text-success",
      cursor: [
        "absolute",
        "flex",
        "overflow-visible",
        "items-center",
        "justify-center",
        "origin-center",
        "left-0",
        "select-none",
        "touch-none",
        "pointer-events-none",
        "z-20",
      ],
      forwardIcon:
        "hidden group-hover:block group-data-[focus-visible=true]:block data-[before=true]:rotate-180",
      ellipsis: "",
      chevron: "",
    },
    variants: {
      variant: {
        default: {
          item: "",
        },
      },
      color: {
        primary: {
          cursor: colorVariants.solid.primary,
        },
        success: {
          cursor: colorVariants.solid.success,
        },
        warning: {
          cursor: colorVariants.solid.warning,
        },
        danger: {
          cursor: colorVariants.solid.danger,
        },
        white: {
          cursor: colorVariants.solid.white,
        },
        basic: {
          cursor: "bg-neutral-200 text-neutral-800",
        },
        transparent: {
          cursor: colorVariants.solid.transparent,
        },
      },
      size: {
        sm: {},
        md: {},
        lg: {},
      },
      radius: {
        none: {},
        sm: {},
        md: {},
        lg: {},
        full: {},
      },
      isCompact: {
        true: {
          wrapper: "gap-0 bg-white shadow-sm",
          item: [
            "shadow-none",
            "first-of-type:rounded-r-none",
            "last-of-type:rounded-l-none",
            "[&:not(:first-of-type):not(:last-of-type)]:rounded-none",
          ],
          prev: "!rounded-r-none",
          next: "!rounded-l-none",
        },
      },
      isDisabled: {
        true: {
          base: "opacity-disabled pointer-events-none",
        },
      },
      showShadow: {
        true: {},
      },
      disableCursorAnimation: {
        true: {
          cursor: "hidden",
        },
      },
      disableAnimation: {
        true: {
          item: "transition-none",
          cursor: "transition-none",
        },
        false: {
          item: ["data-[pressed=true]:scale-[0.97]", "transition-transform-background"],
          cursor: [
            "data-[moving=true]:transition-transform",
            "!data-[moving=true]:duration-300",
            // this hides the cursor and only shows it once it has been moved to its initial position
            "opacity-0",
            "data-[moving]:opacity-100",
          ],
        },
      },
    },
    defaultVariants: {
      variant: "default",
      color: "basic",
      size: "md",
      radius: "md",
      isCompact: false,
      isDisabled: false,
      showShadow: false,
      disableAnimation: false,
      disableCursorAnimation: false,
    },
    compoundVariants: [
      // showShadow / color
      {
        showShadow: true,
        color: "primary",
        class: {
          cursor: [colorVariants.shadow.primary, "shadow-md"],
        },
      },
      {
        showShadow: true,
        color: "success",
        class: {
          cursor: [colorVariants.shadow.success, "shadow-md"],
        },
      },
      {
        showShadow: true,
        color: "warning",
        class: {
          cursor: [colorVariants.shadow.warning, "shadow-md"],
        },
      },
      {
        showShadow: true,
        color: "danger",
        class: {
          cursor: [colorVariants.shadow.danger, "shadow-md"],
        },
      },
      {
        showShadow: true,
        color: "transparent",
        class: {
          cursor: [colorVariants.shadow.transparent, "shadow-md"],
        },
      },
      {
        showShadow: true,
        color: "white",
        class: {
          cursor: [colorVariants.shadow.white, "shadow-md"],
        },
      },
      {
        showShadow: true,
        color: "basic",
        class: {
          cursor: [colorVariants.shadow.basic, "shadow-md"],
        },
      },

      /**
       * --------------------------------------------------------
       * disableCursorAnimation
       * the classNames will be applied to the active item
       * --------------------------------------------------------
       */
      // disableCursorAnimation / color
      {
        disableCursorAnimation: true,
        color: "primary",
        class: {
          item: [
            "data-[active=true]:bg-primary",
            "data-[active=true]:border-primary",
            "data-[active=true]:text-primary-foreground",
          ],
        },
      },
      {
        disableCursorAnimation: true,
        color: "success",
        class: {
          item: [
            "data-[active=true]:bg-success",
            "data-[active=true]:border-success",
            "data-[active=true]:text-success-foreground",
          ],
        },
      },
      {
        disableCursorAnimation: true,
        color: "warning",
        class: {
          item: [
            "data-[active=true]:bg-warning",
            "data-[active=true]:border-warning",
            "data-[active=true]:text-warning-foreground",
          ],
        },
      },
      {
        disableCursorAnimation: true,
        color: "danger",
        class: {
          item: [
            "data-[active=true]:bg-danger",
            "data-[active=true]:border-danger",
            "data-[active=true]:text-danger-foreground",
          ],
        },
      },
      {
        disableCursorAnimation: true,
        color: "transparent",
        class: {
          item: [
            "data-[active=true]:bg-transparent",
            "data-[active=true]:border-transparent",
            "data-[active=true]:text-neutral-800",
          ],
        },
      },
      {
        disableCursorAnimation: true,
        color: "white",
        class: {
          item: [
            "data-[active=true]:bg-white",
            "data-[active=true]:border-white",
            "data-[active=true]:text-neutral-800",
          ],
        },
      },
      {
        disableCursorAnimation: true,
        color: "basic",
        class: {
          item: [
            "data-[active=true]:bg-neutral-50",
            "data-[active=true]:border-neutral",
            "data-[active=true]:text-neutral-800",
          ],
        },
      },

      // shadow / color
      {
        disableCursorAnimation: true,
        showShadow: true,
        color: "primary",
        class: {
          item: ["data-[active=true]:shadow-md", "data-[active=true]:shadow-primary/40"],
        },
      },
      {
        disableCursorAnimation: true,
        showShadow: true,
        color: "success",
        class: {
          item: ["data-[active=true]:shadow-md", "data-[active=true]:shadow-success/40"],
        },
      },
      {
        disableCursorAnimation: true,
        showShadow: true,
        color: "warning",
        class: {
          item: ["data-[active=true]:shadow-md", "data-[active=true]:shadow-warning/40"],
        },
      },
      {
        disableCursorAnimation: true,
        showShadow: true,
        color: "danger",
        class: {
          item: ["data-[active=true]:shadow-md", "data-[active=true]:shadow-danger/40"],
        },
      },
      {
        disableCursorAnimation: true,
        showShadow: true,
        color: "transparent",
        class: {
          item: ["data-[active=true]:shadow-md", "data-[active=true]:shadow-transparent/40"],
        },
      },
      {
        disableCursorAnimation: true,
        showShadow: true,
        color: "white",
        class: {
          item: ["data-[active=true]:shadow-md", "data-[active=true]:shadow-white/40"],
        },
      },
      {
        disableCursorAnimation: true,
        showShadow: true,
        color: "basic",
        class: {
          item: ["data-[active=true]:shadow-md", "data-[active=true]:shadow-neutral/40"],
        },
      },
    ],
    compoundSlots: [
      // without variant
      {
        slots: ["item", "prev", "next"],
        class: [
          "flex",
          "flex-wrap",
          "truncate",
          "box-border",
          "outline-none",
          "items-center",
          "justify-center",
          "text-default-foreground",
          "[&>svg]:data-[disabled=true]:text-neutral-300",
          "[&>svg]:text-neutral-800",
          // focus ring
          ...dataFocusVisibleClasses,
          // disabled
          "data-[disabled=true]:text-neutral-300",
          "data-[disabled=true]:pointer-events-none",
        ],
      },
      {
        slots: ["item", "prev", "next"],
        variant: "default",
        class: [
          "[&[data-hover=true]:not([data-active=true])]:bg-neutral-200",
          "[&[data-hover=true]:not([data-active=true])]:text-neutral-800",
          "active:bg-neutral-200",
        ],
      },
      // size
      {
        slots: ["item", "cursor", "prev", "next"],
        size: "sm",
        class: "min-w-8 w-8 h-8 text-tiny",
      },
      {
        slots: ["item", "cursor", "prev", "next"],
        size: "md",
        class: "min-w-9 w-9 h-9 text-sm",
      },
      {
        slots: ["item", "cursor", "prev", "next"],
        size: "lg",
        class: "min-w-10 w-10 h-10 text-md",
      },
      // radius
      {
        slots: ["wrapper", "item", "cursor", "prev", "next"],
        radius: "none",
        class: "rounded-none",
      },
      {
        slots: ["wrapper", "item", "cursor", "prev", "next"],
        radius: "sm",
        class: "rounded-sm",
      },
      {
        slots: ["wrapper", "item", "cursor", "prev", "next"],
        radius: "md",
        class: "rounded-md",
      },
      {
        slots: ["wrapper", "item", "cursor", "prev", "next"],
        radius: "lg",
        class: "rounded-lg",
      },
      {
        slots: ["wrapper", "item", "cursor", "prev", "next"],
        radius: "full",
        class: "rounded-full",
      },
    ],
  },
  // {twMerge: false},
);

export type PaginationVariantProps = VariantProps<typeof pagination>;
export type PaginationSlots = keyof ReturnType<typeof pagination>;

export {pagination};
