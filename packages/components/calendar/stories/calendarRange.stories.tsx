import React from "react";
// @ts-ignore
import {Meta} from "@storybook/react";

import {CalendarRange} from "../src";

export default {
  title: "Components/CalendarRange",
  component: CalendarRange,
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
} as Meta<typeof CalendarRange>;

const defaultProps = {
  // ...calendar.defaultVariants,
};

// @ts-ignore
const Template = (args: any) => <CalendarRange aria-label="Event date" {...args} />;

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};
