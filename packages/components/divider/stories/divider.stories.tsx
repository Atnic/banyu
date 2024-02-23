import React from "react";
// @ts-ignore
import {Meta} from "@storybook/react";

import {Divider, DividerProps} from "../src";

export default {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=1236%3A29324&mode=dev",
    },
  },
  argTypes: {
    labelPosition: {
      control: {
        type: "select",
      },
      options: ["start", "middle", "end"],
    },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center w-screen h-screen">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Divider>;

const defaultProps = {};

const DefaultTemplate = (args: DividerProps) => (
  <div className="w-1/2">
    <div className="rounded-lg shadow-md bg-neutral-50 w-full h-24 mb-4" />
    <Divider {...args} className={"border-4"} />
    <div className="rounded-lg shadow-md bg-neutral-50 w-full h-24 mt-4" />
  </div>
);

const WithLabelTemplate = (args: DividerProps) => (
  <div className="w-1/2">
    <div className="rounded-lg shadow-md bg-neutral-50 w-full h-24 mb-4" />
    <Divider {...args} label={"Text"} />
    <div className="rounded-lg shadow-md bg-neutral-50 w-full h-24 mt-4" />
  </div>
);

const VerticalTemplate = (args: DividerProps) => (
  <div className="flex w-1/2 gap-4">
    <div className="rounded-lg shadow-md bg-neutral-50 w-full h-24" />
    <Divider {...args} orientation={"vertical"} />
    <div className="rounded-lg shadow-md bg-neutral-50 w-full h-24" />
  </div>
);

const VerticalWithLabelTemplate = (args: DividerProps) => (
  <div className="flex w-1/2 gap-4">
    <div className="rounded-lg shadow-md bg-neutral-50 w-full h-24" />
    <Divider {...args} label={"Text"} orientation={"vertical"} />
    <div className="rounded-lg shadow-md bg-neutral-50 w-full h-24" />
  </div>
);

export const Default = {
  render: DefaultTemplate,
  args: {
    ...defaultProps,
  },
};

export const WithLabel = {
  render: WithLabelTemplate,
  args: {
    ...defaultProps,
    labelPosition: "middle",
  },
};

export const Vertical = {
  render: VerticalTemplate,
  args: {
    ...defaultProps,
  },
};

export const VerticalWithLabel = {
  render: VerticalWithLabelTemplate,
  args: {
    ...defaultProps,
    labelPosition: "middle",
  },
};
