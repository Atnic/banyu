import type {VariantProps} from "tailwind-variants";

import {tv} from "../utils/tv";
import {dataFocusVisibleClasses, groupDataFocusVisibleClasses} from "../utils";

/**
 * Input wrapper **Tailwind Variants** component
 *
 * @example
 * ```js
 * const {base, label, inputWrapper, input, clearButton, description, errorMessage} = input({...})
 *
 * <div className={base())}>
 *  <label className={label()}>Label</label>
 *  <div className={inputWrapper()}>
 *    <input className={input()}/>
 *    <button className={clearButton()}>Clear</button>
 *  </div>
 *  <span className={description()}>Description</span>
 *  <span className={errorMessage()}>Invalid input</span>
 * </div>
 * ```
 */
const input = tv({
  slots: {
    base: "group flex flex-col",
    label: [
      "absolute",
      "z-10",
      "pointer-events-none",
      "origin-top-left",
      "subpixel-antialiased",
      "block",
      "text-sm",
      "text-neutral-800",
      "font-semibold",
    ],
    inValidIcon: "mr-3",
    validIcon: "mr-3",
    startContentWrapper: "flex p-2 bg-neutral-50 border-e border-neutral-300 items-center h-full",
    endContentWrapper: "flex p-2 bg-neutral-50 border-s border-neutral-300 items-center h-full",
    mainWrapper: "h-full",
    inputWrapper:
      "relative w-full inline-flex overflow-hidden tap-highlight-transparent flex-row items-center",
    innerWrapper: "inline-flex w-full items-center h-full box-border",
    input: [
      "px-2",
      "w-full font-normal bg-transparent !outline-none placeholder:text-neutral-500 text-neutral-800 focus-visible:outline-none",
      "data-[has-start-content=true]:ps-1.5",
      "data-[has-end-content=true]:pe-1.5",
    ],
    textarea: [
      "p-1",
      "m-1",
      "border-neutral-300",
      "w-full font-normal bg-transparent !outline-none placeholder:text-neutral-500 text-neutral-800 focus-visible:outline-none",
      "data-[has-start-content=true]:ps-1.5",
      "data-[has-end-content=true]:pe-1.5",
    ],
    maxLengthWrapper: "",
    clearButton: [
      // "p-2",
      // "-m-4",
      "mr-3",
      "z-10",
      "hidden",
      // "absolute",
      // "right-3",
      "appearance-none",
      "outline-none",
      "select-none",
      "opacity-0",
      "hover:!opacity-100",
      "cursor-pointer",
      "active:!opacity-70",
      "rounded-full",
      // focus ring
      ...dataFocusVisibleClasses,
    ],
    helperWrapper: "hidden group-data-[has-helper=true]:flex p-1 relative flex-col gap-1.5",
    description: "text-xs text-foreground-400",
    errorMessage: "text-xs",
  },
  variants: {
    variant: {
      flat: {
        inputWrapper: [
          "bg-white",
          "ease-out",
          "duration-300",
          "ring-2",
          "ring-transparent",
          "data-[hover=true]:border-brand",
          "group-data-[focus=true]:border-brand",
          "group-data-[focus=true]:ring-brand-200",
        ],
      },
      underlined: {
        inputWrapper: [
          // "!px-1",
          "!pb-0",
          "!gap-0",
          "relative",
          "box-border",
          "border-b-[1px]",
          "shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
          "border-neutral-200",
          "!rounded-none",
          "hover:border-brand",
          "after:content-['']",
          "after:w-0",
          "after:origin-center",
          "after:bg-neutral-foreground",
          "after:absolute",
          "after:left-1/2",
          "after:-translate-x-1/2",
          "after:-bottom-[2px]",
          "after:h-[2px]",
          "group-data-[focus=true]:after:w-full",
          "ease-out",
          "duration-300",
          "ring-transparent",
          "data-[hover=true]:border-brand",
          "group-data-[focus=true]:border-brand",
        ],
        innerWrapper: "pb-1",
        input: "!pl-0",
      },
    },
    size: {
      sm: {
        label: "text-xs top-[18px] left-0",
        inputWrapper: "h-unit-8 min-h-unit-8 rounded-sm",
        input: "text-xs",
        clearButton: "!text-md",
        inValidIcon: "!text-md",
        validIcon: "!text-md",
      },
      md: {
        label: "text-sm top-[24px] left-0",
        inputWrapper: "h-unit-10 min-h-unit-10 rounded-md",
        input: "text-sm p-2",
        clearButton: "!text-lg",
        inValidIcon: "!text-lg",
        validIcon: "!text-lg",
      },
      lg: {
        label: "text-base top-[28px] left-0",
        inputWrapper: "h-unit-12 min-h-unit-12 rounded-lg",
        input: "text-base",
        clearButton: "!text-xl",
        inValidIcon: "!text-xl",
        validIcon: "!text-xl",
      },
    },
    radius: {
      none: {
        inputWrapper: "rounded-none",
      },
      sm: {
        inputWrapper: "rounded-sm",
      },
      md: {
        inputWrapper: "rounded-md",
      },
      lg: {
        inputWrapper: "rounded-lg",
      },
      full: {
        inputWrapper: "rounded-full",
      },
    },
    labelPlacement: {
      outside: {
        mainWrapper: "flex flex-col",
      },
      "outside-left": {
        base: "flex-row items-center flex-nowrap data-[has-helper=true]:items-start",
        inputWrapper: "flex-1",
        mainWrapper: "flex flex-col",
        label: "relative pr-2",
      },
    },
    fullWidth: {
      true: {
        base: "w-full",
      },
    },
    isClearable: {
      true: {
        input: "peer pr-6",
        clearButton: "peer-data-[filled=true]:opacity-70 peer-data-[filled=true]:block",
      },
    },
    isDisabled: {
      true: {
        base: "pointer-events-none",
        inputWrapper: "opacity-disabled pointer-events-none bg-neutral-300 text-neutral-400",
        label: "!text-neutral-800",
      },
    },
    isInvalid: {
      true: {
        inputWrapper: "!border-danger group-data-[focus=true]:ring-danger-200",
        inValidIcon: "text-danger",
        errorMessage: "text-danger",
      },
      false: {
        inValidIcon: "invisible",
      },
    },
    isValid: {
      true: {
        inputWrapper: "!border-success group-data-[focus=true]:ring-success-200",
        validIcon: "text-success",
        errorMessage: "text-success",
      },
      false: {
        validIcon: "invisible",
      },
    },
    isRequired: {
      true: {
        label: "after:content-['*'] after:text-danger after:ml-0.5",
      },
    },
    isReadOnly: {
      true: {
        inputWrapper:
          "!border-transparent hover:!border-transparent focus:!ring-0 focus:!border-transparent",
      },
    },
    isMultiline: {
      true: {
        label: "relative",
        inputWrapper: "!h-auto",
        innerWrapper: "items-start group-data-[has-label=true]:items-start",
        input: "resize-none data-[hide-scroll=true]:scrollbar-hide",
      },
    },
    disableAnimation: {
      true: {
        input: "transition-none",
        inputWrapper: "transition-none",
        label: "transition-none",
      },
      false: {
        inputWrapper: "transition-background motion-reduce:transition-none !duration-150",
        label: [
          "will-change-auto",
          "!duration-200",
          "!ease-out",
          "motion-reduce:transition-none",
          "transition-[transform,color,left,opacity]",
        ],
        clearButton: ["transition-opacity", "motion-reduce:transition-none"],
      },
    },
  },
  defaultVariants: {
    variant: "flat",
    color: "default",
    size: "md",
    radius: "lg",
    fullWidth: true,
    labelPlacement: "outside",
    isDisabled: false,
    disableAnimation: false,
    isInvalid: false,
    isValid: false,
  },
  compoundVariants: [
    // flat & color
    {
      variant: "flat",
      color: "default",
      class: {
        inputWrapper: "border border-neutral-300",
        input: "group-data-[has-value=true]:text-neutral-800",
      },
    },

    // labelPlacement=outside & default
    {
      labelPlacement: ["outside"],
      variant: ["flat", "underlined"],
      class: {
        label: "text-neutral-800",
      },
    },
    {
      labelPlacement: ["outside-left"],
      variant: "flat",
      class: {
        label: "text-neutral-800 top-0",
      },
    },
    {
      labelPlacement: ["outside-left"],
      variant: "underlined",
      class: {
        label: "text-neutral-800 top-[-3.5px]",
      },
    },
    // radius-full & size
    {
      radius: "full",
      size: ["sm"],
      class: {
        inputWrapper: "px-3",
      },
    },
    {
      radius: "full",
      size: "md",
      class: {
        inputWrapper: "px-4",
      },
    },
    {
      radius: "full",
      size: "lg",
      class: {
        inputWrapper: "px-5",
      },
    },
    {
      disableAnimation: false,
      variant: "underlined",
      class: {
        inputWrapper: "after:transition-width motion-reduce:after:transition-none",
      },
    },
    // flat & faded
    {
      variant: ["flat"],
      class: {
        inputWrapper: [
          // focus ring
          ...groupDataFocusVisibleClasses,
        ],
      },
    },
    {
      labelPlacement: ["outside"],
      class: {
        label: ["pointer-events-auto"],
      },
    },
    {
      labelPlacement: ["outside", "outside-left"],
      class: {
        input: "h-full",
      },
    },
    {
      labelPlacement: "outside",
      class: {
        base: "group relative justify-end",
        label: ["pb-0", "z-20", "left-0"],
      },
    },
    // variant=underlined & size
    {
      variant: "underlined",
      size: "sm",
      class: {
        innerWrapper: "pb-1",
      },
    },
    {
      variant: "underlined",
      size: ["md", "lg"],
      class: {
        innerWrapper: "pb-1.5",
      },
    },
    // outside & size
    {
      labelPlacement: "outside",
      variant: ["flat", "underlined"],
      class: {
        label: ["left-0", "text-xs", "-translate-y-[calc(100%_+_theme(fontSize.xs)/2_+_16px)]"],
        base: "data-[has-label=true]:mt-[calc(theme(fontSize.sm)_+_8px)]",
      },
    },
    {
      labelPlacement: "outside",
      size: "md",
      class: {
        label: ["left-0", "text-sm", "-translate-y-[calc(100%_+_theme(fontSize.sm)/2_+_20px)]"],
        base: "data-[has-label=true]:mt-[calc(theme(fontSize.sm)_+_10px)]`",
      },
    },
    {
      labelPlacement: "outside",
      size: "lg",
      class: {
        label: ["left-0", "text-md", "-translate-y-[calc(100%_+_theme(fontSize.sm)/2_+_24px)]"],
        base: "data-[has-label=true]:mt-[calc(theme(fontSize.sm)_+_12px)]",
      },
    },
    // outside-left & size & hasHelper
    {
      labelPlacement: "outside-left",
      size: "sm",
      class: {
        label: "group-data-[has-helper=true]:pt-2",
      },
    },
    {
      labelPlacement: "outside-left",
      size: "md",
      class: {
        label: "group-data-[has-helper=true]:pt-3",
      },
    },
    {
      labelPlacement: "outside-left",
      size: "lg",
      class: {
        label: "group-data-[has-helper=true]:pt-4",
      },
    },
    // labelPlacement=[outside, outside-left] & isMultiline
    {
      labelPlacement: ["outside", "outside-left"],
      isMultiline: true,
      class: {
        inputWrapper: "py-2",
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
    // isMultiline
    {
      isMultiline: true,
      class: {
        input: "transition-height !duration-100",
        inputWrapper: "py-0 overflow-visible",
        base: "!mt-0",
        label: ["top-[52px]"],
        inValidIcon: "absolute top-[7.5px] right-[7.5px] mr-0 bg-white rounded-full",
        validIcon: "absolute top-[7.5px] right-[7.5px] mr-0 bg-white rounded-full",
        maxLengthWrapper: "w-full justify-end text-brand",
      },
    },
    {
      isMultiline: true,
      size: "sm",
      class: {
        textarea: "min-h-unit-8",
      },
    },
    {
      isMultiline: true,
      size: "md",
      class: {
        textarea: "min-h-unit-10",
      },
    },
    {
      isMultiline: true,
      size: "lg",
      class: {
        textarea: "min-h-unit-12",
      },
    },
    // text truncate labelPlacement=[inside,outside]
    {
      labelPlacement: ["outside"],
      class: {
        label: ["pe-2", "max-w-full", "text-ellipsis", "overflow-hidden"],
      },
    },
  ],
});

export type InputVariantProps = VariantProps<typeof input>;
export type InputSlots = keyof ReturnType<typeof input>;

export {input};
