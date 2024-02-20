import React from "react";
// @ts-ignore
import {Meta} from "@storybook/react";
import {chip} from "@jala-banyu/theme";
import {Avatar} from "@jala-banyu/avatar";
import {CheckIcon} from "@jala-banyu/shared-icons";

import {Chip, ChipProps} from "../src";

export default {
  title: "Components/Chip",
  component: Chip,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=263%3A60262&mode=dev",
    },
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["solid", "outline", "soft", "white"],
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
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<typeof Chip>;

const defaultProps = {
  ...chip.defaultVariants,
  children: "Chip",
};

export const Default = {
  args: {
    ...defaultProps,
  },
};

export const StartContent = {
  args: {
    ...defaultProps,
    startContent: (
      <span aria-label="celebration" className="ml-1" role="img">
        🎉
      </span>
    ),
  },
};

export const EndContent = {
  args: {
    ...defaultProps,
    endContent: (
      <span aria-label="rocket" className="mr-1" role="img">
        🚀
      </span>
    ),
  },
};

export const Closeable = {
  args: {
    ...defaultProps,
    // eslint-disable-next-line
    onClose: () => console.log("Close"),
  },
};

export const CustomCloseIcon = {
  args: {
    ...defaultProps,
    endContent: <CheckIcon />,
    // eslint-disable-next-line
    onClose: () => console.log("Close"),
  },
};

export const WithAvatar = {
  args: {
    ...defaultProps,
    variant: "flat",
    color: "secondary",
    avatar: <Avatar name="JW" src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />,
  },
};

const HiddenOverflowTemplate = (args: ChipProps) => (
  <div className="w-20 border-danger-500 border-2">
    <Chip {...args} />
  </div>
);

export const HiddenOverflow = {
  render: HiddenOverflowTemplate,
  args: {
    ...defaultProps,
    children: "Hello World!",
  },
};
