import type {VariantProps} from "tailwind-variants";

import {tv} from "../utils/tv";

/**
 * Radio wrapper **Tailwind Variants** component
 *
 * const {base, wrapper, point, labelWrapper, label, description} = radio({...})
 *
 * @example
 * <label
 *    className={base()}
 *    data-selected={boolean}
 *    data-hover-unselected={boolean}
 *    data-focus-visible={boolean}
 * >
 *  // input
 *  <span className={wrapper()} aria-hidden="true" data-selected={selected} data-hover-unselected={hoverUnchecked}>
 *     <span className={point()}/>
 *  </span>
 *  <div className={labelWrapper()}>
 *    <span className={label()}>Label</span>
 *    <span className={description()}>Description</span>
 *  </div>
 * </label>
 */
const radio = tv(
  {
    slots: {
      base: "group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2",
      wrapper: [
        "relative",
        "inline-flex",
        "items-center",
        "justify-center",
        "flex-shrink-0",
        "overflow-hidden",
        "border-solid",
        "box-border",
        "border-[1px]",
        "border-neutral-300",
        "rounded-full",
        "ring-0",
        "group-data-[hover=true]:ring-4",
        "group-data-[hover=true]:ring-neutral-200",
        "group-data-[focus=true]:ring-4",
        // focus ring
      ],
      labelWrapper: "flex flex-col ml-1",
      control: [
        "z-10",
        "w-2",
        "h-2",
        "opacity-100",
        "scale-100",
        "origin-center",
        "rounded-full",
        "group-data-[selected=true]:opacity-100",
        "group-data-[selected=true]:scale-100",
      ],
      label: "relative text-foreground select-none",
      description: "relative text-foreground-400",
    },
    variants: {
      color: {
        primary: {
          control: "group-data-[selected=true]:bg-white text-brand-foreground",
          wrapper: [
            "group-data-[selected=true]:border-brand",
            "group-data-[selected=true]:bg-brand",
            "group-data-[focus=true]:ring-brand-100",
          ],
        },
        success: {
          control: "group-data-[selected=true]:bg-white text-success-foreground",
          wrapper: [
            "group-data-[selected=true]:border-success",
            "group-data-[selected=true]:bg-success",
            "group-data-[focus=true]:ring-success-100",
          ],
        },
        warning: {
          control: "group-data-[selected=true]:bg-white text-warning-foreground",
          wrapper: [
            "group-data-[selected=true]:border-warning",
            "group-data-[selected=true]:bg-warning",
            "group-data-[focus=true]:ring-warning-100",
          ],
        },
        danger: {
          control: "group-data-[selected=true]:bg-white text-danger-foreground",
          wrapper: [
            "group-data-[selected=true]:border-danger",
            "group-data-[selected=true]:bg-danger",
            "group-data-[focus=true]:ring-danger-100",
          ],
        },
        basic: {
          control: "group-data-[selected=true]:bg-white text-neutral-800",
          wrapper: [
            "group-data-[selected=true]:border-neutral-50",
            "group-data-[selected=true]:bg-neutral-50",
            "group-data-[focus=true]:ring-neutral-100",
          ],
        },
        secondary: {
          control: "group-data-[selected=true]:bg-white text-neutral-800",
          wrapper: [
            "group-data-[selected=true]:border-neutral-300",
            "group-data-[selected=true]:bg-neutral-100",
            "group-data-[focus=true]:ring-neutral-200",
          ],
        },
        white: {
          control: "group-data-[selected=true]:bg-white text-neutral-800",
          wrapper: [
            "group-data-[selected=true]:border-neutral-300",
            "group-data-[selected=true]:bg-neutral-100",
            "group-data-[focus=true]:ring-neutral-200",
          ],
        },
      },
      size: {
        sm: {
          wrapper: "w-4 h-4",
          control: "w-1.5 h-1.5",
          labelWrapper: "ml-1",
          label: "text-sm",
          description: "text-xs",
        },
        md: {
          wrapper: "w-5 h-5",
          control: "w-2 h-2",
          labelWrapper: "ml-2",
          label: "text-md",
          description: "text-sm",
        },
        lg: {
          wrapper: "w-6 h-6",
          control: "w-2.5 h-2.5",
          labelWrapper: "ml-2",
          label: "text-lg",
          description: "text-md",
        },
      },
      isDisabled: {
        true: {
          base: "pointer-events-none",
          wrapper: [
            "border-neutral-100",
            "bg-neutral-200",
            "group-data-[selected=true]:bg-neutral-200",
            "group-data-[selected=true]:border-neutral-200",
          ],
          control: "bg-neutral-200 group-data-[selected=true]:bg-neutral-400",
        },
      },
      isInvalid: {
        true: {
          control: "bg-danger text-danger-foreground",
          wrapper: "border-danger group-data-[selected=true]:border-danger",
          label: "text-danger",
          description: "text-danger-300",
        },
      },
      disableAnimation: {
        true: {},
        false: {
          wrapper: [
            "group-data-[pressed=true]:scale-95",
            "transition-all",
            "motion-reduce:transition-none",
          ],
          control: "transition-transform-opacity motion-reduce:transition-none",
          label: "transition-colors motion-reduce:transition-none",
          description: "transition-colors motion-reduce:transition-none",
        },
      },
    },
    defaultVariants: {
      color: "primary",
      size: "md",
      isDisabled: false,
      isInvalid: false,
      disableAnimation: false,
    },
  },
  // {twMerge: false},
);

/**
 * RadioGroup wrapper **Tailwind Variants** component
 *
 * const {base, label, wrapper} = radioGroup({...})
 *
 * @example
 * <div className={base())}>
 *  <label className={label()}>Label</label>
 *  <div className={wrapper()} data-orientation="vertical/horizontal">
 *     // radios
 *  </div>
 * </div>
 */
const radioGroup = tv({
  slots: {
    base: "relative flex flex-col gap-2",
    label: "relative text-foreground-500",
    wrapper: "flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row",
    description: "text-xs text-foreground-400",
    errorMessage: "text-xs text-danger",
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

export type RadioGroupSlots = keyof ReturnType<typeof radioGroup>;

export type RadioVariantProps = VariantProps<typeof radio>;
export type RadioSlots = keyof ReturnType<typeof radio>;

export {radio, radioGroup};
