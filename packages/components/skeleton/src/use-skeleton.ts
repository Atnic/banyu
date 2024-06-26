import type {SkeletonVariantProps, SkeletonSlots, SlotsToClasses} from "@jala-banyu/theme";
import type {HTMLBanyuProps, PropGetter} from "@jala-banyu/system-rsc";

import {mapPropsVariants} from "@jala-banyu/system-rsc";
import {skeleton} from "@jala-banyu/theme";
import {clsx, dataAttr} from "@jala-banyu/shared-utils";
import {useMemo, Ref} from "react";

interface Props extends HTMLBanyuProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: Ref<HTMLElement | null>;
  /**
   * The skeleton will be visible while isLoading is `false`.
   * @default false
   */
  isLoaded?: boolean;
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <Skeleton classNames={{
   *    base:"base-classes", // skeleton wrapper
   *    content: "content-classes", // children wrapper
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<SkeletonSlots>;
  /** An accessibility label for this item. */
  "aria-label"?: string;
}

export type UseSkeletonProps = Props & SkeletonVariantProps;

export function useSkeleton(originalProps: UseSkeletonProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, skeleton.variantKeys);

  const {as, children, isLoaded = false, className, classNames, ...otherProps} = props;

  const Component = as || "div";

  const slots = useMemo(
    () =>
      skeleton({
        ...variantProps,
      }),
    [...Object.values(variantProps), children],
  );

  const baseStyles = clsx(classNames?.base, className);

  const getSkeletonProps: PropGetter = (props = {}) => {
    return {
      "data-loaded": dataAttr(isLoaded),
      className: slots.base({class: clsx(baseStyles, props?.className)}),
      ...otherProps,
    };
  };

  const getContentProps: PropGetter = (props = {}) => {
    return {
      className: slots.content({class: clsx(classNames?.content, props?.className)}),
    };
  };

  return {Component, children, slots, classNames, getSkeletonProps, getContentProps};
}

export type UseSkeletonReturn = ReturnType<typeof useSkeleton>;
