import React from "react";
// @ts-ignore
import {Meta} from "@storybook/react";
import {button} from "@jala-banyu/theme";
import {JalaBiomass} from "@muhamien/jala-icons";

import {Button} from "../src";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["solid", "outline", "ghost"],
    },
    color: {
      control: {
        type: "select",
      },
      options: ["primary", "danger", "success", "warning", "transparent", "basic", "white"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg", "xl"],
    },
    spinnerPlacement: {
      control: {
        type: "select",
      },
      options: ["start", "end"],
    },
    fullWidth: {
      control: {
        type: "boolean",
      },
    },
    radius: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg", "xl", "full"],
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    isLoading: {
      control: {
        type: "boolean",
      },
    },
    // disableAnimation: {
    //   control: {
    //     type: "boolean",
    //   },
    // },
  },
} as Meta<typeof Button>;

const defaultProps = {
  children: "Button",
  spinnerPlacement: "start",
  ...button.defaultVariants,
};

// const StateTemplate = (args: ButtonProps) => {
//   const [isOpen, setIsOpen] = React.useState(false);
//
//   const handlePress = () => {
//     // eslint-disable-next-line no-console
//     console.log("Pressed");
//     setIsOpen((prev) => !prev);
//   };
//
//   return (
//     <div className="h-screen">
//       <Button {...args} aria-label="Open" aria-pressed={isOpen} onPress={handlePress}>
//         {isOpen ? "Close" : "Open"}
//       </Button>
//     </div>
//   );
// };

export const Solid = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=376%3A46775&mode=dev",
    },
  },
  args: {
    ...defaultProps,
  },
};
export const Outline = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=376%3A46775&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    variant: "outline",
  },
};
export const Ghost = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=376%3A46775&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    variant: "ghost",
  },
};
export const rounded = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=376%3A46775&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    radius: "full",
    variant: "rounded",
  },
};
export const IconOnly = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=376%3A46775&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    isIconOnly: true,
    variant: "outline",
    children: <JalaBiomass className="h-max w-max text-lg" />,
  },
};
export const IconWithText = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=376%3A46775&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    isIconOnly: false,
    variant: "outline",
    children: (
      <>
        <JalaBiomass className="h-max w-max text-lg" />
        Biomass
      </>
    ),
  },
};

export const IsLoading = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=376%3A46775&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    children: "",
    color: "primary",
    isLoading: true,
  },
};

// export const WithState = {
//   render: StateTemplate,
//
//   args: {
//     ...defaultProps,
//   },
// };
//
// export const IsDisabled = {
//   args: {
//     ...defaultProps,
//     isDisabled: true,
//   },
// };
//
// export const DisableRipple = {
//   args: {
//     ...defaultProps,
//     disableRipple: true,
//   },
// };
//
// export const WithIcons = {
//   args: {
//     ...defaultProps,
//     startContent: <Notification className="fill-current" />,
//     endContent: <Camera className="fill-current" />,
//   },
// };
//
// export const CustomWithClassNames = {
//   args: {
//     ...defaultProps,
//     radius: "full",
//     className: "bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg",
//   },
// };
