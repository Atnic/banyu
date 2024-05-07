import type {VariantProps} from "tailwind-variants";

import {tv} from "../utils/tv";

/**
 * Spinner wrapper **Tailwind Variants** component
 *
 * const {base, line1, line2, label } = spinner({...})
 *
 * @example
 * <div className={base())}>
 *    <i className={circle()}/>
 *    <i className={circle2()}/>
 *    <span className={label()}/>
 * </div>
 */
const spinner = tv({
  slots: {
    base: "relative inline-flex flex-col gap-2 items-center justify-center",
    wrapper: "relative flex",
    circle: "progress-spinner stroke-current",
    circleBackground: "text-neutral-200 stroke-current",
    label: "text-neutral-800 font-regular",
  },
  variants: {
    size: {
      xs: {
        wrapper: "w-4 h-4",
        label: "text-xs",
      },
      sm: {
        wrapper: "w-5 h-5",
        label: "text-sm",
      },
      md: {
        wrapper: "w-8 h-8",
        label: "text-md",
      },
      lg: {
        wrapper: "w-10 h-10",
        label: "text-lg",
      },
    },
    color: {
      current: {
        circle: "text-neutral-200",
        circleBackground: "text-transparent stroke-current",
      },
      white: {
        circle: "text-white",
      },
      default: {
        circle: "text-neutral-800",
      },
      primary: {
        circle: "text-brand",
      },
      success: {
        circle: "text-success",
      },
      warning: {
        circle: "text-warning",
      },
      danger: {
        circle: "text-danger",
      },
    },
    isProgress: {
      true: {
        circleBackground: "hidden",
      },
      false: {
        circle: "animate-spinner-ease-spin",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    isProgress: false,
  },
});

export type SpinnerVariantProps = VariantProps<typeof spinner>;
export type SpinnerSlots = keyof ReturnType<typeof spinner>;

export {spinner};
