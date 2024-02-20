import type {VariantProps} from "tailwind-variants";

import {tv} from "../utils/tv";

/**
 * Divider wrapper **Tailwind Variants** component
 *
 * @example
 *
 * const styles = divider()
 *
 * <span className={styles} />
 */
const divider = tv({
  base: "flex data-[orientation=vertical]:flex-col h-full items-center",
  slots: {
    label: "flex-shrink text-sm text-neutral-800",
    divider: "flex-grow border-divider",
  },
  variants: {
    orientation: {
      horizontal: "",
      vertical: "",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
  compoundVariants: [
    {
      orientation: "vertical",
      class: {
        label: "my-2",
        divider: "border-l",
      },
    },
    {
      orientation: "horizontal",
      class: {
        label: "mx-2",
        divider: "border-t",
      },
    },
  ],
});

export type DividerVariantProps = VariantProps<typeof divider>;
export type DividerSlots = keyof ReturnType<typeof divider>;

export {divider};
