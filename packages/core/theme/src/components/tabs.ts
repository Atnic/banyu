import type {VariantProps} from "tailwind-variants";

import {tv} from "../utils/tv";
import {colorVariants, dataFocusVisibleClasses} from "../utils";

/**
 * Tabs wrapper **Tailwind Variants** component
 *
 * @example
 * ```js
 * const {base, tabList, tab, panel} = tabs({...})
 *
 * <div className={base())}>
 *  <div className={tabList())}>
 *    <div className={tab())} data-selected="boolean">Tab 1</div>
 *    <div className={tab())} data-selected="boolean" data-disabled="boolean">Tab 2</div>
 *    <div className={tab())} data-selected="boolean">Tab 3</div>
 *  </div>
 *  <div className={panel())}>Selected panel</div>
 * </div>
 * ```
 */
const tabs = tv({
  slots: {
    base: "inline-flex",
    tabList: [
      "flex",
      "p-1",
      "h-fit",
      "items-center",
      "flex-nowrap",
      "overflow-x-scroll",
      "scrollbar-hide",
      "bg-neutral-100",
    ],
    tab: [
      "z-0",
      "w-full",
      "px-3",
      "py-1",
      "flex",
      "group",
      "relative",
      "justify-center",
      "items-center",
      "outline-none",
      "cursor-pointer",
      "transition-opacity",
      "tap-highlight-transparent",
      "data-[disabled=true]:cursor-not-allowed",
      "data-[disabled=true]:opacity-30",
      "font-semibold",
      "text-black",
      // focus ring
      ...dataFocusVisibleClasses,
    ],
    tabContent: [
      "relative",
      "z-10",
      "text-inherit",
      "whitespace-nowrap",
      "transition-colors",
      // "text-neutral-500",
      "group-data-[selected=true]:text-foreground",
    ],
    cursor: ["absolute", "z-0", "bg-white"],
    panel: [
      "py-3",
      "px-1",
      "outline-none",
      // focus ring
      ...dataFocusVisibleClasses,
    ],
  },
  variants: {
    variant: {
      solid: {
        cursor: "inset-0",
      },
      light: {
        tabList: "bg-transparent dark:bg-transparent",
        cursor: "inset-0",
      },
      underlined: {
        tabList: "bg-transparent dark:bg-transparent",
        cursor: "h-[2px] w-full bottom-[-2px] border-neutral",
      },
      bordered: {
        tabList: "bg-transparent dark:bg-transparent border-md border-neutral-200 shadow-sm",
        cursor: "inset-0",
      },
      vertical: {
        base: "",
        tabList: "flex-col gap-1 bg-transparent dark:bg-transparent",
        tab: "justify-start",
        cursor: "inset-0",
      },
    },
    color: {
      default: {},
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {},
    },
    size: {
      sm: {
        tabList: "rounded-md",
        tab: "h-7 text-xs rounded-sm",
        cursor: "rounded-sm",
      },
      md: {
        tabList: "rounded-md",
        tab: "h-8 text-sm rounded-sm",
        cursor: "rounded-sm",
      },
      lg: {
        tabList: "rounded-lg",
        tab: "h-9 text-md rounded-md",
        cursor: "rounded-md",
      },
    },
    radius: {
      none: {
        tabList: "rounded-none",
        tab: "rounded-none",
        cursor: "rounded-none",
      },
      sm: {
        tabList: "rounded-md",
        tab: "rounded-sm",
        cursor: "rounded-sm",
      },
      md: {
        tabList: "rounded-md",
        tab: "rounded-sm",
        cursor: "rounded-sm",
      },
      lg: {
        tabList: "rounded-lg",
        tab: "rounded-md",
        cursor: "rounded-md",
      },
      full: {
        tabList: "rounded-full",
        tab: "rounded-full",
        cursor: "rounded-full",
      },
    },
    fullWidth: {
      true: {
        base: "w-full",
        tabList: "w-full",
      },
    },
    isDisabled: {
      true: {
        tabList: "opacity-disabled pointer-events-none",
      },
    },
    disableAnimation: {
      true: {
        tab: "transition-none",
        tabContent: "transition-none",
      },
    },
  },
  defaultVariants: {
    color: "primary",
    variant: "solid",
    size: "md",
    radius: "lg",
    fullWidth: false,
    isDisabled: false,
    disableAnimation: false,
  },
  compoundVariants: [
    /**
     * Variants & Colors
     */
    // solid + bordered + light && color
    {
      variant: ["solid", "bordered", "light", "vertical"],
      color: "primary",
      class: {
        cursor: colorVariants.solid.primary,
        tabContent: "group-data-[selected=true]:text-white",
      },
    },
    {
      variant: ["solid", "bordered", "light", "vertical"],
      color: "success",
      class: {
        cursor: colorVariants.solid.success,
        tabContent: "group-data-[selected=true]:text-white",
      },
    },
    {
      variant: ["solid", "bordered", "light", "vertical"],
      color: "warning",
      class: {
        cursor: colorVariants.solid.warning,
        tabContent: "group-data-[selected=true]:text-white",
      },
    },
    {
      variant: ["solid", "bordered", "light", "vertical"],
      color: "danger",
      class: {
        cursor: colorVariants.solid.danger,
        tabContent: "group-data-[selected=true]:text-white",
      },
    },
    // underlined && color
    {
      variant: "underlined",
      color: "primary",
      class: {
        cursor: "bg-brand",
        tabContent: "group-data-[selected=true]:text-brand",
        tab: "border-b-2 data-[hover-unselected=true]:text-brand",
      },
    },
    {
      variant: "underlined",
      color: "success",
      class: {
        cursor: "bg-success",
        tabContent: "group-data-[selected=true]:text-success",
        tab: "border-b-2 data-[hover-unselected=true]:text-success",
      },
    },
    {
      variant: "underlined",
      color: "warning",
      class: {
        cursor: "bg-warning",
        tabContent: "group-data-[selected=true]:text-warning",
        tab: "border-b-2 data-[hover-unselected=true]:text-warning",
      },
    },
    {
      variant: "underlined",
      color: "danger",
      class: {
        cursor: "bg-danger",
        tabContent: "group-data-[selected=true]:text-danger",
        tab: "border-b-2 data-[hover-unselected=true]:text-danger",
      },
    },
    // vertical && color
    {
      variant: "vertical",
      color: "primary",
      class: {
        cursor: "bg-brand",
        tab: "data-[hover-unselected=true]:text-brand data-[hover-unselected=true]:bg-brand-50",
      },
    },
    {
      variant: "vertical",
      color: "success",
      class: {
        cursor: "bg-success",
        tab: "data-[hover-unselected=true]:text-success data-[hover-unselected=true]:bg-success-50",
      },
    },
    {
      variant: "vertical",
      color: "warning",
      class: {
        cursor: "bg-warning",
        tab: "data-[hover-unselected=true]:text-warning data-[hover-unselected=true]:bg-warning-50",
      },
    },
    {
      variant: "vertical",
      color: "danger",
      class: {
        cursor: "bg-danger",
        tab: "data-[hover-unselected=true]:text-danger data-[hover-unselected=true]:bg-danger-50",
      },
    },
    /**
     * Disable animation & Variants & Colors
     */
    // disabledAnimation && underlined
    {
      disableAnimation: true,
      variant: "underlined",
      class: {
        tab: [
          "after:content-['']",
          "after:absolute",
          "after:bottom-0",
          "after:h-[2px]",
          "after:w-[80%]",
          "after:opacity-0",
          "after:shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
          "data-[selected=true]:after:opacity-100",
        ],
      },
    },

    // disableAnimation && color && solid/bordered
    {
      disableAnimation: true,
      color: "default",
      variant: ["solid", "bordered", "light", "vertical"],
      class: {
        tab: "data-[selected=true]:bg-neutral data-[selected=true]:text-neutral-foreground",
      },
    },
    {
      disableAnimation: true,
      color: "primary",
      variant: ["solid", "bordered", "light", "vertical"],
      class: {
        tab: "data-[selected=true]:bg-brand data-[selected=true]:text-brand-foreground",
      },
    },
    {
      disableAnimation: true,
      color: "secondary",
      variant: ["solid", "bordered", "light", "vertical"],
      class: {
        tab: "data-[selected=true]:bg-secondary data-[selected=true]:text-secondary-foreground",
      },
    },
    {
      disableAnimation: true,
      color: "success",
      variant: ["solid", "bordered", "light", "vertical"],
      class: {
        tab: "data-[selected=true]:bg-success data-[selected=true]:text-success-foreground",
      },
    },
    {
      disableAnimation: true,
      color: "warning",
      variant: ["solid", "bordered", "light", "vertical"],
      class: {
        tab: "data-[selected=true]:bg-warning data-[selected=true]:text-warning-foreground",
      },
    },
    {
      disableAnimation: true,
      color: "danger",
      variant: ["solid", "bordered", "light", "vertical"],
      class: {
        tab: "data-[selected=true]:bg-danger data-[selected=true]:text-danger-foreground",
      },
    },
    // disableAnimation && color && underlined
    {
      disableAnimation: true,
      color: "default",
      variant: "underlined",
      class: {
        tab: "data-[selected=true]:after:bg-foreground",
      },
    },
    {
      disableAnimation: true,
      color: "primary",
      variant: "underlined",
      class: {
        tab: "data-[selected=true]:after:bg-brand",
      },
    },
    {
      disableAnimation: true,
      color: "secondary",
      variant: "underlined",
      class: {
        tab: "data-[selected=true]:after:bg-secondary",
      },
    },
    {
      disableAnimation: true,
      color: "success",
      variant: "underlined",
      class: {
        tab: "data-[selected=true]:after:bg-success",
      },
    },
    {
      disableAnimation: true,
      color: "warning",
      variant: "underlined",
      class: {
        tab: "data-[selected=true]:after:bg-warning",
      },
    },
    {
      disableAnimation: true,
      color: "danger",
      variant: "underlined",
      class: {
        tab: "data-[selected=true]:after:bg-danger",
      },
    },
  ],
  compoundSlots: [
    {
      variant: "underlined",
      slots: ["tab", "tabList", "cursor"],
      class: ["rounded-none"],
    },
  ],
});

export type TabsVariantProps = VariantProps<typeof tabs>;
export type TabsSlots = keyof ReturnType<typeof tabs>;
export type TabsReturnType = ReturnType<typeof tabs>;

export {tabs};
