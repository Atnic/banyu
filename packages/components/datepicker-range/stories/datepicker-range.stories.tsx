import React from "react";
import {Meta} from "@storybook/react";
// import { datepicker } from "@jala-banyu/theme";

import {DatePickerRange, DatePickerRangeProps} from "../src";

export default {
  title: "Components/DatePickerRange",
  component: DatePickerRange,
  argTypes: {
    radius: {
      control: {type: "select"},
      options: ["none", "sm", "md", "lg", "full"],
    },
    size: {
      control: {type: "select"},
      options: ["sm", "md", "lg"],
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    isValid: {
      control: {
        type: "boolean",
      },
    },
    isInvalid: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<typeof DatePickerRange>;

const defaultProps = {
  // ...datepicker.defaultVariants,
  label: "Filter",
  placeholder: "Choose date",
  radius: "lg",
  size: "md",
};

const Template = (args: DatePickerRangeProps<any>) => (
  <div className="w-[400px]">
    <DatePickerRange {...args} />
  </div>
);

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};
