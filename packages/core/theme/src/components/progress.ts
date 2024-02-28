import type {VariantProps} from "tailwind-variants";

import {tv} from "../utils/tv";

/**
 * Progress **Tailwind Variants** component
 *
 * @example
 * ```js
 * const {base, labelWrapper, label, value, track, indicator} = progress({...})
 *
 * <div className={base()} aria-label="progress" role="progressbar" aria-valuenow={value} aria-valuemin={min} aria-valuemax={max}>
 *   <div className={labelWrapper()}>
 *      <span className={label()}>{label}</span>
 *      <span className={value()}>{value}</span>
 *   </div>
 *   <div className={track()}>
 *     <div className={indicator()} style={{width: `${value}%`}} />
 *   </div>
 * </div>
 * ```
 */
const progress = tv(
  {
    slots: {
      base: "flex flex-col gap-2 w-full",
      label: "text-neutral-800",
      labelWrapper: "flex justify-between",
      value: "text-neutral-800",
      floatingLabelWrapper: "inline-block",
      progressBarWrapper: "flex flex-col gap-2",
      track: "z-0 relative bg-neutral/20 overflow-hidden",
      indicator: "h-full",
    },
    variants: {
      color: {
        default: {
          indicator: "bg-brand",
        },
        primary: {
          indicator: "bg-brand",
        },
        success: {
          indicator: "bg-success",
        },
        warning: {
          indicator: "bg-warning",
        },
        danger: {
          indicator: "bg-danger",
        },
      },
      size: {
        sm: {
          label: "text-sm",
          value: "text-sm",
          track: "h-1",
        },
        md: {
          label: "text-md",
          value: "text-md",
          track: "h-3",
        },
        lg: {
          label: "text-lg",
          value: "text-lg",
          track: "h-5",
        },
      },
      radius: {
        none: {
          track: "rounded-none",
          indicator: "rounded-none",
        },
        sm: {
          track: "rounded-sm",
          indicator: "rounded-sm",
        },
        md: {
          track: "rounded-md",
          indicator: "rounded-md",
        },
        lg: {
          track: "rounded-lg",
          indicator: "rounded-lg",
        },
        full: {
          track: "rounded-full",
          indicator: "rounded-full",
        },
      },
      isStriped: {
        true: {
          indicator: "bg-stripe-gradient bg-[length:1.25rem_1.25rem]",
        },
      },
      isIndeterminate: {
        true: {
          indicator: ["absolute", "w-full", "origin-left", "animate-indeterminate-bar"],
          floatingLabelWrapper: "hidden",
        },
      },
      isDisabled: {
        true: {
          base: "opacity-disabled cursor-not-allowed",
        },
      },
      disableAnimation: {
        true: {},
        false: {
          indicator: "transition-transform !duration-500",
        },
      },
      floatingLabel: {
        true: {
          value: "hidden",
        },
        false: {
          floatingLabelWrapper: "hidden",
        },
      },
      floatingLabelPlacement: {
        top: {},
        bottom: {
          progressBarWrapper: "flex-col-reverse",
        },
      },
    },
    defaultVariants: {
      color: "primary",
      size: "md",
      radius: "full",
      isStriped: false,
      isIndeterminate: false,
      isDisabled: false,
      disableAnimation: false,
      floatingLabel: false,
      floatingLabelPlacement: "top",
    },
    compoundVariants: [
      // disableAnimation && !isIndeterminate
      {
        disableAnimation: true,
        isIndeterminate: false,
        class: {
          indicator: "!transition-none motion-reduce:transition-none",
        },
      },
    ],
  },
  {
    twMerge: false,
  },
);

export type ProgressVariantProps = VariantProps<typeof progress>;
export type ProgressSlots = keyof ReturnType<typeof progress>;

export {progress};
