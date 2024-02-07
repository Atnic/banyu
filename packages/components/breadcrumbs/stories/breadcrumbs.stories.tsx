import React from "react";
// @ts-ignore
import {Meta} from "@storybook/react";
import {breadcrumbItem} from "@banyu/theme";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@banyu/dropdown";
import {Button} from "@banyu/button";
import {
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  HeadphonesIcon,
  HomeIcon,
  InfoIcon,
  MailFilledIcon,
  PetBoldIcon,
} from "@banyu/shared-icons";
import {clsx} from "@banyu/shared-utils";

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
      <HomeIcon className="text-xl" />
    </BreadcrumbItem>
    <BreadcrumbItem href="#">Menu 1</BreadcrumbItem>
    <BreadcrumbItem href="#">Menu 2</BreadcrumbItem>
    <BreadcrumbItem href="#">Menu 3</BreadcrumbItem>
  </Breadcrumbs>
);

const ControlledTemplate = (args: BreadcrumbsProps & {page: number}) => {
  const [currentPage, setCurrentPage] = React.useState<React.Key>("song");

  return (
    <Breadcrumbs {...args} onAction={(key) => setCurrentPage(key)}>
      <BreadcrumbItem key="home" isCurrent={currentPage === "home"}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem key="music" isCurrent={currentPage === "music"}>
        Music
      </BreadcrumbItem>
      <BreadcrumbItem key="artist" isCurrent={currentPage === "artist"}>
        Artist
      </BreadcrumbItem>
      <BreadcrumbItem key="album" isCurrent={currentPage === "album"}>
        Album
      </BreadcrumbItem>
      <BreadcrumbItem key="song" isCurrent={currentPage === "song"}>
        Song
      </BreadcrumbItem>
    </Breadcrumbs>
  );
};

const MenuTypeTemplate = (args: BreadcrumbsProps & {page: number}) => {
  const [currentPage, setCurrentPage] = React.useState<React.Key>("music");

  return (
    <Breadcrumbs
      {...args}
      classNames={{
        list: "gap-2",
      }}
      itemClasses={{
        item: [
          "px-2 py-0.5 border-sm border-default-400 rounded-sm",
          "data-[current='true']:border-foreground transition-colors",
          "data-[disabled='true']:border-default-400 data-[disabled='true']:bg-default-100",
        ],
        separator: "hidden",
      }}
      onAction={(key) => setCurrentPage(key)}
    >
      <BreadcrumbItem key="home" isCurrent={currentPage === "home"}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem key="music" isCurrent={currentPage === "music"}>
        Music
      </BreadcrumbItem>
      <BreadcrumbItem key="artist" isCurrent={currentPage === "artist"}>
        Artist
      </BreadcrumbItem>
      <BreadcrumbItem key="album" isCurrent={currentPage === "album"}>
        Album
      </BreadcrumbItem>
      <BreadcrumbItem key="song" isDisabled isCurrent={currentPage === "song"}>
        Song
      </BreadcrumbItem>
    </Breadcrumbs>
  );
};

const WithStartContentTemplate = (args: BreadcrumbsProps & {page: number}) => (
  <Breadcrumbs {...args}>
    <BreadcrumbItem
      href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:1"
      startContent={<PetBoldIcon />}
    >
      Home
    </BreadcrumbItem>
    <BreadcrumbItem
      href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:2"
      startContent={<HeadphonesIcon />}
    >
      Music
    </BreadcrumbItem>
    <BreadcrumbItem
      href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:3"
      startContent={<InfoIcon />}
    >
      Artist
    </BreadcrumbItem>
    <BreadcrumbItem
      href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:4"
      startContent={<CheckIcon />}
    >
      Album
    </BreadcrumbItem>
    <BreadcrumbItem
      href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:5"
      startContent={<MailFilledIcon />}
    >
      Song
    </BreadcrumbItem>
  </Breadcrumbs>
);

