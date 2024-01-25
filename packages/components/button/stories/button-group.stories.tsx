import React from "react";
// @ts-ignore
import {Meta} from "@storybook/react";
// @ts-ignore
import {button, buttonGroup} from "@banyu/theme";
import {ChevronDownIcon, EyeIcon, MailIcon, SunIcon} from "@banyu/shared-icons";
import {Button, ButtonGroup, ButtonGroupProps} from "../src";
// @ts-ignore
import {JalaBiomass,JalaFeed,JalaHarvest} from "@muhamien/jala-icons";

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
    <Button>Active</Button>
    <Button>Middle</Button>
    <Button>Trailing</Button>
  </ButtonGroup>
);

const VariantButtonTemplate = (args: ButtonGroupProps) => (
  <ButtonGroup {...args}>
    <Button variant="solid" color="primary">Active</Button>
    <Button variant="outline" color="danger">Middle</Button>
    <Button variant="outline" color="success">Trailing</Button>
  </ButtonGroup>
);
const VariantIconOnlyButtonTemplate = (args: ButtonGroupProps) => (
  <ButtonGroup {...args}>
    <Button><JalaBiomass className="text-xl"/></Button>
    <Button><JalaFeed className="text-xl"/></Button>
    <Button><JalaHarvest className="text-xl"/></Button>
  </ButtonGroup>
);

const VariantIconButtonTemplate = (args: ButtonGroupProps) => (
  <ButtonGroup {...args}>
    <Button><JalaBiomass className="text-xl"/>Biomass</Button>
    <Button><JalaFeed className="text-xl"/>Feed</Button>
    <Button><JalaHarvest className="text-xl"/>Harvest</Button>
  </ButtonGroup>
);

const VariantButtonsTemplate = (args: ButtonGroupProps) => (
  <ButtonGroup {...args}>
    <Button color="basic" variant="outline" size="md">
      Active
    </Button>
    <Button color="basic" isIconOnly variant="outline">
      <ChevronDownIcon className="text-xl"/>
    </Button>
  </ButtonGroup>
);

export const solid = {
  render: Template,

  args: {
    ...defaultProps,
  },
};
export const outline = {
  render: Template,

  args: {
    ...defaultProps,
    variant: "outline",
  },
};
export const ghost = {
  render: Template,

  args: {
    ...defaultProps,
    variant: "ghost",
  },
};
export const iconOnly = {
  render: VariantIconOnlyButtonTemplate,

  args: {
    ...defaultProps,
    variant: "iconOnly",
    color: "primary",
    isIconOnly: true
  },
};

export const iconWithText = {
  render: VariantIconButtonTemplate,

  args: {
    ...defaultProps,
    children: "Button",
    variant: "outline",
    color: "basic",
  },
};

// export const VariantButton = {
//   render: VariantButtonTemplate,
//
//   args: {
//     ...defaultProps,
//     variant: "outline",
//   },
// };

// export const VariantButtons = {
//   render: VariantButtonsTemplate,
//
//   args: {
//     ...defaultProps,
//     variant: "outline",
//   },
// };
