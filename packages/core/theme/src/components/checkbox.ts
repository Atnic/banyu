import type {VariantProps} from "tailwind-variants";

import {tv} from "../utils/tv";
import {colorVariants} from "../utils";

/**
 * Checkbox wrapper **Tailwind Variants** component
 *
 * const {base, wrapper, icon, label} = checkbox({...})
 *
 * @example
 * <label className={base())}>
 *  // hidden input
 *  <span className={wrapper()} aria-hidden="true" data-selected={selected}>
 *     <svg className={icon()}>
 *       // check icon
 *     </svg>
 *  </span>
 *  <span className={label()}>Label</span>
 * </label>
 */
const checkbox = tv({
  slots: {
    base: "group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2",
    wrapper: [
      "relative",
      "inline-flex",
      "items-center",
      "justify-center",
      "flex-shrink-0",
      "overflow-hidden",
      // before
      "before:content-['']",
      "before:absolute",
      "before:inset-0",
      "before:border-solid",
      "before:border-2",
      "ring-0",
      "group-data-[focus=true]:ring-4",
      "group-data-[focus=true]:ring-neutral/60",
      "before:box-border",
      // after
      "before:border-default",
      "after:content-['']",
      "after:absolute",
      "after:inset-0",
      "after:scale-50",
      "after:opacity-0",
      "after:origin-center",
      "group-data-[selected=true]:after:scale-100",
      "group-data-[selected=true]:after:opacity-100",
      // hover
      "group-data-[hover=true]:before:bg-neutral-100",
    ],
    icon: "z-10 w-4 h-3 opacity-0 group-data-[selected=true]:opacity-100",
    label: "relative text-white select-none",
  },
  variants: {
    variant: {
      solid: "",
      soft: "",
    },
    color: {
      primary: "",
      success: "",
      warning: "",
      danger: "",
      transparent: "",
      white: "",
      basic: "",
    },
    size: {
      sm: {
        wrapper: ["w-4 h-4 mr-2", "rounded-sm", "before:rounded-sm", "after:rounded-sm"],
        label: "text-small",
        icon: "w-3 h-2",
      },
      md: {
        wrapper: ["w-5 h-5 mr-2", "rounded-md", "before:rounded-md", "after:rounded-md"],
        label: "text-medium",
        icon: "w-4 h-3",
      },
      lg: {
        wrapper: ["w-6 h-6 mr-2", "rounded-lg", "before:rounded-lg", "after:rounded-lg"],
        label: "text-large",
        icon: "w-5 h-4",
      },
    },
    radius: {
      none: {
        wrapper: "rounded-none before:rounded-none after:rounded-none",
      },
      sm: {
        wrapper: "rounded-sm before:rounded-sm after:rounded-sm",
      },
      md: {
        wrapper: "rounded-md before:rounded-md after:rounded-md",
      },
      lg: {
        wrapper: "rounded-lg before:rounded-lg after:rounded-lg",
      },
      full: {
        wrapper: "rounded-full before:rounded-full after:rounded-full",
      },
    },
    lineThrough: {
      true: {
        label: [
          "inline-flex",
          "items-center",
          "justify-center",
          "before:content-['']",
          "before:absolute",
          "before:bg-foreground",
          "before:w-0",
          "before:h-0.5",
          "group-data-[selected=true]:opacity-60",
          "group-data-[selected=true]:before:w-full",
        ],
      },
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none",
      },
    },
    isInvalid: {
      true: {
        wrapper: "before:border-danger",
        label: "text-danger",
      },
    },
    disableAnimation: {
      true: {
        wrapper: "transition-none",
        icon: "transition-none",
        label: "transition-none",
      },
      false: {
        wrapper: [
          "before:transition-colors",
          "group-data-[pressed=true]:scale-95",
          "transition-transform",
          "group-data-[focus=true]:transition-all",
          "group-data-[focus=true]:ease-linear",
          "group-data-[focus=true]:duration-200",
          "after:transition-transform-opacity",
          "after:!ease-linear",
          "after:!duration-200",
          // "motion-reduce:transition-none",
        ],
        icon: "transition-opacity motion-reduce:transition-none",
        label: "transition-colors-opacity before:transition-width motion-reduce:transition-none",
      },
    },
  },
  defaultVariants: {
    variant: "solid",
    color: "primary",
    size: "md",
    radius: "md",
    isDisabled: false,
    lineThrough: false,
    disableAnimation: false,
  },
  compoundVariants: [
    // solid / color
    {
      variant: "solid",
      color: "primary",
      className: {
        wrapper: [
          "after:!bg-brand",
          "after:text-white",
          "text-white",
          "group-data-[focus=true]:ring-brand/60",
          "after:" + colorVariants.solid.primary,
        ],
      },
    },
    {
      variant: "solid",
      color: "danger",
      className: {
        wrapper: [
          "after:!bg-danger",
          "after:text-white",
          "text-white",
          "group-data-[focus=true]:ring-danger/60",
          "after:" + colorVariants.solid.danger,
        ],
      },
    },
    {
      variant: "solid",
      color: "warning",
      className: {
        wrapper: [
          "after:!bg-warning",
          "after:text-white",
          "text-white",
          "group-data-[focus=true]:ring-warning/60",
          "after:" + colorVariants.solid.warning,
        ],
      },
    },
    {
      variant: "solid",
      color: "success",
      className: {
        wrapper: [
          "after:!bg-success",
          "after:text-white",
          "text-white",
          "group-data-[focus=true]:ring-success/60",
          "after:" + colorVariants.solid.success,
        ],
      },
    },
    {
      variant: "solid",
      color: "white",
      className: {
        wrapper: [
          "after:!bg-white",
          "after:text-neutral-800",
          "text-neutral-800",
          "group-data-[focus=true]:ring-neutral/60",
          "after:" + colorVariants.solid.white,
        ],
      },
    },
    {
      variant: "solid",
      color: "transparent",
      className: {
        wrapper: [
          "after:!bg-transparent",
          "after:text-brand-800",
          "text-brand-800",
          "group-data-[focus=true]:ring-neutral/60",
          "after:" + colorVariants.solid.transparent,
        ],
      },
    },
    {
      variant: "solid",
      color: "basic",
      className: {
        wrapper: [
          "after:bg-neutral-50",
          "after:text-neutral-800",
          "text-neutral-800",
          "group-data-[focus=true]:ring-neutral/60",
          "after:" + colorVariants.solid.basic,
        ],
      },
    },
    // soft / color
    {
      variant: "soft",
      color: "primary",
      className: {
        wrapper: [
          "after:bg-brand-100",
          "after:text-brand-500",
          "text-brand-500",
          "group-data-[focus=true]:ring-brand/60",
          "group-data-[selected=true]:after:border-2",
          "group-data-[selected=true]:after:border-brand-500",
          "after:" + colorVariants.soft.primary,
        ],
      },
    },
    {
      variant: "soft",
      color: "danger",
      className: {
        wrapper: [
          "after:bg-danger-100",
          "after:text-danger-500",
          "text-danger-500",
          "group-data-[focus=true]:ring-danger/60",
          "group-data-[selected=true]:after:border-2",
          "group-data-[selected=true]:after:border-danger-500",
          "after:" + colorVariants.soft.danger,
        ],
      },
    },
    {
      variant: "soft",
      color: "warning",
      className: {
        wrapper: [
          "after:bg-warning-100",
          "after:text-warning-500",
          "text-warning-500",
          "group-data-[focus=true]:ring-warning/60",
          "group-data-[selected=true]:after:border-2",
          "group-data-[selected=true]:after:border-warning-500",
          "after:" + colorVariants.soft.warning,
        ],
      },
    },
    {
      variant: "soft",
      color: "success",
      className: {
        wrapper: [
          "after:bg-success-100",
          "after:text-success-500",
          "text-success-500",
          "group-data-[focus=true]:ring-success/60",
          "group-data-[selected=true]:after:border-2",
          "group-data-[selected=true]:after:border-success-500",
          "after:" + colorVariants.soft.success,
        ],
      },
    },
    {
      variant: "soft",
      color: "white",
      className: {
        wrapper: [
          "after:bg-white",
          "after:text-neutral-800",
          "text-neutral-800",
          "group-data-[focus=true]:ring-neutral/60",
          "group-data-[selected=true]:after:border-2",
          "group-data-[selected=true]:after:border-neutral-800",
          "after:" + colorVariants.soft.white,
        ],
      },
    },
    {
      variant: "soft",
      color: "transparent",
      className: {
        wrapper: [
          "after:bg-transparent",
          "after:text-neutral-800",
          "text-neutral-800",
          "group-data-[focus=true]:ring-neutral/60",
          "after:" + colorVariants.soft.transparent,
        ],
      },
    },
    {
      variant: "soft",
      color: "basic",
      className: {
        wrapper: [
          "after:bg-neutral-50",
          "after:text-neutral-800",
          "text-neutral-800",
          "group-data-[focus=true]:ring-neutral/60",
          "after:" + colorVariants.soft.basic,
        ],
      },
    },
  ],
});

