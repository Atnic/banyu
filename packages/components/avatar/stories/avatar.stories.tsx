import React from "react";
// @ts-ignore
import {Meta} from "@storybook/react";
import {Camera} from "@jala-banyu/shared-icons";
import {avatar} from "@jala-banyu/theme";

import {Avatar} from "../src";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["solid", "soft"],
    },
    color: {
      control: {
        type: "select",
      },
      options: ["primary", "success", "warning", "danger", "dark", "gray"],
    },
    radius: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg", "full"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
    isBordered: {
      control: {
        disable: true,
      },
    },
    status: {
      control: {
        type: "select",
      },
      options: ["none", "offline", "online", "away", "dnd", "custom"],
    },
    statusPlacement: {
      control: {
        type: "select",
      },
      options: ["top-right", "bottom-right"],
    },
  },
} as Meta<typeof Avatar>;

const defaultProps = {
  ...avatar.defaultVariants,
};

export const Default = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?type=design&node-id=263-43023&mode=design&t=s35rcqtPmfgl4e7f-0",
    },
  },
  args: {
    ...defaultProps,
  },
};

export const WithText = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?type=design&node-id=263-43023&mode=design&t=s35rcqtPmfgl4e7f-0",
    },
  },
  args: {
    ...defaultProps,
    name: "AN",
    variant: "soft",
    color: "danger",
  },
};
export const SolidColor = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?type=design&node-id=263-43023&mode=design&t=s35rcqtPmfgl4e7f-0",
    },
  },
  args: {
    ...defaultProps,
    name: "AN",
    color: "primary",
  },
};
export const SoftColor = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?type=design&node-id=263-43023&mode=design&t=s35rcqtPmfgl4e7f-0",
    },
  },
  args: {
    ...defaultProps,
    name: "AN",
    color: "primary",
    variant: "soft",
  },
};

// export const IsDisabled = {
//   args: {
//     ...defaultProps,
//     src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
//     color: "secondary",
//     isBordered: true,
//     isDisabled: true,
//   },
// };

export const WithImage = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?type=design&node-id=263-43023&mode=design&t=s35rcqtPmfgl4e7f-0",
    },
  },
  args: {
    ...defaultProps,
    src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  },
};
export const Custom = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?type=design&node-id=263-43023&mode=design&t=s35rcqtPmfgl4e7f-0",
    },
  },
  args: {
    ...defaultProps,
    icon: <Camera fill="currentColor" size={20} />,
    radius: "full",
    classNames: {
      base: "shadow-2xl bg-violet-200 dark:bg-violet-800",
    },
  },
};
