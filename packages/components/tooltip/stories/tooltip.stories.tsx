import React from "react";
// @ts-ignore
import {Meta} from "@storybook/react";
import {popover} from "@banyu/theme";
import {Button} from "@banyu/button";
import {Kbd} from "@banyu/kbd";

import {Tooltip, TooltipProps} from "../src";

import {InfoIcon} from "./info";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["solid", "bordered", "light", "flat", "faded", "shadow"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
    // color: {
    //   control: {
    //     type: "select",
    //   },
    //   options: ["default", "primary", "success", "warning", "danger"],
    // },
    radius: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg", "full"],
    },
    showArrow: {
      control: {
        type: "boolean",
      },
    },
    placement: {
      control: {
        type: "select",
      },
      options: [
        "top",
        "bottom",
        "right",
        "left",
        "top-start",
        "top-end",
        "bottom-start",
        "bottom-end",
        "left-start",
        "left-end",
        "right-start",
        "right-end",
      ],
    },
    delay: {
      control: {
        type: "number",
      },
    },
    offset: {
      control: {
        type: "number",
      },
    },
    defaultOpen: {
      control: {
        type: "boolean",
      },
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
    children: {
      control: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center w-screen h-screen">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Tooltip>;

const defaultProps = {
  ...popover.defaultVariants,
  placement: "top",
  delay: 0,
  offset: 7,
  defaultOpen: false,
  isDisabled: false,
  disableAnimation: false,
  content: "I am a tooltip",
  children: (
    <Button color="primary" radius="md" variant="iconOnly">
      <InfoIcon />
    </Button>
  ),
};

const DirectionTemplate = (args: TooltipProps) => {
  return (
    <div className="flex gap-20">
      <Tooltip {...args} content="Tooltip" placement="top">
        <Button color="primary" radius="md" variant="iconOnly">
          <InfoIcon /> None
        </Button>
      </Tooltip>
      <Tooltip {...args} content="Tooltip Top" defaultOpen={true} placement="top" showArrow={true}>
        <Button color="primary" radius="md" variant="iconOnly">
          <InfoIcon /> Top
        </Button>
      </Tooltip>
      <Tooltip {...args} content="Tooltip Right" placement="right" showArrow={true}>
        <Button color="primary" radius="md" variant="iconOnly">
          <InfoIcon /> Right
        </Button>
      </Tooltip>
      <Tooltip {...args} content="Tooltip Left" placement="left" showArrow={true}>
        <Button color="primary" radius="md" variant="iconOnly">
          <InfoIcon /> Left
        </Button>
      </Tooltip>
      <Tooltip {...args} content="Tooltip Bottom" placement="bottom" showArrow={true}>
        <Button color="primary" radius="md" variant="iconOnly">
          <InfoIcon /> Bottom
        </Button>
      </Tooltip>
    </div>
  );
};
const SecondaryContentTemplate = (args: TooltipProps) => {
  return (
    <div className="flex gap-32">
      <Tooltip {...args} placement="top">
        <Button color="primary" radius="md" variant="iconOnly">
          <InfoIcon /> None
        </Button>
      </Tooltip>
      <Tooltip {...args} defaultOpen={true} placement="top" showArrow={true}>
        <Button color="primary" radius="md" variant="iconOnly">
          <InfoIcon /> Top
        </Button>
      </Tooltip>
      <Tooltip {...args} placement="right" showArrow={true}>
        <Button color="primary" radius="md" variant="iconOnly">
          <InfoIcon /> Right
        </Button>
      </Tooltip>
      <Tooltip {...args} placement="left" showArrow={true}>
        <Button color="primary" radius="md" variant="iconOnly">
          <InfoIcon /> Left
        </Button>
      </Tooltip>
      <Tooltip {...args} placement="bottom" showArrow={true}>
        <Button color="primary" radius="md" variant="iconOnly">
          <InfoIcon /> Bottom
        </Button>
      </Tooltip>
    </div>
  );
};

export const Direction = {
  render: DirectionTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
  },
  args: {
    ...defaultProps,
  },
};
export const SecondaryContent = {
  render: SecondaryContentTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
  },
  args: {
    ...defaultProps,
    content: (
      <div className="flex flex-col gap-[4px]">
        <div className="text-[12px] text-white">Tooltip</div>
        <div className="text-[10px] text-white-50a">Secondary Text</div>
      </div>
    ),
  },
};

export const ShortcutHints = {
  render: SecondaryContentTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
  },
  args: {
    ...defaultProps,
    content: (
      <div className="flex flex-col gap-[4px]">
        <div className="text-[12px] text-white">Tooltip</div>
        <div className="flex gap-1 text-[10px] text-white-50a">
          <Kbd keys="command" />
          <Kbd className="px-2">B</Kbd>
        </div>
      </div>
    ),
  },
};
export const Indicator = {
  render: SecondaryContentTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
  },
  args: {
    ...defaultProps,
    content: (
      <div className="flex gap-[4px] justify-center items-center">
        <div className="bg-brand w-2 h-2 rounded-full" />
        <div className="flex gap-1 text-[12px] text-white font-md">$88k</div>
      </div>
    ),
  },
};
export const SingleIndicator = {
  render: SecondaryContentTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
  },
  args: {
    ...defaultProps,
    content: (
      <div className="flex flex-col gap-[4px]">
        <span className="text-[12px] text-white">Tooltip</span>
        <div className="flex gap-[4px] justify-center items-center">
          <span className="bg-brand w-2 h-2 rounded-full" />
          <div className="flex gap-1 text-[12px] text-white font-md">$88k</div>
        </div>
      </div>
    ),
  },
};
export const TwoIndicator = {
  render: SecondaryContentTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
  },
  args: {
    ...defaultProps,
    content: (
      <div className="flex flex-col gap-[4px]">
        <span className="text-[12px] text-white">Tooltip</span>
        <div className="flex gap-[4px] justify-center items-center">
          <span className="bg-brand w-2 h-2 rounded-full" />
          <div className="flex gap-1 text-[12px] text-white font-md">$88k</div>
        </div>
        <div className="flex gap-[4px] justify-center items-center">
          <span className="bg-success w-2 h-2 rounded-full" />
          <div className="flex gap-1 text-[12px] text-white font-md">$77k</div>
        </div>
      </div>
    ),
  },
};
