import React from "react";
// @ts-ignore
import {Meta} from "@storybook/react";
import {breadcrumbItem} from "@jala-banyu/theme";
// import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@jala-banyu/dropdown";
// import {Button} from "@jala-banyu/button";
import {ArrowRightIcon, ChevronRightIcon, HomeIcon} from "@jala-banyu/shared-icons";

import {Breadcrumbs, BreadcrumbItem, BreadcrumbsProps} from "../src";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {
    page: {
      control: {
        type: "number",
      },
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["default", "solid", "bordered"],
    },
    color: {
      control: {
        type: "select",
      },
      options: ["foreground", "primary", "success", "warning", "danger"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
    radius: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg", "full"],
    },
    maxItems: {
      control: {
        type: "number",
      },
    },
    itemsBeforeCollapse: {
      control: {
        type: "number",
      },
    },
    itemsAfterCollapse: {
      control: {
        type: "number",
      },
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<typeof Breadcrumbs>;

const defaultProps = {
  ...breadcrumbItem.defaultVariants,
  variant: "default",
};

const Template = (args: BreadcrumbsProps & {page: number}) => (
  <Breadcrumbs {...args}>
    <BreadcrumbItem href="#">
      <HomeIcon className="text-xl text-neutral-500" />
    </BreadcrumbItem>
    <BreadcrumbItem href="#">Menu 1</BreadcrumbItem>
    <BreadcrumbItem href="#">Menu 2</BreadcrumbItem>
    <BreadcrumbItem href="#">Menu 3</BreadcrumbItem>
  </Breadcrumbs>
);

const WithDropdownEllipsisTemplate = (args: BreadcrumbsProps & {page: number}) => (
  <Breadcrumbs
    {...args}
    renderEllipsis={({ellipsisIcon, separator}) => (
      <div className="flex items-center">
        {/*<Dropdown>*/}
        {/*  <DropdownTrigger>*/}
        <div className="cursor-pointer px-1">{ellipsisIcon}</div>
        {/*    </DropdownTrigger>*/}
        {/*    <DropdownMenu aria-label="Routes">*/}
        {/*      {items.map((item, index) => (*/}
        {/*        <DropdownItem key={index} href={item.href}>*/}
        {/*          {item.children}*/}
        {/*        </DropdownItem>*/}
        {/*      ))}*/}
        {/*    </DropdownMenu>*/}
        {/*  </Dropdown>*/}
        {separator}
      </div>
    )}
  >
    <BreadcrumbItem href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:1">
      <HomeIcon className="text-xl text-neutral-500" />
    </BreadcrumbItem>
    <BreadcrumbItem href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:2">
      Menu 1
    </BreadcrumbItem>
    <BreadcrumbItem href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:3">
      Menu 2
    </BreadcrumbItem>
    <BreadcrumbItem href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:4">
      Menu 2
    </BreadcrumbItem>
    <BreadcrumbItem href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:5">
      Menu 3
    </BreadcrumbItem>
    <BreadcrumbItem href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:6">
      Menu 4
    </BreadcrumbItem>
  </Breadcrumbs>
);

export const Default = {
  render: Template,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=327%3A122749&mode=dev",
    },
  },
  args: {
    ...defaultProps,
  },
};

export const ArrowRightSeparator = {
  render: Template,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=327%3A122749&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    itemClasses: {
      separator: "px-2",
    },
    separator: <ArrowRightIcon className="text-black text-sm" />,
  },
};
export const ChevronSeparator = {
  render: Template,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=327%3A122749&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    itemClasses: {
      separator: "px-2",
    },
    separator: <ChevronRightIcon className="text-black text-sm" />,
  },
};
export const CustomSeparator = {
  render: Template,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=327%3A122749&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    itemClasses: {
      separator: "px-2",
    },
    separator: "🫰",
  },
};

export const WithDropdownEllipsis = {
  render: WithDropdownEllipsisTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=327%3A122749&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    maxItems: 3,
    itemsBeforeCollapse: 1,
  },
};

export const WithItemsBeforeCollapse = {
  render: WithDropdownEllipsisTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=327%3A122749&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    maxItems: 3,
    itemsBeforeCollapse: 2,
    itemsAfterCollapse: 1,
  },
};
