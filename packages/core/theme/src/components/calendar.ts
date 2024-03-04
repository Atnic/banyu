import type {VariantProps} from "tailwind-variants";

import {tv} from "../utils/tv";

const calendar = tv({
  slots: {
    base: "outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] outline-offset-2 w-9 h-9 text-sm cursor-default rounded-full flex items-center justify-center forced-color-adjust-none",
    header: "",
    body: "",
    grid: "",
    cell: "",
  },
  variants: {
    isFocusVisible: {
      false: "outline-0",
      true: "outline-2",
    },
    isSelected: {
      false:
        "text-zinc-900 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-700 pressed:bg-gray-200 dark:pressed:bg-zinc-600",
      true: "bg-blue-600 invalid:bg-red-600 text-white forced-colors:bg-[Highlight] forced-colors:invalid:bg-[Mark] forced-colors:text-[HighlightText]",
    },
    isDisabled: {
      true: "text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText]",
    },
  },
});

export type CalendarVariantProps = VariantProps<typeof calendar>;
export type CalendarSlots = keyof VariantProps<typeof calendar>;
export type CalendarReturnType = ReturnType<typeof calendar>;

export {calendar};
