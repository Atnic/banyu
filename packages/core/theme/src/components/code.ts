import type {VariantProps} from "tailwind-variants";

import {tv} from "../utils/tv";
import {colorVariants} from "../utils";

/**
 * Code wrapper **Tailwind Variants** component
 *
 * const classNames = code({...})
 *
 * @example
 * <code className={classNames)}>
 *   npm install @banyu/react
 * </code>
 */
const code = tv({
  base: ["px-2", "py-1", "h-fit", "font-mono", "font-normal", "inline-block", "whitespace-nowrap"],
  variants: {
    color: {
      primary: colorVariants.solid.primary,
      success: colorVariants.solid.success,
      warning: colorVariants.solid.warning,
      critical: colorVariants.solid.danger,
      transparent: colorVariants.solid.transparent,
      white: colorVariants.solid.white,
    },
    size: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "sm",
    radius: "sm",
  },
});

export type CodeVariantProps = VariantProps<typeof code>;

export {code};
