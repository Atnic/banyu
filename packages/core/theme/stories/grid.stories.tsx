import React from "react";
// @ts-ignore
import {Meta} from "@storybook/react";

type DefaultProps = {
  title: string;
  desc?: string;
  component?: string;
};

const GridContainer = ({title, desc}: DefaultProps) => (
  <div className="">
    <div className="border-b-2 pb-4">
      <span className="heading-600 text-gray-700">{title}</span>
      <pre className="text-xs text-gray-400 text-wrap">{desc}</pre>
    </div>
    <GridTemplate />
  </div>
);

const GridTemplate = () => (
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
  title: "Layout/Grid",
  component: GridContainer,
  argTypes: {},
} as Meta<typeof GridContainer>;

export const Grid = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=202%3A6913&mode=dev",
    },
  },
  args: {
    title: "Grid",
    desc: `Our color system builds on the recognition of the Shopify brand colors to make the admin interface more usable.`,
    component: "GridTemplate",
  },
};
