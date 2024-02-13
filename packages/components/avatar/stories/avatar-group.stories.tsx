/* eslint-disable react/display-name */
import React from "react";
// @ts-ignore
import {Meta} from "@storybook/react";

import {Avatar, AvatarGroup, AvatarGroupProps} from "../src";

export default {
  title: "Components/AvatarGroup",
  component: AvatarGroup,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["solid", "soft"],
    },
    color: {
      control: {type: "select"},
      options: ["primary", "success", "warning", "danger", "dark", "gray"],
    },
    radius: {
      control: {type: "select"},
      options: ["none", "sm", "md", "lg", "full"],
    },
    size: {
      control: {type: "select"},
      options: ["sm", "md", "lg"],
    },
    spacing: {
      control: {
        disable: true,
      },
    },
  },
} as Meta<typeof AvatarGroup>;

const Template = (args: AvatarGroupProps) => (
  <AvatarGroup {...args}>
    <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026705d" />
    <Avatar color="primary" name="FI" variant="solid" />
    <Avatar color="danger" name="CR" variant="soft" />
    <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026706d" />
    <Avatar color="success" name="GG" variant="solid" />
    <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026707d" />
    <Avatar color="warning" name="AB" variant="soft" />
    <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />
    <Avatar color="primary" name="FI" variant="solid" />
    <Avatar color="danger" name="CR" variant="soft" />
    <Avatar color="success" name="GG" variant="solid" />
    <Avatar color="warning" name="AB" variant="soft" />
  </AvatarGroup>
);

const colorTemplate = (args: AvatarGroupProps) => (
  <AvatarGroup {...args}>
    <Avatar color="primary" name="MA" variant="solid" />
    <Avatar color="danger" name="NA" variant="soft" />
    <Avatar color="warning" name="AM" variant="solid" />
    <Avatar color="gray" name="DK" variant="soft" />
    <Avatar color="primary" name="SY" variant="solid" />
    <Avatar color="danger" name="RK" variant="soft" />
    <Avatar color="success" name="JH" variant="solid" />
    <Avatar color="gray" name="WA" variant="soft" />
    <Avatar color="primary" name="FI" variant="solid" />
    <Avatar color="danger" name="CR" variant="soft" />
    <Avatar color="success" name="GG" variant="solid" />
    <Avatar color="warning" name="AB" variant="soft" />
  </AvatarGroup>
);
const InitialTemplate = (args: AvatarGroupProps) => (
  <AvatarGroup {...args}>
    <Avatar name="J" />
    <Avatar name="A" />
    <Avatar name="L" />
    <Avatar name="A" />
    <Avatar name="M" />
    <Avatar name="E" />
    <Avatar name="N" />
    <Avatar name="D" />
    <Avatar name="U" />
  </AvatarGroup>
);

export const Default = {
  render: Template,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=2434%3A23413&mode=dev",
    },
  },
  args: {
    color: "primary",
  },
};

export const Bordered = {
  render: Template,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=2434%3A23413&mode=dev",
    },
  },
  args: {
    isBordered: true,
  },
};
export const White = {
  render: colorTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=2434%3A23413&mode=dev",
    },
  },
  args: {
    color: "gray",
    isBordered: true,
  },
};
export const Soft = {
  render: InitialTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=2434%3A23413&mode=dev",
    },
  },
  args: {
    max: 4,
    variant: "soft",
    color: "success",
    isBordered: true,
  },
};

export const Solid = {
  render: InitialTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=2434%3A23413&mode=dev",
    },
  },
  args: {
    max: 4,
    variant: "solid",
    color: "primary",
    isBordered: true,
  },
};
export const MixColor = {
  render: colorTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=2434%3A23413&mode=dev",
    },
  },
  args: {
    isBordered: true,
  },
};

export const Grid = {
  render: Template,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=2434%3A23413&mode=dev",
    },
  },
  args: {
    color: "primary",
    max: 7,
    isGrid: true,
  },
};
//
// export const isDisabled = {
//   render: Template,
//
//   args: {
//     color: "warning",
//     isBordered: true,
//     isDisabled: true,
//   },
// };
//
// export const WithMaxCount = {
//   render: Template,
//
//   args: {
//     color: "primary",
//     isBordered: true,
//     max: 3,
//   },
// };
//
// export const WithTotal = {
//   render: Template,
//
//   args: {
//     color: "primary",
//     isBordered: true,
//     max: 3,
//     total: 10,
//   },
// };
//
// export const CustomCount = {
//   render: Template,
//
//   args: {
//     color: "primary",
//     isBordered: true,
//     max: 3,
//     total: 10,
//     renderCount: (count: number) => (
//       <p className="text-sm text-black dark:text-white ms-2">+{count}</p>
//     ),
//   },
// };
