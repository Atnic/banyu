// import type { DatepickerVariantProps } from "@jala-banyu/theme";
//
// import {HTMLBanyuProps,mapPropsVariants} from "@jala-banyu/system";
// import { datepicker } from "@jala-banyu/theme";
// import {ReactRef, useDOMRef} from "@jala-banyu/react-utils";
// import {useMemo} from "react";
//
// interface Props extends HTMLBanyuProps<"div"> {
//   /**
//    * Ref to the DOM node.
//    */
//   ref?: ReactRef<HTMLElement | null>;
// }
//
// export type UseDatepickerProps = Props & DatepickerVariantProps;
//
// export function useDatepicker(originalProps: UseDatepickerProps) {
//   const [props, variantProps] = mapPropsVariants(originalProps, datepicker.variantKeys);
//
//   const {ref, as, className, ...otherProps} = props;
//
//   const Component = as || "div";
//
//   const domRef = useDOMRef(ref);
//
//   const styles = useMemo(
//   () =>
//     datepicker({
//       ...variantProps,
//       className,
//     }),
//   [...Object.values(variantProps), className],
// );
//
//   return {Component, styles, domRef, ...otherProps};
// }
//
// export type UseDatepickerReturn = ReturnType<typeof useDatepicker>;
// @ts-ignore
