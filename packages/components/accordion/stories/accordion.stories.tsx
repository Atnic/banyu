import type {Selection} from "@react-types/shared";

import React from "react";
// @ts-ignore
import {Meta} from "@storybook/react";
import {accordionItem, button} from "@jala-banyu/theme";
import {AnchorIcon, MoonIcon, SunIcon} from "@jala-banyu/shared-icons";
import {Avatar} from "@jala-banyu/avatar";
import {Input} from "@jala-banyu/input";
import {Chip} from "@jala-banyu/chip";
import {Button} from "@jala-banyu/button";

import {Accordion, AccordionProps, AccordionItem} from "../src";

export default {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=429%3A127415&mode=dev",
    },
  },
  argTypes: {
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    selectionMode: {
      control: {
        type: "select",
      },
      options: ["single", "multiple"],
    },
    disableAnimation: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<typeof Accordion>;

const defaultProps = {
  ...accordionItem.defaultVariants,
  selectionMode: "single",
};

const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const Template = (args: AccordionProps) => (
  <Accordion {...args}>
    <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
      {defaultContent}
    </AccordionItem>
    <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
      {defaultContent}
    </AccordionItem>
    <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
      {defaultContent}
    </AccordionItem>
  </Accordion>
);

const SplittedTemplate = (args: AccordionProps) => (
  <Accordion {...args} variant="splitted">
    <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
      {defaultContent}
    </AccordionItem>
    <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
      {defaultContent}
    </AccordionItem>
    <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
      {defaultContent}
    </AccordionItem>
  </Accordion>
);

const TemplateWithSubtitle = (args: AccordionProps) => (
  <Accordion {...args}>
    <AccordionItem key="1" aria-label="Accordion 1" subtitle="Press to expand" title="Accordion 1">
      {defaultContent}
    </AccordionItem>
    <AccordionItem
      key="2"
      aria-label="Accordion 2"
      subtitle={
        <span>
          Press to expand <strong>key 2</strong>
        </span>
      }
      title="Accordion 2"
    >
      {defaultContent}
    </AccordionItem>
    <AccordionItem key="3" aria-label="Accordion 3" subtitle="Press to expand" title="Accordion 3">
      {defaultContent}
    </AccordionItem>
  </Accordion>
);

const TemplateWithStartContent = (args: AccordionProps) => (
  <Accordion {...args} variant="shadow">
    <AccordionItem
      key="1"
      aria-label="Chung Miller"
      startContent={
        <Avatar
          isBordered
          color="primary"
          radius="lg"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
      }
      subtitle="4 unread messages"
      title="Chung Miller"
    >
      {defaultContent}
    </AccordionItem>
    <AccordionItem
      key="2"
      aria-label="Janelle Lenard"
      startContent={
        <Avatar
          isBordered
          color="success"
          radius="lg"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      }
      subtitle="3 incompleted steps"
      title="Janelle Lenard"
    >
      {defaultContent}
    </AccordionItem>
    <AccordionItem
      key="3"
      aria-label="Zoey Lang"
      startContent={
        <Avatar
          isBordered
          color="warning"
          radius="lg"
          src="https://i.pravatar.cc/150?u=a04258114e29026702d"
        />
      }
      subtitle={
        <p className="flex">
          2 issues to&nbsp;<p className="text-primary">fix now</p>
        </p>
      }
      title="Zoey Lang"
    >
      {defaultContent}
    </AccordionItem>
  </Accordion>
);

const VariantsTemplate = (args: AccordionProps) => (
  <div className="flex flex-col gap-8 mb-24">
    <div className="flex flex-col gap-4">
      <h3>Default</h3>
      <Accordion {...args}>
        <AccordionItem key="1" title="Accordion 1">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="2" title="Accordion 2">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" title="Accordion 3">
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
    <div className="flex flex-col gap-4">
      <h3>Splitted</h3>
      <Accordion {...args} variant="splitted">
        <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  </div>
);

const CustomInidicatorTemplate = (args: AccordionProps) => (
  <Accordion {...args}>
    <AccordionItem key="anchor" aria-label="Anchor" indicator={<AnchorIcon />} title="Anchor">
      {defaultContent}
    </AccordionItem>
    <AccordionItem key="moon" aria-label="Moon" indicator={<MoonIcon />} title="Moon">
      {defaultContent}
    </AccordionItem>
    <AccordionItem key="sun" aria-label="Sun" indicator={<SunIcon />} title="Sun">
      {defaultContent}
    </AccordionItem>
  </Accordion>
);

const ControlledTemplate = (args: AccordionProps) => {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(["1"]));

  // eslint-disable-next-line no-console
  console.log(selectedKeys);

  return (
    <div className="flex flex-col gap-4">
      <Accordion {...args} selectedKeys={selectedKeys}>
        <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
          {defaultContent}
        </AccordionItem>
      </Accordion>

      <div className="flex gap-2">
        <Button
          onPress={() => {
            setSelectedKeys(new Set(["1"]));
          }}
        >
          Open 1
        </Button>
        <Button
          onPress={() => {
            setSelectedKeys(new Set(["2"]));
          }}
        >
          Open 2
        </Button>
        <Button
          onPress={() => {
            setSelectedKeys(new Set(["3"]));
          }}
        >
          Open 3
        </Button>
      </div>
    </div>
  );
};

