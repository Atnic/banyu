import type {CalendarSlots, CalendarVariantProps} from "@jala-banyu/theme";

import {HTMLBanyuProps, mapPropsVariants, PropGetter} from "@jala-banyu/system/dist";
import {calendar, SlotsToClasses} from "@jala-banyu/theme";
import {ReactRef} from "@jala-banyu/react-utils";
import {clsx} from "@jala-banyu/shared-utils";
import {useMemo, ReactNode} from "react";
// @ts-ignore
import {mergeProps} from "@react-aria/utils";

interface Props extends HTMLBanyuProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * Usually the Calendar parts, `CalendarHeader`, `CalendarBody` and `CalendarFooter`.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   */
  classNames?: SlotsToClasses<CalendarSlots>;
}

export type UseCalendarProps = Props & CalendarVariantProps;

export function useCalendar(originalProps: UseCalendarProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, calendar.variantKeys);
  const {classNames, ...otherProps} = props;

  const slots = useMemo(
    () =>
      calendar({
        ...variantProps,
      }),
    [...Object.values(variantProps)],
  );

  const getCalendarProps: PropGetter = (props = {}) => ({
    className: slots.base({class: clsx(slots?.base, props.className)}),
    ...mergeProps({...originalProps}),
  });

  const getCalendarHeaderProps: PropGetter = (props = {}) => ({
    className: slots.header({class: clsx(slots?.header, props.className)}),
    ...mergeProps({...originalProps}),
  });

  const getCalendarBodyProps: PropGetter = (props = {}) => ({
    className: slots.body({class: clsx(slots?.body, props.className)}),
    ...mergeProps({...originalProps}),
  });

  const getCalendarGridProps: PropGetter = (props = {}) => ({
    className: slots.grid({class: clsx(slots?.grid, props.className)}),
    ...mergeProps({...originalProps}),
  });

  const getCalendarCellProps: PropGetter = (props = {}) => ({
    className: slots.header({class: clsx(slots?.header, props.className)}),
    ...mergeProps({...originalProps}),
  });

  return {
    classNames,
    getCalendarProps,
    getCalendarHeaderProps,
    getCalendarBodyProps,
    getCalendarGridProps,
    getCalendarCellProps,
    ...otherProps,
  };
}

export type UseCalendarReturn = ReturnType<typeof useCalendar>;
