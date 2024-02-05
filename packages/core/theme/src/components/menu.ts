import type {VariantProps} from "tailwind-variants"

import {tv} from "../utils/tv"
import {dataFocusVisibleClasses} from "../utils"

/**
 * Menu wrapper **Tailwind Variants** component
 *
 * const classNames = menu({...})

 */
const menu = tv({
  slots: {
    base: "w-full relative flex flex-col gap-1 p-1",
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
})

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
      "px-2",
      "py-1.5",
      "w-full",
      "h-full",
      "box-border",
      "rounded-sm",
      "subpixel-antialiased",
      "outline-none",
      "cursor-pointer",
      "tap-highlight-transparent",
      // focus ring
      ...dataFocusVisibleClasses,
      "data-[focus-visible=true]:dark:ring-offset-background-content1",
    ],
    wrapper: "w-full flex flex-col items-start justify-center",
    title: "flex-1 text-sm font-normal truncate",
    description: ["w-full", "text-xs", "text-foreground-500", "group-hover:text-neutral"],
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
    variant: {
      solid: {
        base: "",
      },
      bordered: {
        base: "border-md border-transparent bg-transparent",
      },
      light: {
        base: "bg-transparent",
      },
      faded: {
        base: [
          "border-sm border-transparent hover:border-neutral data-[hover=true]:bg-neutral-100",
          "data-[selectable=true]:focus:border-neutral data-[selectable=true]:focus:bg-neutral-100",
        ],
      },
      flat: {
        base: "",
      },
      shadow: {
        base: "data-[hover=true]:shadow-lg",
      },
    },
    color: {
      default: {},
      brand: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {},
    },
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
    variant: "solid",
    color: "default",
    disableAnimation: false,
    showDivider: false,
  },
  compoundVariants: [
    // solid / color
    {
      variant: "solid",
      color: "default",
      class: {
        base: [
          "data-[hover=true]:bg-neutral",
          "data-[hover=true]:text-neutral-foreground",
          "data-[selectable=true]:focus:bg-neutral",
          "data-[selectable=true]:focus:text-neutral-foreground",
        ],
      },
    },
    {
      variant: "solid",
      color: "brand",
      class: {
        base: [
          "data-[hover=true]:bg-brand data-[hover=true]:text-brand-foreground",
          "data-[selectable=true]:focus:bg-brand data-[selectable=true]:focus:text-brand-foreground",
        ],
      },
    },
    {
      variant: "solid",
      color: "secondary",
      class: {
        base: [
          "data-[hover=true]:bg-secondary data-[hover=true]:text-secondary-foreground",
          "data-[selectable=true]:focus:bg-secondary data-[selectable=true]:focus:text-secondary-foreground",
        ],
      },
    },
    {
      variant: "solid",
      color: "success",
      class: {
        base: [
          "data-[hover=true]:bg-success data-[hover=true]:text-success-foreground",
          "data-[selectable=true]:focus:bg-success data-[selectable=true]:focus:text-success-foreground",
        ],
      },
    },
    {
      variant: "solid",
      color: "warning",
      class: {
        base: [
          "data-[hover=true]:bg-warning data-[hover=true]:text-warning-foreground",
          "data-[selectable=true]:focus:bg-warning data-[selectable=true]:focus:text-warning-foreground",
        ],
      },
    },
    {
      variant: "solid",
      color: "danger",
      class: {
        base: [
          "data-[hover=true]:bg-danger data-[hover=true]:text-danger-foreground",
          "data-[selectable=true]:focus:bg-danger data-[selectable=true]:focus:text-danger-foreground",
        ],
      },
    },
    // shadow / color
    {
      variant: "shadow",
      color: "default",
      class: {
        base: [
          "data-[hover=true]:shadow-neutral/50 data-[hover=true]:bg-neutral data-[hover=true]:text-neutral-foreground",
          "data-[selectable=true]:focus:shadow-neutral/50 data-[selectable=true]:focus:bg-neutral data-[selectable=true]:focus:text-neutral-foreground",
        ],
      },
    },
    {
      variant: "shadow",
      color: "brand",
      class: {
        base: [
          "data-[hover=true]:shadow-brand/30 data-[hover=true]:bg-brand data-[hover=true]:text-brand-foreground",
          "data-[selectable=true]:focus:shadow-brand/30 data-[selectable=true]:focus:bg-brand data-[selectable=true]:focus:text-brand-foreground",
        ],
      },
    },
    {
      variant: "shadow",
      color: "secondary",
      class: {
        base: [
          "data-[hover=true]:shadow-secondary/30 data-[hover=true]:bg-secondary data-[hover=true]:text-secondary-foreground",
          "data-[selectable=true]:focus:shadow-secondary/30 data-[selectable=true]:focus:bg-secondary data-[selectable=true]:focus:text-secondary-foreground",
        ],
      },
    },
    {
      variant: "shadow",
      color: "success",
      class: {
        base: [
          "data-[hover=true]:shadow-success/30 data-[hover=true]:bg-success data-[hover=true]:text-success-foreground",
          "data-[selectable=true]:focus:shadow-success/30 data-[selectable=true]:focus:bg-success data-[selectable=true]:focus:text-success-foreground",
        ],
      },
    },
    {
      variant: "shadow",
      color: "warning",
      class: {
        base: [
          "data-[hover=true]:shadow-warning/30 data-[hover=true]:bg-warning data-[hover=true]:text-warning-foreground",
          "data-[selectable=true]:focus:shadow-warning/30 data-[selectable=true]:focus:bg-warning data-[selectable=true]:focus:text-warning-foreground",
        ],
      },
    },
    {
      variant: "shadow",
      color: "danger",
      class: {
        base: [
          "data-[hover=true]:shadow-danger/30 data-[hover=true]:bg-danger data-[hover=true]:text-danger-foreground",
          "data-[selectable=true]:focus:shadow-danger/30 data-[selectable=true]:focus:bg-danger data-[selectable=true]:focus:text-danger-foreground",
        ],
      },
    },
    // bordered / color
    {
      variant: "bordered",
      color: "default",
      class: {
        base: ["data-[hover=true]:border-neutral", "data-[selectable=true]:focus:border-neutral"],
      },
    },
    {
      variant: "bordered",
      color: "brand",
      class: {
        base: [
          "data-[hover=true]:border-brand data-[hover=true]:text-brand",
          "data-[selectable=true]:focus:border-brand data-[selectable=true]:focus:text-brand",
        ],
      },
    },
    {
      variant: "bordered",
      color: "secondary",
      class: {
        base: [
          "data-[hover=true]:border-secondary data-[hover=true]:text-secondary",
          "data-[selectable=true]:focus:border-secondary data-[selectable=true]:focus:text-secondary",
        ],
      },
    },
    {
      variant: "bordered",
      color: "success",
      class: {
        base: [
          "data-[hover=true]:border-success data-[hover=true]:text-success",
          "data-[selectable=true]:focus:border-success data-[selectable=true]:focus:text-success",
        ],
      },
    },
    {
      variant: "bordered",
      color: "warning",
      class: {
        base: [
          "data-[hover=true]:border-warning data-[hover=true]:text-warning",
          "data-[selectable=true]:focus:border-warning data-[selectable=true]:focus:text-warning",
        ],
      },
    },
    {
      variant: "bordered",
      color: "danger",
      class: {
        base: [
          "data-[hover=true]:border-danger data-[hover=true]:text-danger",
          "data-[selectable=true]:focus:border-danger data-[selectable=true]:focus:text-danger",
        ],
      },
    },
    // flat / color
    {
      variant: "flat",
      color: "default",
      class: {
        base: [
          "data-[hover=true]:bg-neutral/40",
          "data-[hover=true]:text-neutral-foreground",
          "data-[selectable=true]:focus:bg-neutral/40",
          "data-[selectable=true]:focus:text-neutral-foreground",
        ],
      },
    },
    {
      variant: "flat",
      color: "brand",
      class: {
        base: [
          "data-[hover=true]:bg-brand/20 data-[hover=true]:text-brand",
          "data-[selectable=true]:focus:bg-brand/20 data-[selectable=true]:focus:text-brand",
        ],
      },
    },
    {
      variant: "flat",
      color: "secondary",
      class: {
        base: [
          "data-[hover=true]:bg-secondary/20 data-[hover=true]:text-secondary",
          "data-[selectable=true]:focus:bg-secondary/20 data-[selectable=true]:focus:text-secondary",
        ],
      },
    },
    {
      variant: "flat",
      color: "success",
      class: {
        base: [
          "data-[hover=true]:bg-success/20 data-[hover=true]:text-success",
          "data-[selectable=true]:focus:bg-success/20 data-[selectable=true]:focus:text-success",
        ],
      },
    },
    {
      variant: "flat",
      color: "warning",
      class: {
        base: [
          "data-[hover=true]:bg-warning/20 data-[hover=true]:text-warning",
          "data-[selectable=true]:focus:bg-warning/20 data-[selectable=true]:focus:text-warning",
        ],
      },
    },
    {
      variant: "flat",
      color: "danger",
      class: {
        base: [
          "data-[hover=true]:bg-danger/20 data-[hover=true]:text-danger",
          "data-[selectable=true]:focus:bg-danger/20 data-[selectable=true]:focus:text-danger",
        ],
      },
    },
    // faded / color
    {
      variant: "faded",
      color: "default",
      class: {
        base: [
          "data-[hover=true]:text-neutral-foreground",
          "data-[selectable=true]:focus:text-neutral-foreground",
        ],
      },
    },
    {
      variant: "faded",
      color: "brand",
      class: {
        base: ["data-[hover=true]:text-brand", "data-[selectable=true]:focus:text-brand"],
      },
    },
    {
      variant: "faded",
      color: "secondary",
      class: {
        base: ["data-[hover=true]:text-secondary", "data-[selectable=true]:focus:text-secondary"],
      },
    },
    {
      variant: "faded",
      color: "success",
      class: {
        base: ["data-[hover=true]:text-success", "data-[selectable=true]:focus:text-success"],
      },
    },
    {
      variant: "faded",
      color: "warning",
      class: {
        base: ["data-[hover=true]:text-warning", "data-[selectable=true]:focus:text-warning"],
      },
    },
    {
      variant: "faded",
      color: "danger",
      class: {
        base: ["data-[hover=true]:text-danger", "data-[selectable=true]:focus:text-danger"],
      },
    },
    // light / color
    {
      variant: "light",
      color: "default",
      class: {
        base: [
          "data-[hover=true]:text-neutral-500",
          "data-[selectable=true]:focus:text-neutral-500",
        ],
      },
    },
    {
      variant: "light",
      color: "brand",
      class: {
        base: ["data-[hover=true]:text-brand", "data-[selectable=true]:focus:text-brand"],
      },
    },
    {
      variant: "light",
      color: "secondary",
      class: {
        base: ["data-[hover=true]:text-secondary", "data-[selectable=true]:focus:text-secondary"],
      },
    },
    {
      variant: "light",
      color: "success",
      class: {
        base: ["data-[hover=true]:text-success", "data-[selectable=true]:focus:text-success"],
      },
    },
    {
      variant: "light",
      color: "warning",
      class: {
        base: ["data-[hover=true]:text-warning", "data-[selectable=true]:focus:text-warning"],
      },
    },
    {
      variant: "light",
      color: "danger",
      class: {
        base: ["data-[hover=true]:text-danger", "data-[selectable=true]:focus:text-danger"],
      },
    },
  ],
})

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
})

export type MenuVariantProps = VariantProps<typeof menu>
export type MenuSlots = keyof ReturnType<typeof menu>
export type MenuSectionVariantProps = VariantProps<typeof menuSection>
export type MenuSectionSlots = keyof ReturnType<typeof menuSection>
export type MenuItemVariantProps = VariantProps<typeof menuItem>
export type MenuItemSlots = keyof ReturnType<typeof menuItem>

export {menu, menuItem, menuSection}
