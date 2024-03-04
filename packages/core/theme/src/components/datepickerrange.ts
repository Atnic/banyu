import type {VariantProps} from "tailwind-variants";

import {tv} from "../utils/tv";

/**
 * Card **Tailwind Variants** component
 *
 * @example
 * ```js
 * const {base, header, body, footer} = card({...})
 *
 * <div className={base()}>
 *    <div className={header()}>Header</div>
 *    <div className={body()}>Body</div>
 *    <div className={footer()}>Footer</div>
 * </div>
 * ```
 */
const datepickerrange = tv({
  slots: {
    base: [],
    header: [],
    body: [],
    grid: [],
  },
  variants: {},
  compoundVariants: [],
  defaultVariants: {
    label: "label",
    description: "",
    placeholder: "Choose Dates",
    errorMessage: "",
    size: "md",
    radius: "lg",
    isValid: false,
    isInvalid: false,
  },
});

export type DatePickerRangeVariantProps = VariantProps<typeof datepickerrange>;
export type DatePickerRangeSlots = keyof ReturnType<typeof datepickerrange>;
export type DatePickerRangeReturnType = ReturnType<typeof datepickerrange>;

export {datepickerrange};
