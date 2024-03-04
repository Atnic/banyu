import React from "react";
import {Meta} from "@storybook/react";
import {button, pagination} from "@jala-banyu/theme";
import {Select, SelectItem} from "@jala-banyu/select";

import {Pagination} from "../src";

export default {
  title: "Components/Pagination",
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Banyu-v1.0?node-id=94%3A2964&mode=dev",
    },
  },
  component: Pagination,
  argTypes: {
    page: {
      control: {
        type: "number",
      },
    },
    siblings: {
      control: {
        type: "number",
      },
    },
    boundaries: {
      control: {
        type: "number",
      },
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["default", "solid"],
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
    showShadow: {
      control: {
        type: "boolean",
      },
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-5 bg-neutral-50 h-dvh w-dvw">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Pagination>;

const defaultProps = {
  ...pagination.defaultVariants,
  total: 10,
  siblings: 1,
  boundaries: 1,
  initialPage: 1,
};

export const Default = {
  args: {
    ...defaultProps,
  },
};

export const WithoutControls = {
  args: {
    ...defaultProps,
    showControls: false,
  },
};

export const PaginationLoop = {
  args: {
    ...defaultProps,
    showControls: true,
    loop: true,
  },
};

export const InitialPage = {
  args: {
    ...defaultProps,
    initialPage: 3,
  },
};

export const IsCompact = {
  args: {
    ...defaultProps,
    showControls: true,
    isCompact: true,
  },
};

export const Controlled = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <div className="flex flex-col gap-5">
      <p>Page: {currentPage}</p>
      <Pagination {...defaultProps} showShadow page={currentPage} onChange={setCurrentPage} />
      <div className="flex gap-2">
        <button
          className={button({color: "primary", size: "sm", variant: "ghost"})}
          onClick={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
        >
          Previous
        </button>
        <button
          className={button({color: "primary", size: "sm", variant: "ghost"})}
          onClick={() => setCurrentPage((prev) => (prev < defaultProps.total ? prev + 1 : prev))}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const WithSelectTemplate = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <div className="flex w-full pr-4 justify-between items-center">
      <Pagination page={currentPage} total={10} onChange={setCurrentPage} />
      <div className="flex gap-2 items-center">
        <Select
          classNames={{
            label: "font-normal group-data-[filled=true]:font-normal",
          }}
          defaultSelectedKeys={["10"]}
          label="Tampilkan"
          labelPlacement="outside-left"
          selectionMode={"single"}
          variant="ghost"
        >
          <SelectItem key={10} value={"10"}>
            10
          </SelectItem>
          <SelectItem key={20} value={"20"}>
            20
          </SelectItem>
          <SelectItem key={50} value={"50"}>
            50
          </SelectItem>
          <SelectItem key={100} value={"100"}>
            100
          </SelectItem>
        </Select>
        <span className="text-sm">Kolam</span>
      </div>
    </div>
  );
};

export const WithSelect = {
  render: WithSelectTemplate,
  args: {
    ...defaultProps,
  },
};
