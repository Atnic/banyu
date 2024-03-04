/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
// @ts-ignore
import {Meta} from "@storybook/react";
import {inputGroup} from "@jala-banyu/theme";
import {Button} from "@jala-banyu/button";
import {ArrowRightIcon} from "@jala-banyu/shared-icons";

import {Input, InputGroup} from "../src";

export default {
  title: "Components/InputGroup",
  component: InputGroup,
  argTypes: {
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
  decorators: [
    (Story) => (
      <div className="w-400">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof InputGroup>;

const defaultProps = {
  ...inputGroup.defaultVariants,
};

const Template = (args) => (
  <div className="w-[600px]">
    <InputGroup>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="flex items-center bg-neutral-200 text-neutral-800 px-3 text-sm borber-r border-brand">
        Label
      </label>
      <Input {...args} placeholder="Firstname" />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="flex items-center bg-neutral-200 text-neutral-800 px-3 text-sm borber-r border-brand">
        <ArrowRightIcon />
      </label>
      <Input {...args} placeholder="Lastname" />
      <Button {...args} className="min-w-[72px] !border-transparent" radius="none">
        Button
      </Button>
    </InputGroup>
  </div>
);

export const Default = {
  render: Template,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?type=design&node-id=654-97121&mode=dev",
    },
  },
  args: {
    ...defaultProps,
  },
};
