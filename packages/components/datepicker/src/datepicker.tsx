import {CalendarIcon} from "lucide-react";
import React from "react";
import {
  DatePicker as AriaDatePicker,
  DatePickerProps as AriaDatePickerProps,
  DateValue,
  ValidationResult,
} from "react-aria-components";
import {Calendar} from "@jala-banyu/calendar";
import {Input} from "@jala-banyu/input";
import {Popover, PopoverTrigger, PopoverContent} from "@jala-banyu/popover";

export interface DatePickerProps<T extends DateValue> extends AriaDatePickerProps<T> {
  label?: string;
  placeholder?: string;
  size?: string;
  radius?: string;
  description?: string;
  isValid?: boolean;
  isInvalid?: boolean;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

function DatePicker<T extends DateValue>({
  label,
  description,
  placeholder,
  size = "md",
  radius = "lg",
  isValid = false,
  isInvalid = false,
  errorMessage,
  ...props
}: DatePickerProps<T>) {
  const [date, setDate] = React.useState();

  return (
    <AriaDatePicker {...props}>
      <Popover placement="bottom-start">
        <PopoverTrigger className="p-0">
          <div>
            <Input
              className="flex-1 min-w-[150px] px-2 py-1.5 text-sm !text-left p-0"
              isInvalid={isInvalid}
              isValid={isValid}
              label={label}
              placeholder={placeholder}
              radius={radius}
              size={size}
              startIcon={<CalendarIcon aria-hidden className="w-4 h-4 text-neutral-800" />}
              value={date}
              onClear={setDate}
            />
            {description && <span>{description}</span>}
            <span className="text-danger">{errorMessage}</span>
          </div>
        </PopoverTrigger>
        <PopoverContent className="p-4 rounded-lg mt-0">
          <Calendar value={date} onChange={setDate} />
        </PopoverContent>
      </Popover>
    </AriaDatePicker>
  );
}

DatePicker.displayName = "Banyu.DatePicker";

export default DatePicker;
