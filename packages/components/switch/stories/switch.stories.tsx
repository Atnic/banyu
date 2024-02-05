/* eslint-disable react/display-name */
// @ts-ignore
import {Meta} from "@storybook/react";
import {toggle} from "@banyu/theme";

import {Switch} from "../src";

export default {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["default", "primary", "success", "warning", "danger"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    disableAnimation: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<typeof Switch>;

const defaultProps = {
  ...toggle.defaultVariants,
};

export const Default = {
  args: {
    ...defaultProps,
    defaultSelected: true,
  },
};

export const IsDisabled = {
  args: {
    ...defaultProps,
    isDisabled: true,
    defaultSelected: true,
  },
};