const WithFormTemplate = (args: AccordionProps) => {
  const form = (
    <form className="flex flex-col gap-4">
      <Input
        isRequired
        className={"bg-background"}
        label="Email"
        placeholder="Enter your email"
        type="email"
        onValueChange={(value) =>
          // eslint-disable-next-line no-console
          console.log(value)
        }
      />
      <Input
        isRequired
        className={"bg-background"}
        label="Password"
        placeholder="Enter your password"
        type="password"
      />

      <div className="flex gap-2 justify-end">
        <button className={button({color: "primary"})}>Login</button>
      </div>
    </form>
  );

  return (
    <Accordion {...args}>
      <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
        {form}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
};

const WithBadgeTemplate = (args: AccordionProps) => (
  <Accordion {...args}>
    <AccordionItem
      key="1"
      aria-label="Accordion 1"
      endContent={
        <Chip color={"base"} radius={"md"} size={"sm"} variant={"outline"}>
          Badge
        </Chip>
      }
      startContent={
        <Chip color={"base"} radius={"md"} size={"sm"} variant={"outline"}>
          Badge
        </Chip>
      }
      subtitle="Press to expand"
      title="Accordion 1"
    >
      {defaultContent}
    </AccordionItem>
    <AccordionItem
      key="2"
      aria-label="Accordion 2"
      startContent={
        <Chip color={"base"} radius={"md"} size={"sm"} variant={"outline"}>
          Badge
        </Chip>
      }
      subtitle={
        <span>
          Press to expand <strong>key 2</strong>
        </span>
      }
      title="Accordion 2"
    >
      {defaultContent}
    </AccordionItem>
    <AccordionItem
      key="3"
      aria-label="Accordion 3"
      endContent={
        <Chip color={"base"} radius={"md"} size={"sm"} variant={"outline"}>
          Badge
        </Chip>
      }
      subtitle="Press to expand"
      title="Accordion 3"
    >
      {defaultContent}
    </AccordionItem>
  </Accordion>
);

export const Default = {
  render: Template,

  args: {
    ...defaultProps,
  },
};

export const Splitted = {
  render: SplittedTemplate,

  args: {
    ...defaultProps,
  },
};

export const IsCompact = {
  render: Template,

  args: {
    ...defaultProps,
    isCompact: true,
  },
};

export const Multiple = {
  render: Template,

  args: {
    ...defaultProps,
    selectionMode: "multiple",
  },
};

export const DefaultExpanded = {
  render: Template,

  args: {
    ...defaultProps,
    defaultExpandedKeys: ["2"],
  },
};

export const KeepContentMounted = {
  render: Template,

  args: {
    ...defaultProps,
    keepContentMounted: true,
  },
};

export const DisabledKeys = {
  render: Template,

  args: {
    ...defaultProps,
    disabledKeys: ["2"],
  },
};

export const WithSubtitle = {
  render: TemplateWithSubtitle,

  args: {
    ...defaultProps,
  },
};

export const WithStartContent = {
  render: TemplateWithStartContent,

  args: {
    ...defaultProps,
  },
};

export const Variants = {
  render: VariantsTemplate,

  args: {
    ...defaultProps,
  },
};

export const WithForm = {
  render: WithFormTemplate,

  args: {
    ...defaultProps,
  },
};

export const CustomMotion = {
  render: Template,

  args: {
    ...defaultProps,
    motionProps: {
      variants: {
        enter: {
          y: 0,
          opacity: 1,
          height: "auto",
          transition: {
            height: {
              type: "spring",
              stiffness: 500,
              damping: 30,
              duration: 1,
            },
            opacity: {
              easings: "ease",
              duration: 1,
            },
          },
        },
        exit: {
          y: -10,
          opacity: 0,
          height: 0,
          transition: {
            height: {
              easings: "ease",
              duration: 0.25,
            },
            opacity: {
              easings: "ease",
              duration: 0.3,
            },
          },
        },
      },
    },
  },
};

export const CustomIndicator = {
  render: CustomInidicatorTemplate,

  args: {
    ...defaultProps,
  },
};

export const Controlled = {
  render: ControlledTemplate,

  args: {
    ...defaultProps,
  },
};

export const WithBadge = {
  render: WithBadgeTemplate,
  args: {
    ...defaultProps,
  },
};