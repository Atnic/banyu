import React from "react";
// @ts-ignore
import {Meta} from "@storybook/react";

type DefaultProps = {
  title: string;
  desc?: string;
  component?: string;
};

const Containers = ({title, desc}: DefaultProps) => (
  <div className="">
    <div className="border-b-2 pb-4">
      <span className="heading-600 text-gray-700">{title}</span>
      <pre className="text-xs text-gray-400 text-wrap">{desc}</pre>
    </div>
    <SpacingTemplate />
  </div>
);

const SpacingTemplate = () => (
  <div className="flex flex-col w-full gap-4 mt-8 items-center">
    <div className="flex justify-center items-center bg-blue-100 container w-4/12 py-5 rounded-md">
      <span className="font-semibold text-black size-4 w-auto">sm (640px)</span>
    </div>
  </div>
);

export default {
  title: "Layout/Spacing",
  component: Containers,
  argTypes: {},
} as Meta<typeof Containers>;

export const Spacing = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=260%3A28&mode=dev",
    },
  },
  args: {
    title: "Spacing",
    desc: `Consistent spacing creates visual balance that makes the user interface (UI) easier for merchants to scan. Apply consistent spacing to improve the quality of the UI.`,
    component: "SpacingTemplate",
  },
};
