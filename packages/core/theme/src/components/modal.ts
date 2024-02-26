import type {VariantProps} from "tailwind-variants";

import {tv} from "../utils/tv";
import {dataFocusVisibleClasses} from "../utils";

/**
 * Modal **Tailwind Variants** component
 *
 * @example
 * ```js
 * const {base, backdrop, header, body, footer} = modal({...})
 *
 * <div>
 *    <button>Open Modal</button>
 *    <div className={backdrop()}/>
 *    <div className={base()}>
 *       <div className={header()}>Header</div>
 *       <div className={body()}>Body</div>
 *       <div className={footer()}>Footer</div>
 *    </div>
 * </div>
 * ```
 */
const modal = tv({
  slots: {
    wrapper: [
      "flex",
      "w-screen",
      "h-[100dvh]",
      "fixed",
      "inset-0",
      "z-50",
      "overflow-x-auto",
      "justify-center",
      //  mobile animation vars
      "[--scale-enter:100%]",
      "[--scale-exit:100%]",
      "[--slide-enter:0px]",
      "[--slide-exit:80px]",
      // tablet/desktop animation vars
      "sm:[--scale-enter:100%]",
      "sm:[--scale-exit:103%]",
      "sm:[--slide-enter:0px]",
      "sm:[--slide-exit:0px]",
    ],
    base: [
      "flex",
      "flex-col",
      "relative",
      "bg-white",
      "z-50",
      "w-full",
      "box-border",
      "bg-white",
      "outline-none",
      "mx-1",
      "my-1",
      "sm:mx-6",
      "sm:my-16",
      "gap-[4px]",
      "pb-6",
    ],
    backdrop: "z-50",
    header: "flex pt-6 px-6 flex-initial",
    body: "flex flex-1 flex-col gap-3 px-6 font-normal leading-5",
    footer: "flex flex-row gap-2 px-6 pt-unit-6 gap-3",
    closeButton: [
      "absolute",
      "appearance-none",
      "outline-none",
      "select-none",
      "top-4",
      "right-4",
      "p-1",
      "text-foreground-500",
      "rounded-full",
      "hover:bg-default-100",
      "active:bg-default-200",
      "tap-highlight-transparent",
      "bg-neutral-100",
      "text-xl",
      // focus ring
      ...dataFocusVisibleClasses,
    ],
  },
  variants: {
    size: {
      sm: {
        base: "max-w-[400px]",
      },
      lg: {
        base: "max-w-[640px]",
      },
      full: {
        base: "sm:mx-0 sm:my-0 max-w-[95dvw] m-8 h-[90dvh]",
      },
    },
    radius: {
      none: {base: "rounded-none"},
      sm: {base: "rounded-sm"},
      md: {base: "rounded-md"},
      lg: {base: "rounded-lg"},
      xl: {base: "rounded-xl"},
    },
    placement: {
      auto: {
        wrapper: "items-end sm:items-center",
      },
      center: {
        wrapper: "items-center sm:items-center",
      },
      top: {
        wrapper: "items-start sm:items-start",
      },
      "top-center": {
        wrapper: "items-start sm:items-center",
      },
      bottom: {
        wrapper: "items-end sm:items-end",
      },
      "bottom-center": {
        wrapper: "items-end sm:items-center",
      },
    },
    shadow: {
      sm: {
        base: "shadow-small",
      },
      md: {
        base: "shadow-medium",
      },
      lg: {
        base: "shadow-large",
      },
    },
    backdrop: {
      transparent: {
        backdrop: "hidden",
      },
      opaque: {
        backdrop: "bg-overlay/50 backdrop-opacity-disabled",
      },
      blur: {
        backdrop: "backdrop-blur-md backdrop-saturate-150 bg-overlay/30",
      },
    },
    scrollBehavior: {
      normal: {
        base: "overflow-y-hidden",
      },
      inside: {
        base: "max-h-[calc(100%_-_7.5rem)]",
        body: "overflow-y-auto",
      },
      outside: {
        wrapper: "items-start sm:items-start overflow-y-auto",
        base: "my-16",
      },
    },
  },
  defaultVariants: {
    size: "sm",
    radius: "lg",
    shadow: "sm",
    placement: "auto",
    backdrop: "opaque",
    scrollBehavior: "normal",
    isDismissable: true,
  },
  compoundVariants: [
    // backdrop (opaque/blur)
    {
      backdrop: ["opaque", "blur"],
      class: {
        backdrop: "w-screen h-screen fixed inset-0",
      },
    },
    {
      isDismissable: false,
      class: {
        closeButton: "hidden",
      },
    },
  ],
});

export type ModalVariantProps = VariantProps<typeof modal>;
export type ModalSlots = keyof ReturnType<typeof modal>;

export {modal};
