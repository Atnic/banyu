import type {KbdVariantProps, KbdSlots, SlotsToClasses} from "@banyu/theme";
import type {HTMLBanyuProps, PropGetter} from "@banyu/system-rsc";

import {mapPropsVariants} from "@banyu/system-rsc";
import {kbd} from "@banyu/theme";
import {clsx} from "@banyu/shared-utils";
import {ReactRef} from "@banyu/react-utils";
import {useMemo} from "react";

import {KbdKey} from "./utils";

interface Props extends HTMLBanyuProps<"kbd"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * The key or keys to be displayed.
   */
  keys?: KbdKey | KbdKey[];
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <Kbd classNames={{
   *    base:"base-classes",
   *    abbr: "abbr-classes", // the key wrapper
   *    content: "content-classes", // the children wrapper
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<KbdSlots>;
}

export type UseKbdProps = Props & KbdVariantProps;

export function useKbd(originalProps: UseKbdProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, kbd.variantKeys);

  const {as, children, className, keys, title, classNames, ...otherProps} = props;

  const Component = as || "kbd";

  const slots = useMemo(
    () =>
      kbd({
        ...variantProps,
      }),
    [...Object.values(variantProps)],
  );

  const baseStyles = clsx(classNames?.base, className);

  const keysToRender = typeof keys === "string" ? [keys] : Array.isArray(keys) ? keys : [];

  const getKbdProps: PropGetter = (props = {}) => ({
    ...otherProps,
    ...props,
    className: clsx(slots.base({class: clsx(baseStyles, props.className)})),
  });

  return {Component, slots, classNames, title, children, keysToRender, getKbdProps};
}

export type UseKbdReturn = ReturnType<typeof useKbd>;
