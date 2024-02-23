import React from "react";
import {Meta} from "@storybook/react";
import {dropdown, popover} from "@jala-banyu/theme";
import {Button} from "@jala-banyu/button";
import {
  AddNoteBulkIcon,
  CopyDocumentBulkIcon,
  DeleteDocumentBulkIcon,
  EditDocumentBulkIcon,
} from "@jala-banyu/shared-icons";
import {clsx} from "@jala-banyu/shared-utils";
import {Avatar} from "@jala-banyu/avatar";
import {Selection} from "@react-types/shared";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownMenuProps,
  DropdownProps,
  DropdownTrigger,
} from "../src";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["solid", "bordered", "light", "flat", "faded", "shadow"],
    },
    color: {
      control: {
        type: "select",
      },
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
    radius: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg", "full"],
    },
    placement: {
      control: {
        type: "select",
      },
      options: [
        "top",
        "bottom",
        "right",
        "left",
        "top-start",
        "top-end",
        "bottom-start",
        "bottom-end",
        "left-start",
        "left-end",
        "right-start",
        "right-end",
      ],
    },
    backdrop: {
      control: {
        type: "select",
      },
      options: ["transparent", "blur", "opaque"],
    },
    offset: {
      control: {
        type: "number",
      },
    },
    defaultOpen: {
      control: {
        type: "boolean",
      },
    },
    showArrow: {
      control: {
        type: "boolean",
      },
    },
    disableAnimation: {
      control: {
        type: "boolean",
      },
    },
    children: {
      control: {
        disable: true,
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
} as Meta<typeof Dropdown>;

const defaultProps = {
  ...popover.defaultVariants,
  ...dropdown.defaultVariants,
  placement: "bottom",
  offset: 7,
  defaultOpen: false,
  disableAnimation: false,
};

const items = [
  {
    key: "new",
    label: "New file",
  },
  {
    key: "copy",
    label: "Copy link",
  },
  {
    key: "edit",
    label: "Edit file",
  },
  {
    key: "delete",
    label: "Delete file",
  },
];

const Template = ({...args}: DropdownProps & DropdownMenuProps) => (
  <Dropdown {...args}>
    <DropdownTrigger>
      <Button>Trigger</Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="Actions" onAction={alert}>
      <DropdownItem key="new">New file</DropdownItem>
      <DropdownItem key="copy">Copy link</DropdownItem>
      <DropdownItem key="edit">Edit file</DropdownItem>
      <DropdownItem key="delete" className="text-danger">
        Delete file
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
);

const DynamicTemplate = ({...args}: DropdownProps & DropdownMenuProps) => (
  <Dropdown {...args}>
    <DropdownTrigger>
      <Button>Trigger</Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="Actions" items={items} onAction={alert}>
      {(item) => (
        <DropdownItem key={item.key} className={item.key === "delete" ? "text-danger" : ""}>
          {item.label}
        </DropdownItem>
      )}
    </DropdownMenu>
  </Dropdown>
);

const DividerTemplate = ({...args}: DropdownProps & DropdownMenuProps) => (
  <Dropdown {...args}>
    <DropdownTrigger>
      <Button>Trigger</Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="Actions" onAction={alert}>
      <DropdownItem key="new">New file</DropdownItem>
      <DropdownItem key="copy">Copy link</DropdownItem>
      <DropdownItem key="edit" showDivider>
        Edit file
      </DropdownItem>
      <DropdownItem key="delete" className="text-danger">
        Delete file
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
);

const DisabledKeysTemplate = ({...args}: DropdownProps & DropdownMenuProps) => (
  <Dropdown {...args}>
    <DropdownTrigger>
      <Button>Trigger</Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="Actions" disabledKeys={["edit", "delete"]} onAction={alert}>
      <DropdownItem key="new">New file</DropdownItem>
      <DropdownItem key="copy">Copy link</DropdownItem>
      <DropdownItem key="edit">Edit file</DropdownItem>
      <DropdownItem key="delete" className="text-danger">
        Delete file
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
);

const SingleSelectionTemplate = ({...args}: DropdownProps & DropdownMenuProps) => {
  const [selected, setSelected] = React.useState<Selection>(new Set(["text"]));

  const selectedValue = React.useMemo(
    () =>
      Array.from(selected)
        .map((key) => key.toString().replace("_", " "))
        .join(", "),
    [selected],
  );

  return (
    <Dropdown {...args}>
      <DropdownTrigger>
        <Button>{selectedValue}</Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Actions"
        selectedKeys={selected}
        selectionMode="single"
        onSelectionChange={setSelected}
      >
        <DropdownItem key="text">Text</DropdownItem>
        <DropdownItem key="number">Number</DropdownItem>
        <DropdownItem key="date">Date</DropdownItem>
        <DropdownItem key="single_date">Single Date</DropdownItem>
        <DropdownItem key="iteration">Iteration</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

const MultipleSelectionTemplate = ({...args}: DropdownProps & DropdownMenuProps) => {
  const [selected, setSelected] = React.useState<Selection>(new Set(["text"]));

  const selectedValue = React.useMemo(
    () =>
      Array.from(selected)
        .map((key) => key.toString().replace("_", " "))
        .join(", "),
    [selected],
  );

  return (
    <Dropdown {...args}>
      <DropdownTrigger>
        <Button>{selectedValue}</Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Actions"
        closeOnSelect={false}
        selectedKeys={selected}
        selectionMode="multiple"
        onSelectionChange={setSelected}
      >
        <DropdownItem key="text">Text</DropdownItem>
        <DropdownItem key="number">Number</DropdownItem>
        <DropdownItem key="date">Date</DropdownItem>
        <DropdownItem key="single_date">Single Date</DropdownItem>
        <DropdownItem key="iteration">Iteration</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

const WithShortcutTemplate = ({...args}) => (
  <Dropdown {...args}>
    <DropdownTrigger>
      <Button>Trigger</Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="Actions" onAction={alert}>
      <DropdownItem key="new" shortcut="⌘N">
        New file
      </DropdownItem>
      <DropdownItem key="copy" shortcut="⌘C">
        Copy link
      </DropdownItem>
      <DropdownItem key="edit" shortcut="⌘⇧E">
        Edit file
      </DropdownItem>
      <DropdownItem key="delete" className="text-danger" shortcut="⌘⇧D">
        Delete file
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
);

const WithStartContentTemplate = ({
  disableAnimation,
  ...args
}: DropdownProps & DropdownMenuProps) => {
  const iconClasses = "text-2xl text-secondary pointer-events-none flex-shrink-0";

  return (
    <Dropdown {...args} disableAnimation={disableAnimation}>
      <DropdownTrigger>
        <Button color="primary" disableAnimation={disableAnimation} variant="solid">
          Trigger
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Actions" onAction={alert}>
        <DropdownItem
          key="new"
          shortcut="⌘N"
          startContent={<AddNoteBulkIcon className={iconClasses} />}
        >
          New file
        </DropdownItem>
        <DropdownItem
          key="copy"
          shortcut="⌘C"
          startContent={<CopyDocumentBulkIcon className={iconClasses} />}
        >
          Copy link
        </DropdownItem>
        <DropdownItem
          key="edit"
          shortcut="⌘⇧E"
          startContent={<EditDocumentBulkIcon className={iconClasses} />}
        >
          Edit file
        </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger"
          shortcut="⌘⇧D"
          startContent={<DeleteDocumentBulkIcon className={clsx(iconClasses, "!text-danger")} />}
        >
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

const CustomTriggerTemplate = ({...args}) => {
  return (
    <div className="flex items-center gap-10">
      <Dropdown {...args} placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="primary"
            size="md"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem key="logout">Log Out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export const Default = {
  render: Template,
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
  },
  args: {
    ...defaultProps,
  },
};

export const Dynamic = {
  render: DynamicTemplate,

  args: {
    ...defaultProps,
  },
};

export const WithArrow = {
  render: Template,
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
  },
  args: {
    ...defaultProps,
    showArrow: true,
  },
};

export const WithDivider = {
  render: DividerTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
  },
  args: {
    ...defaultProps,
  },
};

export const DisabledKeys = {
  render: DisabledKeysTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
  },
  args: {
    ...defaultProps,
  },
};

export const SingleSelection = {
  render: SingleSelectionTemplate,

  args: {
    ...defaultProps,
  },
};

export const MultipleSelection = {
  render: MultipleSelectionTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
  },
  args: {
    ...defaultProps,
  },
};

export const WithShortcut = {
  render: WithShortcutTemplate,

  args: {
    ...defaultProps,
  },
};

export const WithStartContent = {
  render: WithStartContentTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
  },
  args: {
    ...defaultProps,
    variant: "flat",
    color: "secondary",
  },
};

export const WithCustomTrigger = {
  render: CustomTriggerTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
  },
  args: {
    ...defaultProps,
    variant: "flat",
    offset: 14,
  },
};

export const DisableAnimation = {
  render: WithStartContentTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "",
    },
  },
  args: {
    ...defaultProps,
    showArrow: true,
    variant: "flat",
    color: "secondary",
    disableAnimation: true,
  },
};
