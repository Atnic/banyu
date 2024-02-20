import React from "react";
import {Meta} from "@storybook/react";
import {checkbox} from "@jala-banyu/theme";

import {CheckboxGroup, Checkbox, CheckboxGroupProps} from "../src";

export default {
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=654%3A92089&mode=dev",
    },
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["solid", "soft"],
    },
    color: {
      control: {
        type: "select",
      },
      options: ["primary", "success", "warning", "danger", "transparent", "white", "basic"],
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
    lineThrough: {
      control: {
        type: "boolean",
      },
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<typeof Checkbox>;

const defaultProps = {
  ...checkbox.defaultVariants,
};

const Template = (args: CheckboxGroupProps) => (
  <CheckboxGroup {...args}>
    <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
    <Checkbox value="sydney">Sydney</Checkbox>
    <Checkbox value="san-francisco">San Francisco</Checkbox>
    <Checkbox value="london">London</Checkbox>
    <Checkbox value="tokyo">Tokyo</Checkbox>
  </CheckboxGroup>
);

const InvalidTemplate = (args: CheckboxGroupProps) => {
  const [isInvalid, setIsInvalid] = React.useState(true);

  return (
    <>
      <CheckboxGroup
        {...args}
        isRequired
        description="Select the cities you want to visit"
        isInvalid={isInvalid}
        label="Select cities"
        onValueChange={(value) => {
          setIsInvalid(value.length < 1);
        }}
      >
        <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
        <Checkbox value="sydney">Sydney</Checkbox>
        <Checkbox value="san-francisco">San Francisco</Checkbox>
        <Checkbox value="london">London</Checkbox>
        <Checkbox value="tokyo">Tokyo</Checkbox>
      </CheckboxGroup>
    </>
  );
};

export const Default = {
  render: Template,

  args: {
    ...defaultProps,
  },
};

export const WithLabel = {
  render: Template,

  args: {
    label: "Select cities",
  },
};

export const DefaultValue = {
  render: Template,

  args: {
    ...defaultProps,
    label: "Select cities",
    defaultValue: ["buenos-aires", "london"],
  },
};

export const Horizontal = {
  render: Template,

  args: {
    label: "Select cities",
    orientation: "horizontal",
  },
};

export const IsDisabled = {
  render: Template,

  args: {
    label: "Select cities",
    isDisabled: true,
  },
};

export const LineThrough = {
  render: Template,

  args: {
    label: "Select cities",
    lineThrough: true,
  },
};

export const WithDescription = {
  render: Template,

  args: {
    ...defaultProps,
    description: "Select the cities you want to visit",
  },
};

export const IsInvalid = {
  render: InvalidTemplate,

  args: {
    ...defaultProps,
  },
};

export const WithErrorMessage = {
  render: Template,

  args: {
    ...defaultProps,
    errorMessage: "The selected cities cannot be visited at the same time",
  },
};

export const DisableAnimation = {
  render: Template,

  args: {
    label: "Select cities",
    disableAnimation: true,
  },
};