const WithEndContentTemplate = (args: BreadcrumbsProps & {page: number}) => (
  <Breadcrumbs {...args}>
    <BreadcrumbItem
      endContent={<PetBoldIcon />}
      href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:1"
    >
      Home
    </BreadcrumbItem>
    <BreadcrumbItem
      endContent={<HeadphonesIcon />}
      href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:2"
    >
      Music
    </BreadcrumbItem>
    <BreadcrumbItem
      endContent={<InfoIcon />}
      href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:3"
    >
      Artist
    </BreadcrumbItem>
    <BreadcrumbItem
      endContent={<CheckIcon />}
      href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:4"
    >
      Album
    </BreadcrumbItem>
    <BreadcrumbItem
      endContent={<MailFilledIcon />}
      href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:5"
    >
      Song
    </BreadcrumbItem>
  </Breadcrumbs>
);

const WithDropdownEllipsisTemplate = (args: BreadcrumbsProps & {page: number}) => (
  <Breadcrumbs
    {...args}
    renderEllipsis={({items, ellipsisIcon, separator}) => (
      <div className="flex items-center">
        <Dropdown>
          <DropdownTrigger>
            <Button isIconOnly className="min-w-unit-6 w-unit-6 h-unit-6" size="sm" variant="ghost">
              {ellipsisIcon}
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Routes">
            {items.map((item, index) => (
              <DropdownItem key={index} href={item.href}>
                {item.children}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        {separator}
      </div>
    )}
  >
    <BreadcrumbItem href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:1">
      <HomeIcon className="text-xl" />
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

const WithDropdownItemTemplate = (args: BreadcrumbsProps & {page: number}) => {
  const sizeMap = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-md",
  };

  return (
    <Breadcrumbs
      {...args}
      itemClasses={{
        item: "px-2",
        separator: "px-0",
      }}
    >
      <BreadcrumbItem href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:1">
        <HomeIcon className="text-xl" />
      </BreadcrumbItem>
      <BreadcrumbItem href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:2">
        Music
      </BreadcrumbItem>
      <BreadcrumbItem href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:3">
        Artist
      </BreadcrumbItem>
      <BreadcrumbItem href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:4">
        Album
      </BreadcrumbItem>
      <BreadcrumbItem
        classNames={{
          item: "px-0",
        }}
        href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:5"
      >
        <Dropdown>
          <DropdownTrigger>
            <Button
              className={clsx("h-6 pr-2", args.size && sizeMap[args.size])}
              endContent={<ChevronDownIcon className="text-default-500" />}
              radius="full"
              size="sm"
              variant="solid"
            >
              Songs
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Routes">
            <DropdownItem href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:1">
              Song 1
            </DropdownItem>
            <DropdownItem href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:2">
              Song 2
            </DropdownItem>
            <DropdownItem href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:3">
              Song 3
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </BreadcrumbItem>
    </Breadcrumbs>
  );
};

const CustomStylesTemplate = (args: BreadcrumbsProps & {page: number}) => (
  <Breadcrumbs
    {...args}
    classNames={{
      list: "bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-sm",
    }}
    itemClasses={{
      item: "text-white/60 data-[current=true]:text-white",
      separator: "text-white/40",
    }}
    variant="solid"
  >
    <BreadcrumbItem href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:1">
      <HeadphonesIcon />
    </BreadcrumbItem>
    <BreadcrumbItem href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:2">
      Checkout
    </BreadcrumbItem>
    <BreadcrumbItem href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:3">
      Payment
    </BreadcrumbItem>
    <BreadcrumbItem href="http://localhost:6006/?path=/story/components-breadcrumbs--default&args=page:4">
      Delivery Address
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

// export const ControlledCurrentItem = {
//   render: ControlledTemplate,
//   args: {
//     ...defaultProps,
//   },
// };
//
// export const MenuType = {
//   render: MenuTypeTemplate,
//   args: {
//     ...defaultProps,
//   },
// };
//
// export const WithStartContent = {
//   render: WithStartContentTemplate,
//   args: {
//     ...defaultProps,
//   },
// };
//
// export const WithEndContent = {
//   render: WithEndContentTemplate,
//   args: {
//     ...defaultProps,
//   },
// };
//
// export const WithMaxItems = {
//   render: Template,
//   args: {
//     ...defaultProps,
//     maxItems: 3,
//   },
// };
//
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

// export const WithDropdownItem = {
//   render: WithDropdownItemTemplate,
//   args: {
//     ...defaultProps,
//   },
// };
//
// export const CustomStyles = {
//   render: CustomStylesTemplate,
//   args: {
//     ...defaultProps,
//   },
// };
