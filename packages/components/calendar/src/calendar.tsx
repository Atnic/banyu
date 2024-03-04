import {ChevronLeft, ChevronRight} from "lucide-react";
import React from "react";
import {
  Calendar as AriaCalendar,
  CalendarGridHeader as AriaCalendarGridHeader,
  CalendarProps as AriaCalendarProps,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarHeaderCell,
  DateValue,
  Heading,
  Text,
  useLocale,
  Button as AriaButton,
} from "react-aria-components";
import {tv} from "tailwind-variants";

const cellStyles = tv({
  base: "w-9 h-9 text-sm cursor-default rounded-full flex items-center justify-center forced-color-adjust-none",
  variants: {
    isSelected: {
      false: "text-neutral-900 hover:bg-brand-100 pressed:bg-brand-200",
      true: "bg-blue-600 invalid:bg-red-600 text-white forced-colors:bg-danger forced-colors:invalid:bg-success forced-colors:text-[HighlightText]",
    },
    isDisabled: {
      true: "text-gray-300 forced-colors:text-[GrayText]",
    },
  },
});

export interface CalendarProps<T extends DateValue>
  extends Omit<AriaCalendarProps<T>, "visibleDuration"> {
  errorMessage?: string;
  date?: string;
}

export function Calendar<T extends DateValue>({errorMessage, ...props}: CalendarProps<T>) {
  return (
    <AriaCalendar {...props}>
      <CalendarHeader />
      <CalendarGrid>
        <CalendarGridHeader />
        <CalendarGridBody>
          {(date) => <CalendarCell className={cellStyles} date={date} />}
        </CalendarGridBody>
      </CalendarGrid>
      {errorMessage && (
        <Text className="text-sm text-red-600" slot="errorMessage">
          {errorMessage}
        </Text>
      )}
    </AriaCalendar>
  );
}

export function CalendarHeader() {
  let {direction} = useLocale();

  return (
    <header className="flex items-center gap-1 pb-4 px-1 w-[260px]">
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

export function CalendarGridHeader() {
  return (
    <AriaCalendarGridHeader>
      {(day) => (
        <CalendarHeaderCell className="text-xs text-gray-500 font-semibold">
          {day}
        </CalendarHeaderCell>
      )}
    </AriaCalendarGridHeader>
  );
}

Calendar.displayName = "Banyu.Calendar";

export default Calendar;
