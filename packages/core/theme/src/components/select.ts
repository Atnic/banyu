import type {VariantProps} from "tailwind-variants";

import {dataFocusVisibleClasses} from "../utils";
import {tv} from "../utils/tv";

const select = tv({
  slots: {
    base: ["group inline-flex flex-col relative w-full"],
    label: [
      "block",
      "absolute",
      "z-10",
      "origin-top-left",
      "subpixel-antialiased",
      "text-sm",
      "text-neutral-800",
      "font-semibold",
      "pointer-events-none",
    ],
    mainWrapper: "w-full flex flex-col",
    trigger: [
      "relative",
      "px-3",
      "gap-3",
      "w-full",
      "inline-flex",
      "flex-row",
      "items-center",
      "shadow-sm",
      "outline-none",
      "tap-highlight-transparent",
    ],
    innerWrapper:
      "inline-flex h-full w-[calc(100%_-_theme(spacing.unit-6))] min-h-unit-4 items-center gap-1.5 box-border text-neutral-800 text-lg",
    selectorIcon: "absolute right-3 w-unit-6 h-unit-6",
    spinner: "absolute right-3",
    value: [
      "text-neutral-500",
      "font-normal",
      "w-full",
      "min-w-12",
      "text-left",
      "group-data-[has-value=true]:text-neutral-800",
    ],
    listboxWrapper: "scroll-py-6 max-h-64 w-full overflow-y-auto",
    listbox: "rounded-none",
    popoverContent: "w-full p-0 overflow-hidden min-w-12",
    helperWrapper: "p-1 flex relative flex-col gap-1.5",
    description: "z-0 text-xs text-neutral-400",
    errorMessage: "text-xs text-danger",
    topContent: "w-full border-b-1 border-neutral-200",
    bottomContent: "w-full border-t-1 border-neutral-200",
  },
  variants: {
    variant: {
      ghost: {
        trigger: [
          "bg-neutral-200",
          "data-[hover=true]:border-[1px]",
          "data-[hover=true]:border-brand",
          "group-data-[focus=true]:bg-neutral-100",
        ],
      },
      default: {
        trigger: [
          "border-[1px]",
          "border-neutral-300",
          "data-[hover=true]:border-neutral-400",
          "data-[focus=true]:border-brand",
        ],
      },
      dropdown: {
        trigger: [
          "border-[1px]",
          "border-neutral-200",
          "data-[hover=true]:border-brand/60",
          "group-data-[focus=true]:bg-neutral-100",
        ],
      },
    },
    size: {
      sm: {
        label: "text-xs",
        trigger: "h-unit-8 min-h-unit-8 px-2 rounded-sm",
        value: "text-xs",
      },
      md: {
        trigger: "h-unit-10 min-h-unit-10 rounded-md",
        value: "text-sm",
      },
      lg: {
        trigger: "h-unit-12 min-h-unit-12 rounded-lg",
        value: "text-md",
      },
    },
    radius: {
      none: {
        trigger: "rounded-none",
      },
      sm: {
        trigger: "rounded-sm",
      },
      md: {
        trigger: "rounded-md",
      },
      lg: {
        trigger: "rounded-lg",
      },
      full: {
        trigger: "rounded-full",
      },
    },
    labelPlacement: {
      outside: {
        base: "flex flex-col",
      },
      "outside-left": {
        base: "flex-row items-center flex-nowrap items-center",
        label: "relative pr-2 text-neutral",
      },
      inside: {
        label: "text-xs cursor-pointer",
        trigger: "flex-col items-start justify-center gap-0",
      },
    },
    fullWidth: {
      true: {
        base: "w-full",
      },
    },
    hasPlaceholder: {
      false: {
        value: "min-w-12",
        label:
          "text-neutral-500 font-normal group-data-[filled=true]:text-neutral-800 group-data-[filled=true]:font-semibold",
      },
    },
    isFocused: {
      true: {
        trigger: "data-[hover=true]:border-brand",
      },
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none",
        trigger: "pointer-events-none bg-neutral-300",
      },
    },
    isInvalid: {
      true: {
        label: "!text-danger",
        value: "!text-neutral-500",
        selectorIcon: "text-danger",
        trigger: ["!border-danger", "data-[hover=true]:border-danger"],
      },
    },
    isSuccess: {
      true: {
        label: "!text-success",
        value: "!text-neutral-500",
        selectorIcon: "text-success",
        trigger: ["!border-success", "data-[hover=true]:border-success"],
      },
    },
    isRequired: {
      true: {
        label: "after:content-['*'] after:text-danger after:ml-0.5",
      },
    },
    isMultiline: {
      true: {
        label: "relative",
        trigger: "!h-auto",
      },
      false: {
        value: "truncate",
      },
    },
    disableAnimation: {
      true: {
        trigger: "after:transition-none",
        base: "transition-none",
        label: "transition-none",
        selectorIcon: "transition-none",
      },
      false: {
        base: "transition-background motion-reduce:transition-none !duration-150",
        label: [
          "will-change-auto",
          "origin-top-left",
          "!duration-200",
          "!ease-out",
          "transition-[transform,color,left,opacity]",
          "motion-reduce:transition-none",
        ],
        selectorIcon: "transition-transform duration-150 ease motion-reduce:transition-none",
      },
    },
    disableSelectorIconRotation: {
      true: {},
      false: {
        selectorIcon: "data-[open=true]:rotate-180",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    labelPlacement: "outside",
    fullWidth: true,
    isDisabled: false,
    isMultiline: false,
    disableAnimation: false,
    disableSelectorIconRotation: false,
  },
  compoundVariants: [
    // ghost & color
    {
      variant: "ghost",
      class: {
        base: "w-fit",
        trigger: [
          "w-fit",
          "shadow-none",
          // "data-[hover=false]:border-none",
          "bg-neutral-200",
          "data-[hover=true]:border-brand",
          "group-data-[focus=true]:bg-neutral-50",
        ],
        value: "font-semibold",
        label: "font-semibold",
      },
    },
    // default & color
    {
      variant: "default",
      class: {
        trigger: ["data-[focus=true]:ring-4", "data-[focus=true]:ring-brand/60", "bg-content1"],
      },
    },
    // dropdown & color
    {
      variant: "dropdown",
      class: {
        // base: "max-w-fit",
        innerWrapper: "w-fit min-w-12 mr-6",
        trigger: [
          "w-fit",
          "px-1",
          "shadow-none",
          "border-neutral-200",
          "data-[hover=true]:border-brand",
          "data-[focus=true]:border-brand",
          "data-[open=true]:border-brand",
        ],
        selectorIcon: "right-1",
        value: "font-semibold",
        label: "w-max font-semibold",
        popoverContent: "min-w-36",
      },
    },
    // labelPlacement=outside & default
    {
      labelPlacement: "inside",
      class: {
        label: "group-data-[filled=true]:text-default-600",
      },
    },
    // labelPlacement=outside & default
    {
      labelPlacement: "outside",
      class: {
        label: "group-data-[filled=true]:text-neutral",
      },
    },
    // radius-full & size
    {
      radius: "full",
      size: ["sm"],
      class: {
        trigger: "px-3",
      },
    },
    {
      radius: "full",
      size: "md",
      class: {
        trigger: "px-4",
      },
    },
    {
      radius: "full",
      size: "lg",
      class: {
        trigger: "px-5",
      },
    },
    // !disableAnimation & variant
    {
      disableAnimation: false,
      variant: "default",
      class: {
        trigger: "transition-colors motion-reduce:transition-none",
      },
    },
    // flat
    {
      variant: "ghost",
      class: {
        trigger: [
          // focus ring
          ...dataFocusVisibleClasses,
        ],
      },
    },
    // isInvalid & variant
    {
      isInvalid: true,
      variant: "ghost",
      class: {
        trigger: [
          "bg-danger-50",
          "data-[hover=true]:bg-danger-100",
          "group-data-[focus=true]:bg-danger-50",
        ],
      },
    },
    {
      isInvalid: true,
      variant: "default",
      class: {
        trigger: ["!border-danger", "data-[focus=true]:ring-4", "data-[focus=true]:ring-danger/60"],
      },
    },
    // isSuccess & variant
    {
      isSuccess: true,
      variant: "ghost",
      class: {
        trigger: [
          "bg-success-50",
          "data-[hover=true]:bg-success-100",
          "group-data-[focus=true]:bg-success-50",
        ],
      },
    },
    {
      isSuccess: true,
      variant: "default",
      class: {
        trigger: [
          "!border-success",
          "data-[focus=true]:ring-4",
          "data-[focus=true]:ring-success/60",
        ],
      },
    },
    // size & labelPlacement
    {
      labelPlacement: "inside",
      size: "sm",
      class: {
        trigger: "h-12 min-h-unit-12 py-1.5 px-3",
      },
    },
    {
      labelPlacement: "inside",
      size: "md",
      class: {
        trigger: "h-14 min-h-unit-14 py-2",
      },
    },
    {
      labelPlacement: "inside",
      size: "lg",
      class: {
        label: "text-sm",
        trigger: "h-16 min-h-unit-16 py-2.5 gap-0",
      },
    },
    //  labelPlacement=[inside, outside]
    {
      labelPlacement: ["inside", "outside"],
      class: {
        label: ["group-data-[filled=true]:pointer-events-auto"],
      },
    },
    {
      labelPlacement: "outside",
      isMultiline: false,
      class: {
        base: "group relative justify-end",
        label: ["pb-0", "z-20", "top-1/2", "-translate-y-1/2", "group-data-[filled=true]:left-0"],
      },
    },
    // labelPlacement=[inside]
    {
      labelPlacement: ["inside"],
      class: {
        label: "group-data-[filled=true]:scale-85",
      },
    },
    // inside & size
    {
      labelPlacement: "inside",
      size: ["sm", "md"],
      class: {
        label: "text-sm",
      },
    },
    {
      labelPlacement: "inside",
      isMultiline: false,
      size: "sm",
      class: {
        label: ["group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.xs)/2_-_8px)]"],
        innerWrapper: "group-data-[has-label=true]:pt-4",
      },
    },
    {
      labelPlacement: "inside",
      isMultiline: false,
      size: "md",
      class: {
        label: ["group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.sm)/2_-_6px)]"],
        innerWrapper: "group-data-[has-label=true]:pt-4",
      },
    },
    {
      labelPlacement: "inside",
      isMultiline: false,
      size: "lg",
      class: {
        label: [
          "text-md",
          "group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.sm)/2_-_8px)]",
        ],
        innerWrapper: "group-data-[has-label=true]:pt-5",
      },
    },
    // inside & size
    {
      labelPlacement: "inside",
      variant: "default",
      isMultiline: false,
      size: "sm",
      class: {
        label: [
          "group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.xs)/2_-_8px_-_theme(borderWidth.md))]",
        ],
      },
    },
    {
      labelPlacement: "inside",
      variant: "default",
      isMultiline: false,
      size: "md",
      class: {
        label: [
          "group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.sm)/2_-_6px_-_theme(borderWidth.md))]",
        ],
      },
    },
    {
      labelPlacement: "inside",
      variant: "default",
      isMultiline: false,
      size: "lg",
      class: {
        label: [
          "text-md",
          "group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.sm)/2_-_8px_-_theme(borderWidth.md))]",
        ],
      },
    },
    // outside & size
    {
      labelPlacement: "outside",
      size: "sm",
      isMultiline: false,
      class: {
        label: [
          "left-2",
          "text-xs",
          "group-data-[filled=true]:-translate-y-[calc(100%_+_theme(fontSize.xs)/2_+_12px)]",
        ],
        base: "data-[has-label=true]:mt-[calc(theme(fontSize.sm)_+_4px)]",
      },
    },
    {
      labelPlacement: "outside",
      isMultiline: false,
      size: "md",
      class: {
        label: [
          "left-3",
          "text-sm",
          "group-data-[filled=true]:-translate-y-[calc(100%_+_theme(fontSize.sm)/2_+_16px)]",
        ],
        base: "data-[has-label=true]:mt-[calc(theme(fontSize.sm)_+_8px)]",
      },
    },
    {
      labelPlacement: "outside",
      isMultiline: false,
      size: "lg",
      class: {
        label: [
          "left-3",
          "text-md",
          "group-data-[filled=true]:-translate-y-[calc(100%_+_theme(fontSize.sm)/2_+_20px)]",
        ],
        base: "data-[has-label=true]:mt-[calc(theme(fontSize.sm)_+_12px)]",
      },
    },
    // isMultiline & labelPlacement="outside"
    {
      labelPlacement: "outside",
      isMultiline: true,
      class: {
        label: "pb-1.5",
      },
    },
    // text truncate labelPlacement=[inside,outside]
    {
      variant: ["default", "ghost"],
      labelPlacement: ["inside", "outside"],
      class: {
        label: ["pe-2", "max-w-full", "text-ellipsis", "overflow-hidden"],
      },
    },
    // isDisabled & ghost
    {
      isDisabled: true,
      variant: ["ghost", "dropdown"],
      class: {
        trigger: "bg-neutral-300",
      },
    },
  ],
});

export type SelectVariantProps = VariantProps<typeof select>;
export type SelectSlots = keyof ReturnType<typeof select>;

export {select};
