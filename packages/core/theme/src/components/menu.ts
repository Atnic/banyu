import type {VariantProps} from "tailwind-variants";

import {tv} from "../utils/tv";

/**
 * Menu wrapper **Tailwind Variants** component
 *
 * const classNames = menu({...})

 */
const menu = tv({
  slots: {
    base: "w-full relative flex flex-col gap-1 py-1",
    list: "w-full flex flex-col gap-0.5 outline-none",
    emptyContent: [
      "h-10",
      "px-2",
      "py-1.5",
      "w-full",
      "h-full",
      "text-foreground-400",
      "text-start",
    ],
  },
});

/**
 * MenuItem wrapper **Tailwind Variants** component
 *
 * const {base, heading, indicator, trigger, leftIndicator, title, subtitle, content } = menuItem({...})
 *
 * @example
 * <div className={base())} data-focus-visible={boolean} data-hover={boolean}>
 *   <div className={heading())}>
 *    <button className={trigger())}>
 *      <div className={leftIndicator()}>
 *         // content
 *      </div>
 *      <div className={titleWrapper()}>
 *        <h3 className={title())}>Title</h3>
 *        <span className={subtitle())}>Subtitle</span>
 *      </div>
 *      <span className={indicator())}>Indicator</span>
 *    </button>
 *  </div>
 *  <div className={content())}>Content</div>
 * </div>
 */
const menuItem = tv({
  slots: {
    base: [
      "flex",
      "group",
      "gap-2",
      "items-center",
      "justify-between",
      "relative",
      "px-4",
      "py-2",
      "w-full",
      "h-full",
      "box-border",
      // "rounded-sm",
      "subpixel-antialiased",
      "outline-none",
      "cursor-pointer",
      "text-neutral-800",
      // focus ring
      "tap-highlight-transparent",
      "outline-none",
      "data-[focus-visible=true]:z-10",
      "data-[focus-visible=true]:ring-2",
      "data-[focus-visible=true]:ring-brand-50",
      "data-[focus-visible=true]:bg-neutral-200",
    ],
    wrapper: "w-full flex flex-col items-start justify-center",
    title: "flex-1 text-sm font-normal truncate",
    description: ["w-full", "text-xs", "text-foreground-500", "group-hover:text-neutral-800"],
    selectedIcon: ["text-inherit", "w-3", "h-3", "flex-shrink-0"],
    shortcut: [
      "px-1",
      "py-0.5",
      "rounded",
      "font-sans",
      "text-foreground-500",
      "text-xs",
      "border-sm",
      "border-neutral-300",
      "group-hover:border-neutral",
    ],
  },
  variants: {
    showDivider: {
      true: {
        base: [
          "mb-1.5",
          "after:content-['']",
          "after:absolute",
          "after:-bottom-1",
          "after:left-0",
          "after:right-0",
          "after:h-divider",
          "after:bg-divider",
        ],
      },
      false: {},
    },
    isSelected: {
      true: {
        base: [
          "bg-neutral-50",
          "text-brand-800",
          "data-[hover=true]:bg-neutral-50",
          "data-[hover=true]:text-brand-800",
          "data-[selectable=true]:focus:bg-neutral-50",
          "data-[selectable=true]:focus:text-brand-800",
        ],
      },
      false: {
        base: [
          "text-neutral-800",
          "data-[hover=true]:bg-neutral-200",
          "data-[hover=true]:text-neutral-800",
          "data-[selectable=true]:focus:bg-neutral-200",
          "data-[selectable=true]:focus:text-neutral-800",
        ],
      },
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none",
      },
    },
    disableAnimation: {
      true: {},
      false: {
        base: "data-[hover=true]:transition-colors",
      },
    },
  },
  defaultVariants: {
    disableAnimation: false,
    showDivider: false,
  },
  compoundVariants: [
    {
      isSelected: true,
      isDisabled: true,
      className: {
        base: "bg-neutral-0",
      },
    },
  ],
});

/**
 * Menu section wrapper **Tailwind Variants** component
 *
 * const { base, section, heading } = menuSection({...})
 *
 * @example
 * <div className={base()}>
 *  <button className={trigger()} aria-expanded="true/false">your trigger</button>
 *  <div className={section()}>
 *    // menu content
 *    <span className={arrow()} data-placement="top/bottom/left/right..." /> // arrow
 *  </div>
 * </div>
 */
const menuSection = tv({
  slots: {
    base: "relative mb-2",
    heading: "pl-1 text-xs text-foreground-500",
    group: "data-[has-title=true]:pt-1",
    divider: "mt-2",
  },
});

export type MenuVariantProps = VariantProps<typeof menu>;
export type MenuSlots = keyof ReturnType<typeof menu>;
export type MenuSectionVariantProps = VariantProps<typeof menuSection>;
export type MenuSectionSlots = keyof ReturnType<typeof menuSection>;
export type MenuItemVariantProps = VariantProps<typeof menuItem>;
export type MenuItemSlots = keyof ReturnType<typeof menuItem>;

export {menu, menuItem, menuSection};
