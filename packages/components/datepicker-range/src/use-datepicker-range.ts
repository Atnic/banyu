// import {ReactNode, useMemo, useState} from "react";
// import {
//   DateRangePickerProps as AriaDateRangePickerProps,
//   DateValue,
//   ValidationResult,
// } from "react-aria-components";
// import {ReactRef} from "@jala-banyu/react-utils";
// import {
//   datepickerrange,
//   DatePickerRangeSlots,
//   DatePickerRangeVariantProps,
//   SlotsToClasses,
// } from "@jala-banyu/theme";
//
// import {HTMLBanyuProps, mapPropsVariants, PropGetter} from "@jala-banyu/system/dist";
// import {clsx} from "@jala-banyu/shared-utils";
// import {mergeProps} from "@react-aria/utils";
// import {UseCalendarProps} from "@jala-banyu/calendar/src/use-calendar";
//
// interface Props<T extends DateValue> extends AriaDateRangePickerProps<T> {
//   /**
//    * Ref to the DOM node.
//    */
//   ref?: ReactRef<HTMLElement | null>;
//   /**
//    * Usually the Calendar parts, `CalendarHeader`, `CalendarBody` and `CalendarFooter`.
//    */
//   children?: ReactNode | ReactNode[];
//   /**
//    * Classname or List of classes to change the classNames of the element.
//    * if `className` is passed, it will be added to the base slot.
//    */
//   classNames?: SlotsToClasses<DatePickerRangeSlots>;
//   /**
//    *  Callback fired when the popover is closed.
//    */
//   onClose?: () => void;
//   label?: string;
//   placeholder?: string;
//   size?: string;
//   radius?: string;
//   isValid?: boolean;
//   isInvalid?: boolean;
//   description?: string;
//   errorMessage?: string | ((validation: ValidationResult) => string);
// }
//
// export type useDatePickerRangeProps<T extends DateValue> = Props<T> &
//   Omit<HTMLBanyuProps<"input">, keyof DatePickerRangeVariantProps>;
// export function useDatepickerRange<T extends DateValue>(originalProps: useDatePickerRangeProps<T>) {
//   const [props, variantProps] = mapPropsVariants(originalProps, datepickerrange.variantKeys);
//   const {classNames, ...otherProps} = props;
//
//   const slots = useMemo(
//     () =>
//       datepickerrange({
//         ...variantProps,
//       }),
//     [...Object.values(variantProps)],
//   );
//
//   return {
//     classNames,
//     slots,
//     ...otherProps,
//   };
// }
//
// export type UseDatepickerRangeReturn = ReturnType<typeof useDatepickerRange>;
//
// export class useDatePickerRange {}
