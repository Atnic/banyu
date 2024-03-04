import React from "react";
// @ts-ignore
import {Meta} from "@storybook/react";
import {calendar} from "@jala-banyu/theme";

import {Calendar} from "../src/calendar";

export default {
  title: "Components/Calendar",
  component: Calendar,
  argTypes: {
    color: {
      control: {type: "select"},
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
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
  },
} as Meta<typeof Calendar>;

const defaultProps = {
  ...calendar.defaultVariants,
};

// @ts-ignore
const Template = (args: any) => <Calendar aria-label="Event date" {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};
