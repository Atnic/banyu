import React from "react";
import {Meta} from "@storybook/react";
import {card} from "@jala-banyu/theme";
import {Button} from "@jala-banyu/button";
import {ArrowLeftIcon} from "@jala-banyu/shared-icons/src";

import {Card, CardBody, CardFooter, CardHeader, CardTitle, CardProps} from "../src";

export default {
  title: "Components/Card",
  parameter: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Banyu-v1.0?node-id=2631%3A174843&mode=dev",
    },
  },
  component: Card,
  argTypes: {
    shadow: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
    radius: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg"],
    },
    fullWidth: {
      control: {
        type: "boolean",
      },
    },
    contentFullWidth: {
      control: {
        type: "boolean",
      },
    },
    paddingType: {
      control: {
        type: "select",
      },
      options: ["inside", "outside"],
    },
    footerPosition: {
      control: {
        type: "select",
      },
      options: ["start", "center", "end"],
    },
    isFooterBlurred: {
      control: {
        type: "boolean",
      },
    },
    isHoverable: {
      control: {
        type: "boolean",
      },
    },
    isPressable: {
      control: {
        type: "boolean",
      },
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    disableRipple: {
      control: {
        type: "boolean",
      },
    },
    disableAnimation: {
      control: {
        type: "boolean",
      },
    },
    withDivider: {
      control: {
        type: "boolean",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center w-screen h-screen">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Card>;

const defaultProps = {
  ...card.defaultVariants,
  disableRipple: false,
};

const Template = (args: CardProps) => {
  const ref = React.useRef(null);
  const startButton = (
    <Button color={"basic"} isIconOnly={true} radius={"lg"} size={"sm"} variant={"ghost"}>
      <ArrowLeftIcon className={"text-xl"} />
    </Button>
  );

  return (
    <Card {...args} ref={ref} className="max-w-xl">
      <CardHeader>
        <CardTitle startButton={startButton} subtitle={"Subtitle"} title={"Card Title"} />
      </CardHeader>
      <CardBody>
        <div className="bg-neutral-100 w-full h-full min-h-96 p-8 rounded-lg border-2 border-dashed border-brand/60">
          <p>The Object constructor creates an object wrapper for the given value.</p>
        </div>
      </CardBody>
      <CardFooter>
        <div className="flex items-center justify-between gap-2">
          <Button color={"basic"} radius={"lg"} size={"md"} variant={"ghost"}>
            Cancel
          </Button>
          <Button color={"basic"} radius={"lg"} size={"md"} variant={"solid"}>
            Secondary
          </Button>
          <Button color={"primary"} radius={"lg"} size={"md"} variant={"solid"}>
            Primary
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

const WithoutCTATemplate = (args: CardProps) => {
  const ref = React.useRef(null);

  return (
    <Card {...args} ref={ref} className="max-w-xl">
      <CardHeader>
        <CardTitle subtitle={"Subtitle"} title={"Card Title"} />
      </CardHeader>
      <CardBody>
        <div className="bg-neutral-100 w-full h-full min-h-96 p-8 rounded-lg border-2 border-dashed border-brand/60">
          <p>The Object constructor creates an object wrapper for the given value.</p>
        </div>
      </CardBody>
    </Card>
  );
};

const ContentFullWidthTemplate = (args: CardProps) => {
  const ref = React.useRef(null);
  const startButton = (
    <Button color={"basic"} isIconOnly={true} radius={"lg"} size={"sm"} variant={"ghost"}>
      <ArrowLeftIcon className={"text-xl"} />
    </Button>
  );

  return (
    <Card {...args} ref={ref} className="max-w-xl">
      <CardHeader>
        <CardTitle startButton={startButton} subtitle={"Subtitle"} title={"Card Title"} />
      </CardHeader>
      <CardBody
        className={
          "bg-neutral-100 w-full h-full min-h-96 p-8 border-2 border-dashed border-brand/60"
        }
      >
        <p>The Object constructor creates an object wrapper for the given value.</p>
      </CardBody>
      <CardFooter>
        <div className="flex items-center justify-between gap-2">
          <Button color={"basic"} radius={"lg"} size={"md"} variant={"ghost"}>
            Cancel
          </Button>
          <Button color={"basic"} radius={"lg"} size={"md"} variant={"solid"}>
            Secondary
          </Button>
          <Button color={"primary"} radius={"lg"} size={"md"} variant={"solid"}>
            Primary
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export const Default = {
  render: Template,

  args: {
    ...defaultProps,
  },
};

export const WithoutCTA = {
  render: WithoutCTATemplate,

  args: {
    ...defaultProps,
  },
};

export const ContentFullWidth = {
  render: ContentFullWidthTemplate,

  args: {
    ...defaultProps,
    contentFullWidth: true,
  },
};
