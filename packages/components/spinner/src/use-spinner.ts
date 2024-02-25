import type {SpinnerVariantProps, SpinnerSlots, SlotsToClasses} from "@jala-banyu/theme";
import type {HTMLBanyuProps, PropGetter} from "@jala-banyu/system-rsc";

import {mapPropsVariants} from "@jala-banyu/system-rsc";
import {spinner} from "@jala-banyu/theme";
import {clsx} from "@jala-banyu/shared-utils";
import {useMemo, useCallback, Ref} from "react";

interface Props extends HTMLBanyuProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: Ref<HTMLElement | null>;
  /**
   * Spinner label, in case you passed it will be used as `aria-label`.
   */
  label?: string;
  /**
   * If `true` the spinner will act as a progress spinner.
   */
  isProgress?: boolean;
  /**
   * Progress value from 0 to 100.
   */
  progress?: number;
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <Spinner classNames={{
   *    base:"base-classes",
   *    wrapper: "wrapper-classes",
   *    circle: "circle-classes",
   *    circleBackground: "circle-background-classes",
   *    label: "label-classes"
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<SpinnerSlots>;
}

export type UseSpinnerProps = Props & SpinnerVariantProps;

export function useSpinner(originalProps: UseSpinnerProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, spinner.variantKeys);

  const {children, className, progress, classNames, label: labelProp, ...otherProps} = props;

  const slots = useMemo(
    () => spinner({...variantProps, isProgress: progress !== undefined}),
    [...Object.values(variantProps), progress],
  );

  const baseStyles = clsx(classNames?.base, className);

  const label = labelProp || children;

  const ariaLabel = useMemo(() => {
    if (label && typeof label === "string") {
      return label;
    }

    return !otherProps["aria-label"] ? "Loading" : "";
  }, [children, label, otherProps["aria-label"]]);

  const getSpinnerProps = useCallback<PropGetter>(
    () => ({
      "aria-label": ariaLabel,
      className: slots.base({
        class: baseStyles,
      }),
      ...otherProps,
    }),
    [ariaLabel, slots, baseStyles, otherProps],
  );

  return {label, slots, progress, classNames, getSpinnerProps};
}

export type UseSpinnerReturn = ReturnType<typeof useSpinner>;
