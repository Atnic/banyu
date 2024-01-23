import React from "react";
// @ts-ignore
import {Meta} from "@storybook/react";
// @ts-ignore
import {button, buttonGroup} from "@banyu/theme";

import {Button, ButtonGroup, ButtonGroupProps} from "../src";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["solid", "outline", "ghost", "transparent", "white", "basic"],
    },
    color: {
      control: {
        type: "select",
      },
      options: ["primary", "danger", "success", "warning", "transparent", "white"],
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
    fullWidth: {
      control: {
        type: "boolean",
      },
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    // disableAnimation: {
    //   control: {
    //     type: "boolean",
    //   },
    // },
  },
} as Meta<typeof ButtonGroup>;

const defaultProps = {
  ...button.defaultVariants,
  ...buttonGroup.defaultVariants,
};

const Template = (args: ButtonGroupProps) => (
  <ButtonGroup {...args}>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </ButtonGroup>
);

const VariantButtonTemplate = (args: ButtonGroupProps) => (
  <ButtonGroup {...args}>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
    <Button variant="outline">Four</Button>
    <Button>Five</Button>
    <Button>Six</Button>
  </ButtonGroup>
);

const VariantButtonsTemplate = (args: ButtonGroupProps) => (
  <ButtonGroup {...args}>
    <Button color="success" variant="outline">
      One
    </Button>
    <Button color="success">Two</Button>
    <Button variant="outline">Three</Button>
    <Button variant="outline">Four</Button>
    <Button variant="outline">Five</Button>
    <Button variant="outline">Six</Button>
  </ButtonGroup>
);

export const Default = {
  render: Template,

  args: {
    ...defaultProps,
  },
};

export const VariantButton = {
  render: VariantButtonTemplate,

  args: {
    ...defaultProps,
    variant: "solid",
  },
};

export const VariantButtons = {
  render: VariantButtonsTemplate,

  args: {
    ...defaultProps,
    variant: "solid",
  },
};
