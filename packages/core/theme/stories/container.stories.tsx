import React from "react";
// @ts-ignore
import {Meta} from "@storybook/react";

type ContainerProps = {
  title: string;
  desc?: string;
  component?: string;
};

const Containers = ({title, desc}: ContainerProps) => (
  <div className="">
    <div className="border-b-2 pb-4">
      <span className="heading-600 text-gray-700">{title}</span>
      <pre className="text-xs text-gray-400 text-wrap">{desc}</pre>
    </div>
    <ContainerTemplate />
  </div>
);

const ContainerTemplate = () => (
  <div className="flex flex-col w-full gap-4 mt-8 items-center">
    <div className="flex justify-center items-center bg-blue-100 container w-4/12 py-5 rounded-md">
      <span className="font-semibold text-black size-4 w-auto">sm (640px)</span>
    </div>
    <div className="flex justify-center items-center bg-blue-100 container w-6/12 py-5 rounded-md">
      <span className="font-semibold text-black size-4 w-auto">md (768px)</span>
    </div>
    <div className="flex justify-center items-center bg-blue-100 container w-8/12 py-5 rounded-md">
      <span className="font-semibold text-black size-4 w-auto">lg (1024px)</span>
    </div>
    <div className="flex justify-center items-center bg-blue-100 container w-10/12 py-5 rounded-md">
      <span className="font-semibold text-black size-4 w-auto">xl (1280px)</span>
    </div>
    <div className="flex justify-center items-center bg-blue-100 container w-full py-5 rounded-md">
      <span className="font-semibold text-black size-4 w-auto">2xl (1536px)</span>
    </div>
  </div>
);

export default {
  title: "Layout/Container",
  component: Containers,
  argTypes: {},
} as Meta<typeof Containers>;

export const Container = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=1236%3A37265&mode=dev",
    },
  },
  args: {
    title: "Container",
    desc: `A component for fixing an element's width to the current breakpoint.`,
    component: "ContainerTemplate",
  },
};