/**
 * CheckboxGroup wrapper **Tailwind Variants** component
 *
 * const {base, label, wrapper} = checkboxGroup({...})
 *
 * @example
 * <div className={base())}>
 *  <label className={label()}>Label</label>
 *  <div className={wrapper()} data-orientation="vertical/horizontal">
 *     // checkboxes
 *  </div>
 * </div>
 */
const checkboxGroup = tv({
  slots: {
    base: "relative flex flex-col gap-2",
    label: "relative text-medium text-white-500",
    wrapper: "flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row",
    description: "text-small text-white-400",
    errorMessage: "text-small text-danger",
  },
  variants: {
    isRequired: {
      true: {
        label: "after:content-['*'] after:text-danger after:ml-0.5",
      },
    },
    isInvalid: {
      true: {
        description: "text-danger",
      },
    },
    disableAnimation: {
      true: {},
      false: {
        description: "transition-colors !duration-150 motion-reduce:transition-none",
      },
    },
  },
  defaultVariants: {
    isInvalid: false,
    isRequired: false,
    disableAnimation: false,
  },
});

export type CheckboxGroupSlots = keyof ReturnType<typeof checkboxGroup>;

export type CheckboxVariantProps = VariantProps<typeof checkbox>;
export type CheckboxSlots = keyof ReturnType<typeof checkbox>;

export {checkbox, checkboxGroup};
