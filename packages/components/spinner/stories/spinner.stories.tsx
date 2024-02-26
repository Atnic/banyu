import React from "react";
import {Meta} from "@storybook/react";
import {spinner} from "@jala-banyu/theme";

import {Spinner} from "../src";

export default {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=589%3A107692&mode=dev",
    },
  },
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["current", "white", "primary", "success", "warning", "danger"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["xs", "sm", "md", "lg"],
    },
    isProgress: {
      control: {
        type: "boolean",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
    progress: {
      control: {
        type: "range",
        step: 10,
      },
      min: 0,
      max: 100,
    },
  },
  decorators: [
    (Story) => (
      <div className="ml-4">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Spinner>;

const defaultProps = {
  ...spinner.defaultVariants,
};

export const Default = {
  args: {
    ...defaultProps,
  },
};

export const WithLabel = {
  args: {
    ...defaultProps,
    label: "Loading...",
  },
};

export const CircularProgress = {
  args: {
    ...defaultProps,
    isProgress: true,
    progress: 50,
  },
};
