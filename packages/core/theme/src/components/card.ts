import type {VariantProps} from "tailwind-variants";

import {tv} from "../utils/tv";
import {dataFocusVisibleClasses} from "../utils";

/**
 * Card **Tailwind Variants** component
 *
 * @example
 * ```js
 * const {base, header, body, footer} = card({...})
 *
 * <div className={base()}>
 *    <div className={header()}>Header</div>
 *    <div className={body()}>Body</div>
 *    <div className={footer()}>Footer</div>
 * </div>
 * ```
 */
const card = tv({
  slots: {
    base: [
      "flex",
      "flex-col",
      "relative",
      "overflow-hidden",
      "height-auto",
      "outline-none",
      "text-foreground",
      "box-border",
      "bg-content1",
      "px-4 py-3",
      // focus ring
      ...dataFocusVisibleClasses,
    ],
    header: [
      "flex",
      "pb-3",
      "mb-2",
      "z-10",
      "w-full",
      "justify-start",
      "items-center",
      "shrink-0",
      "overflow-inherit",
      "color-inherit",
      "subpixel-antialiased",
    ],
    headerTitle: ["text-neutral-800", "font-semibold", "text-lg"],
    headerSubtitle: ["text-neutral-500", "text-sm"],
    body: [
      "relative",
      "flex",
      "flex-1",
      "w-full",
      "flex-auto",
      "flex-col",
      "place-content-inherit",
      "align-items-inherit",
      "h-auto",
      "break-words",
      "text-left",
      "overflow-y-auto",
      "subpixel-antialiased",
    ],
    footer: [
      "pt-3",
      "h-auto",
      "flex",
      "w-full",
      "mt-2",
      "items-center",
      "overflow-hidden",
      "color-inherit",
      "subpixel-antialiased",
    ],
  },
  variants: {
    shadow: {
      none: {
        base: "shadow-none",
      },
      sm: {
        base: "shadow-sm",
      },
      md: {
        base: "shadow-md",
      },
      lg: {
        base: "shadow-lg",
      },
    },
    radius: {
      none: {
        base: "rounded-none",
        header: "rounded-none",
        body: "rounded-none",
        footer: "rounded-none",
      },
      sm: {
        base: "rounded-sm",
        header: "rounded-t-sm",
        body: "rounded-none",
        footer: "rounded-b-sm",
      },
      md: {
        base: "rounded-md",
        header: "rounded-t-md",
        body: "rounded-md",
        footer: "rounded-b-md",
      },
      lg: {
        base: "rounded-lg",
        header: "rounded-t-lg",
        body: "rounded-lg",
        footer: "rounded-b-lg",
      },
    },
    contentFullWidth: {
      true: {
        base: "p-0",
        header: "px-4 py-3 mb-0",
        footer: "px-4 py-3 mt-0",
        body: "rounded-none",
      },
    },
    fullWidth: {
      true: {
        base: "w-full",
      },
    },
    isHoverable: {
      true: {
        base: "data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2",
      },
    },
    isPressable: {
      true: {base: "cursor-pointer"},
    },
    isBlurred: {
      true: {
        base: [
          "bg-background/80",
          "dark:bg-background/20",
          "backdrop-blur-md",
          "backdrop-saturate-150",
        ],
      },
    },
    isFooterBlurred: {
      true: {
        footer: ["bg-background/10", "backdrop-blur", "backdrop-saturate-150"],
      },
    },
    isDisabled: {
      true: {
        base: "opacity-disabled cursor-not-allowed",
      },
    },
    disableAnimation: {
      true: "",
      false: {base: "transition-transform-background motion-reduce:transition-none"},
    },
    withDivider: {
      true: {
        header: ["border-b", "border-neutral-200"],
        footer: ["border-t", "border-neutral-200"],
      },
      false: {},
    },
    paddingType: {
      inside: {
        base: "p-0",
        header: "px-4 py-3 mb-0",
        footer: "px-4 py-3 mt-0",
        body: "p-0 px-4 py-2",
      },
      outside: {},
    },
    footerPosition: {
      start: {
        footer: "justify-start",
      },
      center: {
        footer: "justify-center",
      },
      end: {
        footer: "justify-end",
      },
    },
  },
  compoundVariants: [
    {
      isPressable: true,
      disableAnimation: false,
      class: "data-[pressed=true]:scale-[0.97] tap-highlight-transparent",
    },
  ],
  defaultVariants: {
    radius: "lg",
    shadow: "md",
    fullWidth: false,
    contentFullWidth: false,
    isHoverable: false,
    isPressable: false,
    isDisabled: false,
    disableAnimation: false,
    isFooterBlurred: false,
    withDivider: true,
    paddingType: "inside",
    footerPosition: "end",
  },
});

export type CardVariantProps = VariantProps<typeof card>;
export type CardSlots = keyof ReturnType<typeof card>;
export type CardReturnType = ReturnType<typeof card>;

export {card};
