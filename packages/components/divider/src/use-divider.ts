import type {DividerSlots, DividerVariantProps, SlotsToClasses} from "@jala-banyu/theme";
import type {HTMLBanyuProps, PropGetter} from "@jala-banyu/system-rsc";

import {divider} from "@jala-banyu/theme";
import {Ref, useCallback, useMemo} from "react";

import {SeparatorProps as AriaSeparatorProps} from "./use-separator";

interface Props extends HTMLBanyuProps<"hr"> {
  /**
   * Ref to the DOM node.
   */
  ref?: Ref<HTMLElement> | undefined;
  /**
   * The label to be announced to screen readers.
   */
  label?: string;
  /**
   * The position of the label in relation to the divider.
   */
  labelPosition?: "start" | "middle" | "end";
  /**
   * Classname or List of classes to change the classNames of the element.
   */
  classNames?: SlotsToClasses<DividerSlots>;
  /** An accessibility label for this item. */
  "aria-label"?: string;
}

export type UseDividerProps = Props & DividerVariantProps & Omit<AriaSeparatorProps, "elementType">;

export function useDivider(props: UseDividerProps) {
  const {label, labelPosition, className, classNames, orientation, ...otherProps} = props;

  let Component = "div";

  labelPosition === undefined ? "middle" : labelPosition;

  const styles = useMemo(
    () =>
      divider({
        orientation,
        className,
      }),
    [orientation, className],
  );

  const getWrapperProps: PropGetter = useCallback(
    (props = {}) => {
      return {
        className: styles.base({class: classNames?.base}),
        role: "separator",
        "data-orientation": orientation,
        ...otherProps,
        ...props,
      };
    },
    [styles, orientation, otherProps],
  );

  const getDividerProps: PropGetter = useCallback(
    (props = {}) => {
      return {
        className: styles.divider({class: classNames?.divider}),
        role: "separator",
        "data-orientation": orientation,
        ...otherProps,
        ...props,
      };
    },
    [styles, orientation, otherProps],
  );

  const getLabelProps: PropGetter = useCallback(
    (props = {}) => {
      return {
        "data-slot": "label",
        className: styles.label({class: classNames?.label}),
        ...props,
      };
    },
    [styles, classNames],
  );

  return {
    Component,
    label,
    labelPosition,
    classNames,
    getLabelProps,
    getWrapperProps,
    getDividerProps,
  };
}

export type UseDividerReturn = ReturnType<typeof useDivider>;
