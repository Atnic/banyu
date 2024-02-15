import type {CodeVariantProps} from "@jala-banyu/theme";
import type {HTMLBanyuProps, PropGetter} from "@jala-banyu/system-rsc";

import {code} from "@jala-banyu/theme";
import {mapPropsVariants} from "@jala-banyu/system-rsc";
import {ReactRef} from "@jala-banyu/react-utils";
import {useMemo} from "react";

export interface UseCodeProps extends HTMLBanyuProps<"code">, CodeVariantProps {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
}

export function useCode(originalProps: UseCodeProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, code.variantKeys);

  const {as, children, className, ...otherProps} = props;

  const Component = as || "code";

  const classNames = useMemo(
    () =>
      code({
        ...variantProps,
        className,
      }),
    [...Object.values(variantProps), className],
  );

  const getCodeProps: PropGetter = () => {
    return {
      className: classNames,
      ...otherProps,
    };
  };

  return {Component, children, getCodeProps};
}

export type UseCodeReturn = ReturnType<typeof useCode>;
