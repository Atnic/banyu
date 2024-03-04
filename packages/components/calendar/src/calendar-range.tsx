import React from "react";
import {
  RangeCalendar as AriaRangeCalendar,
  RangeCalendarProps as AriaRangeCalendarProps,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  DateValue,
  Text,
  useLocale,
  Button as AriaButton,
  Heading,
} from "react-aria-components";
import {tv} from "tailwind-variants";
import {ChevronLeft, ChevronRight} from "lucide-react";

import {CalendarGridHeader} from "./calendar";

export interface RangeCalendarProps<T extends DateValue>
  extends Omit<AriaRangeCalendarProps<T>, "visibleDuration"> {
  errorMessage?: string;
}

const cell = tv({
  // extend: focusRing,
  base: "w-full h-full flex items-center justify-center rounded-full forced-color-adjust-none text-neutral-900",
  variants: {
    selectionState: {
      wrapper: [
        "group",
        "w-9",
        "h-9",
        "text-sm",
        "outline",
        "outline-0",
        "cursor-default",
        "rounded-none",
        "data-[outside-month='true']:hidden",
        "data-[selected='true']:data-[outside-month='true']:text-gray-300",
        "data-[selected='true']:data-[outside-month='true']:bg-transparent",
        "data-[selected='true']:bg-neutral-300",
        // "dark:data-[selected='true']:bg-blue-700/30",
        // "data-[forced-colors='true']:data-[selected='true']:bg-[Highlight]",
        "data-[invalid='true']:data-[selected='true']:bg-red-100",
        // "dark:data-[invalid='true']:data-[selected='true']:bg-red-700/30",
        // "forced-colors:data-[invalid='true']:data-[selected='true']:bg-[Mark]",
        "data-[selection-end='true']:[td:first-child_&]:rounded-s-full",
        "data-[selection-end='true']:[td:last-child_&]:rounded-e-full",
        "data-[selection-start='true']:rounded-s-full",
        "data-[selection-end='true']:rounded-e-full",
      ],
      none: "group-hover:bg-neutral-100 group-pressed:bg-danger-800 rounded-full",
      middle: [
        "group-hover:bg-brand-200 forced-colors:group-hover:bg-brand-200",
        "group-invalid:group-hover:bg-red-200 forced-colors:group-invalid:group-hover:bg-brand-200",
        "group-pressed:bg-brand-300 forced-colors:group-pressed:bg-brand-500 forced-colors:text-white",
        "group-invalid:group-pressed:bg-red-300 forced-colors:group-invalid:group-pressed:bg-danger-200",
      ],
      cap: "bg-brand-600 group-invalid:bg-red-600 forced-colors:bg-brand-200 forced-colors:group-invalid:bg-danger-200 text-white forced-colors:text-white",
    },
    isDisabled: {
      true: "text-neutral-300 forced-colors:text-neutral",
    },
    isFocusVisible: {
      false: "outline-0",
      true: "outline-2 outline outline-brand-600 forced-colors:outline-brand-200 outline-offset-2",
    },
  },
});

export function CalendarRange<T extends DateValue>({
  errorMessage,
  ...props
}: RangeCalendarProps<T>) {
  // @ts-ignore
  return (
    <AriaRangeCalendar {...props} visibleDuration={{months: 2}}>
      <CalendarHeader />
      <div className="flex gap-4">
        <CalendarGrid className="[&_td]:px-0">
          <CalendarGridHeader />
          <CalendarGridBody>
            {(date) => (
              <CalendarCell
                className={cell({
                  selectionState: "wrapper",
                })}
                date={date}
              >
                {({
                  formattedDate,
                  isSelected,
                  isSelectionStart,
                  isSelectionEnd,
                  isFocusVisible,
                  isDisabled,
                }) => (
                  <span
                    className={cell({
                      selectionState:
                        isSelected && (isSelectionStart || isSelectionEnd)
                          ? "cap"
                          : isSelected
                          ? "middle"
                          : "none",
                      isDisabled,
                      isFocusVisible,
                    })}
                  >
                    {formattedDate}
                  </span>
                )}
              </CalendarCell>
            )}
          </CalendarGridBody>
        </CalendarGrid>
        <CalendarGrid className="[&_td]:px-0" offset={{months: 1}}>
          <CalendarGridHeader />
          <CalendarGridBody>
            {(date) => (
              <CalendarCell
                className={cell({
                  selectionState: "wrapper",
                })}
                date={date}
              >
                {({
                  formattedDate,
                  isSelected,
                  isSelectionStart,
                  isSelectionEnd,
                  isFocusVisible,
                  isDisabled,
                }) => (
                  <span
                    className={cell({
                      selectionState:
                        isSelected && (isSelectionStart || isSelectionEnd)
                          ? "cap"
                          : isSelected
                          ? "middle"
                          : "none",
                      isDisabled,
                      isFocusVisible,
                    })}
                  >
                    {formattedDate}
                  </span>
                )}
              </CalendarCell>
            )}
          </CalendarGridBody>
        </CalendarGrid>
      </div>
      {errorMessage && (
        <Text className="text-sm text-red-600" slot="errorMessage">
          {errorMessage}
        </Text>
      )}
    </AriaRangeCalendar>
  );
}

export function CalendarHeader() {
  let {direction} = useLocale();

  return (
    <header className="flex items-center gap-1 pb-4 px-1 w-[520px]">
      <AriaButton slot="previous">
        {direction === "rtl" ? <ChevronRight aria-hidden /> : <ChevronLeft aria-hidden />}
      </AriaButton>
      <Heading className="flex-1 font-semibold text-md text-center mx-2 !text-neutral-900" />
      <AriaButton slot="next">
        {direction === "rtl" ? <ChevronLeft aria-hidden /> : <ChevronRight aria-hidden />}
      </AriaButton>
    </header>
  );
}

CalendarRange.displayName = "Banyu.CalendarRange";

export default CalendarRange;
