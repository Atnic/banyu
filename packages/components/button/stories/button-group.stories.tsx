import React from "react";
// @ts-ignore
import {Meta} from "@storybook/react";
// @ts-ignore
import {button, buttonGroup} from "@jala-banyu/theme";
// @ts-ignore
import {JalaBiomass, JalaFeed, JalaHarvest} from "@muhamien/jala-icons";

import {Button, ButtonGroup, ButtonGroupProps} from "../src";

// @ts-ignore

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

// const VariantButtonTemplate = (args: ButtonGroupProps) => (
//   <ButtonGroup {...args}>
//     <Button color="primary" variant="solid">
//       Active
//     </Button>
//     <Button color="danger" variant="outline">
//       Middle
//     </Button>
//     <Button color="success" variant="outline">
//       Trailing
//     </Button>
//   </ButtonGroup>
// );
const VariantIconOnlyButtonTemplate = (args: ButtonGroupProps) => (
  <ButtonGroup {...args}>
    <Button>
      <JalaBiomass className="text-xl" />
    </Button>
    <Button>
      <JalaFeed className="text-xl" />
    </Button>
    <Button>
      <JalaHarvest className="text-xl" />
    </Button>
  </ButtonGroup>
);

const VariantIconButtonTemplate = (args: ButtonGroupProps) => (
  <ButtonGroup {...args}>
    <Button>
      <JalaBiomass className="text-xl" />
      Biomass
    </Button>
    <Button>
      <JalaFeed className="text-xl" />
      Feed
    </Button>
    <Button>
      <JalaHarvest className="text-xl" />
      Harvest
    </Button>
  </ButtonGroup>
);

// const VariantButtonsTemplate = (args: ButtonGroupProps) => (
//   <ButtonGroup {...args}>
//     <Button color="basic" size="md" variant="outline">
//       Active
//     </Button>
//     <Button isIconOnly color="basic" variant="outline">
//       <ChevronDownIcon className="text-xl" />
//     </Button>
//   </ButtonGroup>
// );

export const solid = {
  render: Template,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=418%3A74930&mode=dev",
    },
  },
  args: {
    ...defaultProps,
  },
};
export const outline = {
  render: Template,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=418%3A74930&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    variant: "outline",
  },
};
export const ghost = {
  render: Template,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=418%3A74930&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    variant: "ghost",
  },
};
export const iconOnly = {
  render: VariantIconOnlyButtonTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=418%3A74930&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    variant: "outline",
    color: "primary",
    isIconOnly: true,
  },
};

export const iconWithText = {
  render: VariantIconButtonTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=418%3A74930&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    children: "Button",
    variant: "outline",
    color: "basic",
    isIconOnly: true,
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
