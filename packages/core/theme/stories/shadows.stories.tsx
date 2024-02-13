import React from "react";
import {Meta} from "@storybook/react";

type ShadowsProps = {
  title: string;
  desc?: string;
  component?: string;
};

const ShadowContainer = ({title, desc, component}: ShadowsProps) => (
  <div className="">
    <div className="border-b-2 pb-4">
      <span className="heading-600 text-gray-700">{title}</span>
      <pre className="text-xs text-gray-400 text-wrap">{desc}</pre>
    </div>
    {component === "DropShadow" && <DropShadow />}
    {component === "BoxShadow" && <BoxShadow />}
  </div>
);
const BoxShadow = () => (
  <div className="my-2 not-prose relative bg-slate-50 rounded-xl overflow-hidden">
    <div
      className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"
      style={{backgroundPosition: "10px 10px"}}
    />
    <div className="relative rounded-xl overflow-auto p-8">
      <div className="flex items-center justify-around gap-4 font-mono font-bold">
        <div className="flex flex-col gap-4 items-center">
          <div className="w-24 h-24 rounded-lg bg-white shadow-sm" />
          <span className="text-sm">.shadow-sm</span>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="w-24 h-24 rounded-lg bg-white shadow" />
          <span className="text-sm">.shadow</span>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="w-24 h-24 rounded-lg bg-white shadow-md" />
          <span className="text-sm">.shadow-md</span>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="w-24 h-24 rounded-lg bg-white shadow-lg" />
          <span className="text-sm">.shadow-lg</span>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="w-24 h-24 rounded-lg bg-white shadow-xl" />
          <span className="text-sm">.shadow-xl</span>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="w-24 h-24 rounded-lg bg-white shadow-2xl" />
          <span className="text-sm">.shadow-2xl</span>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="w-24 h-24 rounded-lg bg-white shadow-inner" />
          <span className="text-sm">.shadow-inner</span>
        </div>
      </div>
    </div>
    <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-xl" />
  </div>
);
const DropShadow = () => (
  <div className="flex flex-col gap-4 my-4">
    <div className="flex gap-4 items-center">
      <svg
        className="drop-shadow-md h-28 w-28"
        viewBox="0 0 84 84"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"
          fill="#fff"
        />
      </svg>
      <span className="text-sm">.drop-shadow-md</span>
    </div>
    <div className="flex gap-4 items-center">
      <svg
        className="drop-shadow-lg h-28 w-28"
        viewBox="0 0 84 84"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"
          fill="#fff"
        />
      </svg>
      <span className="text-sm">.drop-shadow-lg</span>
    </div>
    <div className="flex gap-4 items-center">
      <svg
        className="drop-shadow-xl h-28 w-28"
        viewBox="0 0 84 84"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"
          fill="#fff"
        />
      </svg>
      <span className="text-sm">.drop-shadow-xl</span>
    </div>
    <div className="flex gap-4 items-center">
      <svg
        className="drop-shadow-2xl h-28 w-28"
        viewBox="0 0 84 84"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.0992 77L2.19922 42.5L22.0992 8H61.8992L81.7992 42.5L61.8992 77H22.0992Z"
          fill="#fff"
        />
      </svg>
      <span className="text-sm">.drop-shadow-2xl</span>
    </div>
  </div>
);

export default {
  title: "Foundations/Shadow",
  component: ShadowContainer,
  argTypes: {},
} as Meta<typeof ShadowContainer>;

// export const DropShadows = {
//     args: {
//         title:'Drop Shadows',
//         desc:
//             `Drop shadows help convey elevation and heirarchy within an application.`,
//         component: 'DropShadow'
//     },
// };
export const BoxShadows = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=263%3A2875&mode=dev",
    },
  },
  args: {
    title: "Box Shadows",
    desc: `Drop shadows help convey elevation and heirarchy within an application.`,
    component: "BoxShadow",
  },
};
