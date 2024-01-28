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
    <Avatar variant="solid" color="primary" name="FI" />
    <Avatar variant="soft" color="danger" name="CR" />
    <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026706d" />
    <Avatar variant="solid" color="success" name="GG" />
    <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026707d" />
    <Avatar variant="soft" color="warning" name="AB" />
    <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />
    <Avatar variant="solid" color="primary" name="FI" />
    <Avatar variant="soft" color="danger" name="CR" />
    <Avatar variant="solid" color="success" name="GG" />
    <Avatar variant="soft" color="warning" name="AB" />
  </AvatarGroup>
);

const colorTemplate = (args: AvatarGroupProps) => (
  <AvatarGroup {...args}>
    <Avatar variant="solid" color="primary" name="MA" />
    <Avatar variant="soft" color="danger" name="NA" />
    <Avatar variant="solid" color="warning" name="AM" />
    <Avatar variant="soft" color="gray" name="DK" />
    <Avatar variant="solid" color="primary" name="SY" />
    <Avatar variant="soft" color="danger" name="RK" />
    <Avatar variant="solid" color="success" name="JH" />
    <Avatar variant="soft" color="gray" name="WA" />
    <Avatar variant="solid" color="primary" name="FI" />
    <Avatar variant="soft" color="danger" name="CR" />
    <Avatar variant="solid" color="success" name="GG" />
    <Avatar variant="soft" color="warning" name="AB" />
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

  args: {
    color: "primary",
  },
};

export const Bordered = {
    render: Template,

    args: {
        isBordered: true,
    },
};
export const White = {
    render: colorTemplate,

    args: {
        color: "gray",
        isBordered: true,
    },
};
export const Soft = {
    render: InitialTemplate,

    args: {
        max: 4,
        variant: "soft",
        color: "success",
        isBordered: true,
    },
};

export const Solid = {
    render: InitialTemplate,

    args: {
        max: 4,
        variant: "solid",
        color: "primary",
        isBordered: true,
    },
};
export const MixColor = {
    render: colorTemplate,

    args: {
        isBordered: true,
    },
};

export const Grid = {
    render: Template,

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
