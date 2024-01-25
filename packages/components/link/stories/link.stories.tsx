import type {VariantProps} from "@banyu/theme";

// @ts-ignore
import {Meta} from "@storybook/react";
import React from "react";
import {tv} from "@banyu/theme";
import {link} from "@banyu/theme";

import {Link, LinkProps} from "../src";

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["black", "gray", "primary", "danger", "warning", "success", "white"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
    underline: {
      control: {
        type: "select",
      },
      options: ["hover", "none", "always", "active", "focus"],
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<typeof Link>;

const children = `Link`;

const defaultProps = {
  ...link.defaultVariants,
  isDisabled: false,
  showAnchorIcon: true,
  children,
};

const Template = (args: LinkProps) => <Link {...args} href="#" />;

export const Dark = {
  render: Template,
  args: {
    ...defaultProps,
    isDisabled: false,
    color: "dark",
    size: "md",
  },
};
export const Gray = {
  render: Template,
  args: {
    ...defaultProps,
    isDisabled: false,
    color: "gray",
    size: "md",
  },
};
export const white = {
  render: Template,
  args: {
    ...defaultProps,
    isDisabled: false,
    color: "white",
    size: "md",
  },
};
export const primary = {
  render: Template,
  args: {
    ...defaultProps,
    isDisabled: false,
    color: "primary",
    size: "md",
  },
};
export const danger = {
  render: Template,
  args: {
    ...defaultProps,
    isDisabled: false,
    color: "danger",
    size: "md",
  },
};
export const warning = {
  render: Template,
  args: {
    ...defaultProps,
    isDisabled: false,
    color: "warning",
    size: "md",
  },
};

// export const Underline = Template.bind({}) as any;
// Underline.args = {
//   ...defaultProps,
//   underline: "always",
//   isDisabled: false,
//   size: "md",
// };

const CustomLink = () => (
  <svg
    className="custom-link-icon ml-1"
    fill="none"
    height="1em"
    shapeRendering="geometricPrecision"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="1em"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

// export const isExternal = Template.bind({}) as any;
// isExternal.args = {
//   ...defaultProps,
//   isExternal: true,
// };
//
// export const CustomAchor = Template.bind({}) as any;
// CustomAchor.args = {
//   ...defaultProps,
//   anchorIcon: <CustomLink />,
// };
//
// export const isBlock = Template.bind({}) as any;
//
// isBlock.args = {
//   ...defaultProps,
//   isBlock: true,
//   isDisabled: false,
//   size: "md",
//   color: "secondary",
// };

const customLink = tv({
  variants: {
    color: {
      teal: "text-teal-600",
    },
    isLink: {
      true: "before:content-['👉'] before:mr-1",
    },
  },
});

type MyLinkVariantProps = VariantProps<typeof customLink>;

type MyLinkProps = MyLinkVariantProps & Omit<LinkProps, "color">;

const MyLink = (props: MyLinkProps) => {
  const {isLink, color, ...otherProps} = props;

  return <Link className={customLink({color, isLink})} isExternal={!!isLink} {...otherProps} />;
};

// export const CustomVariant = () => {
//   return (
//     <MyLink isLink color="teal" href="#">
//       Visit out new Store
//     </MyLink>
//   );
// };
