import {CalendarRange as CalendarRangeIcon} from "lucide-react";
import React from "react";
import {
  DatePicker as AriaDatePicker,
  DateRangePickerProps as AriaDateRangePickerProps,
  DateValue,
  ValidationResult,
} from "react-aria-components";
import {CalendarRange} from "@jala-banyu/calendar";
import {Input} from "@jala-banyu/input";
import {Popover, PopoverTrigger, PopoverContent} from "@jala-banyu/popover";

export interface DatePickerRangeProps<T extends DateValue> extends AriaDateRangePickerProps<T> {
  label?: string;
  placeholder?: string;
  size?: string;
  radius?: string;
  description?: string;
  isValid?: boolean;
  isInvalid?: boolean;
  errorMessage?: string | ((validation: ValidationResult) => string);
}
function DatePickerRange<T extends DateValue>({
  label,
  description,
  placeholder = "Label",
  size = "md",
  radius = "lg",
  isValid = false,
  isInvalid = false,
  errorMessage = "error",
  ...props
}: DatePickerRangeProps<T>) {
  const [range, setRange] = React.useState();

  let value = !!range?.start && !!range?.end ? `${range?.start} - ${range?.end}` : "";

  return (
    <AriaDatePicker {...props}>
      <Popover placement="bottom-start">
        <PopoverTrigger className="p-0">
          <div>
            <Input
              className="flex-1 min-w-[150px] px-2 py-1.5 text-sm !text-left p-0"
              description={description}
              errorMessage={errorMessage}
              isInvalid={isInvalid}
              isValid={isValid}
              label={label}
              placeholder={placeholder}
              radius={radius}
              size={size}
              startIcon={<CalendarRangeIcon aria-hidden className="w-4 h-4 text-neutral-800" />}
              value={value}
              onClear={setRange}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="p-4 rounded-lg Smt-0">
          <CalendarRange value={range} onChange={setRange} />
        </PopoverContent>
      </Popover>
    </AriaDatePicker>
  );
}

DatePickerRange.displayName = "Banyu.DatePickerRange";

export default DatePickerRange;
