import type {VariantProps} from "tailwind-variants"

import {tv} from "../utils/tv"
import {groupDataFocusVisibleClasses} from "../utils"

/**
 * Toggle (Switch) wrapper **Tailwind Variants** component
 *
 * const {base, wrapper, thumb, thumbIcon, label, startContent, endContent} = switch({...})
 *
 * @example
 * <label
 *    className={base())}
 *    data-selected={true/false}
 *    data-pressed={true/false}
 *    data-focus={true/false}
 *    data-hover={true/false}
 *    data-focus-visible={true/false}
 * >
 *  <input/> // hidden input
 *  <span className={wrapper()} aria-hidden="true">
 *    <svg className={startContent()}>...</svg>
 *    <span className={thumb()}>
 *      <svg className={thumbIcon()}>...</svg>
 *    </span>
 *    <svg className={endContent()}>...</svg>
 *  </span>
 *  <span className={label()}>Label</span>
 * </label>
 */
const toggle = tv({
  slots: {
    base: "group relative max-w-fit inline-flex items-center justify-start cursor-pointer touch-none tap-highlight-transparent",
    wrapper: [
      "px-1",
      "relative",
      "inline-flex",
      "items-center",
      "justify-start",
      "flex-shrink-0",
      "overflow-hidden",
      "bg-neutral-100",
      "rounded-full",
      // focus ring
      ...groupDataFocusVisibleClasses,
    ],
    thumb: [
      "z-10",
      "flex",
      "items-center",
      "justify-center",
      "bg-white",
      "shadow-sm",
      "rounded-full",
      "origin-right",
    ],
    startContent: "z-0 absolute left-1.5 text-current",
    endContent: "z-0 absolute right-1.5 text-default-600",
    thumbIcon: "text-black",
    label: "relative text-foreground select-none",
  },
  variants: {
    color: {
      default: {
        wrapper: [
          "group-data-[selected=true]:bg-neutral-400",
          "group-data-[selected=true]:text-neutral-foreground",
        ],
      },
      primary: {
        wrapper: [
          "group-data-[selected=true]:bg-brand",
          "group-data-[selected=true]:text-brand-foreground",
        ],
      },
      success: {
        wrapper: [
          "group-data-[selected=true]:bg-success",
          "group-data-[selected=true]:text-success-foreground",
        ],
      },
      warning: {
        wrapper: [
          "group-data-[selected=true]:bg-warning",
          "group-data-[selected=true]:text-warning-foreground",
        ],
      },
      danger: {
        wrapper: [
          "group-data-[selected=true]:bg-danger",
          "data-[selected=true]:text-danger-foreground",
        ],
      },
    },
    size: {
      sm: {
        wrapper: "w-10 h-6 mr-2",
        thumb: [
          "w-4 h-4 text-xs",
          //selected
          "group-data-[selected=true]:ml-4",
        ],
        endContent: "text-xs",
        startContent: "text-xs",
        label: "text-sm",
      },
      md: {
        wrapper: "w-12 h-7 mr-2",
        thumb: [
          "w-5 h-5 text-sm",
          //selected
          "group-data-[selected=true]:ml-5",
        ],
        endContent: "text-sm",
        startContent: "text-sm",
        label: "text-md",
      },
      lg: {
        wrapper: "w-14 h-8 mr-2",
        thumb: [
          "w-6 h-6 text-md",
          //selected
          "group-data-[selected=true]:ml-6",
        ],
        endContent: "text-md",
        startContent: "text-md",
        label: "text-lg",
      },
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none",
      },
    },
    disableAnimation: {
      true: {
        wrapper: "transition-none",
        thumb: "transition-none",
      },
      false: {
        wrapper: "transition-background",
        thumb: "transition-all",
        startContent: [
          "opacity-0",
          "scale-50",
          "transition-transform-opacity",
          "group-data-[selected=true]:scale-100",
          "group-data-[selected=true]:opacity-100",
        ],
        endContent: [
          "opacity-100",
          "transition-transform-opacity",
          "group-data-[selected=true]:translate-x-3",
          "group-data-[selected=true]:opacity-0",
        ],
      },
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    isDisabled: false,
    disableAnimation: false,
  },
  compoundVariants: [
    {
      disableAnimation: false,
      size: "sm",
      class: {
        thumb: ["group-data-[pressed=true]:w-5", "group-data-[selected]:group-data-[pressed]:ml-3"],
      },
    },
    {
      disableAnimation: false,
      size: "md",
      class: {
        thumb: ["group-data-[pressed=true]:w-6", "group-data-[selected]:group-data-[pressed]:ml-4"],
      },
    },
    {
      disableAnimation: false,
      size: "lg",
      class: {
        thumb: ["group-data-[pressed=true]:w-7", "group-data-[selected]:group-data-[pressed]:ml-5"],
      },
    },
  ],
})

export type ToggleVariantProps = VariantProps<typeof toggle>
export type ToggleSlots = keyof ReturnType<typeof toggle>

export {toggle}
