import React from "react";
import {Meta} from "@storybook/react";
// import { datepicker } from "@jala-banyu/theme";

import {DatePicker, DatePickerProps} from "../src";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
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
} as Meta<typeof DatePicker>;

const defaultProps = {
  // ...datepicker.defaultVariants,
  label: "Datepicker",
  placeholder: "Choose date",
  radius: "lg",
  size: "md",
};

const Template = (args: DatePickerProps<any>) => (
  <div className="w-[400px]">
    <DatePicker {...args} />
  </div>
);

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};
