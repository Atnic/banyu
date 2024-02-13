/* eslint-disable react/display-name */
// @ts-ignore
import {Meta} from "@storybook/react";

import {Switch} from "../src";

export default {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["default", "primary", "success", "warning", "danger"],
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
    disableAnimation: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<typeof Switch>;

// const defaultProps = {
//   ...toggle.defaultVariants,
// };
//
// export const Default = {
//   parameters: {
//     design: {
//       type: "figma",
//       url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=654%3A111633&mode=dev",
//     },
//   },
//   args: {
//     ...defaultProps,
//     defaultSelected: true,
//   },
// };
//
// export const IsDisabled = {
//   parameters: {
//     design: {
//       type: "figma",
//       url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=654%3A111633&mode=dev",
//     },
//   },
//   args: {
//     ...defaultProps,
//     isDisabled: true,
//     defaultSelected: true,
//   },
// };
