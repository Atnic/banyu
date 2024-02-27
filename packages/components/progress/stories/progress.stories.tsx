import React from "react";
import {Meta} from "@storybook/react";
import {progress} from "@jala-banyu/theme";

import {Progress, ProgressProps} from "../src";

export default {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=1741%3A109259&mode=dev",
    },
  },
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["default", "primary", "success", "warning", "danger"],
    },
    radius: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg", "full"],
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
    floatingLabel: {
      control: {
        type: "boolean",
      },
    },
    floatingLabelPlacement: {
      control: {
        type: "select",
      },
      options: ["top", "bottom"],
    },
    value: {
      control: {
        type: "range",
        step: 10,
      },
    },
  },
} as Meta<typeof Progress>;

const defaultProps = {
  ...progress.defaultVariants,
  value: 55,
};

const Template = (args: ProgressProps) => (
  <div className="max-w-[400px]">
    <Progress {...args} />
  </div>
);

const IntervalTemplate = (args: ProgressProps) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-[400px]">
      <Progress {...args} value={value} />
    </div>
  );
};

export const Default = {
  render: Template,

  args: {
    ...defaultProps,
    "aria-label": "Loading...",
  },
};

export const WithLabel = {
  render: Template,

  args: {
    ...defaultProps,
    label: "Loading...",
  },
};

export const WithValueLabel = {
  render: IntervalTemplate,

  args: {
    ...defaultProps,
    label: "Downloading...",
    color: "success",
    showValueLabel: true,
  },
};

export const WithFloatingLabel = {
  render: Template,

  args: {
    ...defaultProps,
    label: "Loading...",
    floatingLabel: true,
    floatingLabelPlacement: "top",
  },
};

export const WithValueFormatting = {
  render: Template,

  args: {
    ...defaultProps,
    label: "Loading...",
    showValueLabel: true,
    formatOptions: {style: "currency", currency: "ARS"},
  },
};

export const Indeterminate = {
  render: Template,

  args: {
    ...defaultProps,
    size: "xs",
    radius: "none",
    isIndeterminate: true,
  },
};

export const Striped = {
  render: Template,

  args: {
    ...defaultProps,
    isStriped: true,
  },
};
