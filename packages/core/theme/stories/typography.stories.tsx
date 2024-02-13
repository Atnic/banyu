import React from "react";
// @ts-ignore
import {Meta} from "@storybook/react";

type TypographyProps = {
  title: string;
  desc?: string;
  component?: string;
};

const Typography = ({title, desc, component}: TypographyProps) => (
  <div className="">
    <div className="border-b-2 pb-4">
      <span className="heading-600 text-gray-700">{title}</span>
      <pre className="text-xs text-gray-400 text-wrap">{desc}</pre>
    </div>
    {component === "Heading" && <HeadingComponent />}
  </div>
);

export default {
  title: "Foundations/Typography",
  component: Typography,
  argTypes: {},
} as Meta<typeof Typography>;

export const Heading = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=111%3A11824&mode=dev",
    },
  },
  args: {
    title: "Heading",
    desc: `*Headings organize content and guide readers through your site. Nest headings in order from HI to H9 (e.g. H3 under an H2).
Tip: Search engines use headings to pull out important themes and topics from your website content. So, if your site is about dog treats, "dog treats" should be an HI.`,
    component: "Heading",
  },
};

// export const TextBlock = {
//   args: {
//     title: "Text Block",
//     desc: "*A Text block is a generic text container, great for any text that isn't a Heading, a Paragraph, or a Link.",
//   },
// };
// export const Paragraph = {
//   args: {
//     title: "Paragraph",
//     desc: "*Paragraph elements are for multiple-sentence content. You can style it to affect all paragraph elements on your site, or just one.",
//   },
// };

// Components

const HeadingComponent = () => (
  <div className="flex flex-col gap-4 my-4">
    <div className="flex flex-col">
      <span className="text-sm">.heading-900</span>
      <span className="heading-900 text-gray-900">Solusi end-to-end untuk Budidaya Udang</span>
    </div>
    <div className="flex flex-col">
      <span className="text-sm">.heading-800</span>
      <span className="heading-800 text-gray-900">Solusi end-to-end untuk Budidaya Udang</span>
    </div>
    <div className="flex flex-col">
      <span className="text-sm">.heading-700</span>
      <span className="heading-700 text-gray-900">Solusi end-to-end untuk Budidaya Udang</span>
    </div>
    <div className="flex flex-col">
      <span className="text-sm">.heading-600</span>
      <span className="heading-600 text-gray-900">Solusi end-to-end untuk Budidaya Udang</span>
    </div>
    <div className="flex flex-col">
      <span className="text-sm">.heading-500</span>
      <span className="heading-500 text-gray-900">Solusi end-to-end untuk Budidaya Udang</span>
    </div>
    <div className="flex flex-col">
      <span className="text-sm">.heading-400</span>
      <span className="heading-400 text-gray-900">Solusi end-to-end untuk Budidaya Udang</span>
    </div>
    <div className="flex flex-col">
      <span className="text-sm">.heading-300</span>
      <span className="heading-300 text-gray-900">Solusi end-to-end untuk Budidaya Udang</span>
    </div>
    <div className="flex flex-col">
      <span className="text-sm">.heading-200</span>
      <span className="heading-200 text-gray-900">Solusi end-to-end untuk Budidaya Udang</span>
    </div>
    <div className="flex flex-col">
      <span className="text-sm">.heading-100</span>
      <span className="heading-100 text-gray-900">Solusi end-to-end untuk Budidaya Udang</span>
    </div>
  </div>
);
