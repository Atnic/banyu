// import type {FileuploadVariantProps} from "@jala-banyu/theme";
//
// import {HTMLBanyuProps, mapPropsVariants} from "@jala-banyu/system";
// // import { fileupload } from "@jala-banyu/theme";
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
// export type UseFileuploadProps = Props & FileuploadVariantProps;
//
// export function useFileupload(originalProps: UseFileuploadProps) {
//   const [props, variantProps] = mapPropsVariants(originalProps, fileupload.variantKeys);
//
//   const {ref, as, className, ...otherProps} = props;
//
//   const Component = as || "div";
//
//   const domRef = useDOMRef(ref);
//
//   const styles = useMemo(
//     () =>
//       fileupload({
//         ...variantProps,
//         className,
//       }),
//     [...Object.values(variantProps), className],
//   );
//
//   return {Component, styles, domRef, ...otherProps};
// }
//
// export type UseFileuploadReturn = ReturnType<typeof useFileupload>;
