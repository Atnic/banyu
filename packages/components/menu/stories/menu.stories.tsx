import React from "react";
import {Meta} from "@storybook/react";
import {Selection} from "@react-types/shared";
import {menuItem} from "@jala-banyu/theme";
import {
  AddNoteBulkIcon,
  CopyDocumentBulkIcon,
  EditDocumentBulkIcon,
  DeleteDocumentBulkIcon,
} from "@jala-banyu/shared-icons";
import {clsx} from "@jala-banyu/shared-utils";

import {Menu, MenuItem, MenuSection, MenuProps} from "../src";

export default {
  title: "Components/Menu",
  component: Menu,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="w-full max-w-[260px] border-md px-1 py-2 rounded-md border-neutral-200 dark:border-neutral-100">
          <Story />
        </div>
      </div>
    ),
  ],
} as Meta<typeof Menu>;

const defaultProps = {
  ...menuItem.defaultVariants,
};

const Template = ({...args}: MenuProps) => {
  const [selected, setSelected] = React.useState<Selection>();

  return (
    <Menu
      aria-label="Actions"
      {...args}
      selectedKeys={selected}
      selectionMode="single"
      onSelectionChange={setSelected}
    >
      <MenuItem key="new">New file</MenuItem>
      <MenuItem key="copy">Copy link</MenuItem>
      <MenuItem key="edit">Edit file</MenuItem>
      <MenuItem key="delete" className="text-danger">
        Delete file
      </MenuItem>
    </Menu>
  );
};

const DisabledKeysTemplate = ({...args}: MenuProps) => (
  <Menu
    aria-label="Actions"
    disabledKeys={["edit", "delete"]}
    selectedKeys={["delete"]}
    selectionMode="single"
    {...args}
  >
    <MenuItem key="new">New file</MenuItem>
    <MenuItem key="copy">Copy link</MenuItem>
    <MenuItem key="edit">Edit file</MenuItem>
    <MenuItem key="delete">Delete file</MenuItem>
  </Menu>
);

const SingleSelectionTemplate = ({...args}: MenuProps) => {
  const [selected, setSelected] = React.useState<Selection>(new Set(["text"]));

  return (
    <Menu
      disallowEmptySelection
      aria-label="Actions"
      selectedKeys={selected}
      selectionMode="single"
      onSelectionChange={setSelected}
      {...args}
    >
      <MenuItem key="text">Text</MenuItem>
      <MenuItem key="number">Number</MenuItem>
      <MenuItem key="date">Date</MenuItem>
      <MenuItem key="single_date">Single Date</MenuItem>
      <MenuItem key="iteration">Iteration</MenuItem>
    </Menu>
  );
};

const MultipleSelectionTemplate = ({...args}: MenuProps) => {
  const [selected, setSelected] = React.useState<Selection>(new Set(["text"]));

  return (
    <Menu
      disallowEmptySelection
      aria-label="Actions"
      closeOnSelect={false}
      selectedKeys={selected}
      selectionMode="multiple"
      onSelectionChange={setSelected}
      {...args}
    >
      <MenuItem key="text">Text</MenuItem>
      <MenuItem key="number">Number</MenuItem>
      <MenuItem key="date">Date</MenuItem>
      <MenuItem key="single_date">Single Date</MenuItem>
      <MenuItem key="iteration">Iteration</MenuItem>
    </Menu>
  );
};

const WithShortcutTemplate = ({...args}: MenuProps) => (
  <Menu aria-label="Actions" {...args}>
    <MenuItem key="new" shortcut="⌘N">
      New file
    </MenuItem>
    <MenuItem key="copy" shortcut="⌘C">
      Copy link
    </MenuItem>
    <MenuItem key="edit" shortcut="⌘⇧E">
      Edit file
    </MenuItem>
    <MenuItem key="delete" className="text-danger" shortcut="⌘⇧D">
      Delete file
    </MenuItem>
  </Menu>
);

const WithStartContentTemplate = ({disableAnimation, ...args}: MenuProps) => {
  const iconClasses = "text-2xl text-secondary pointer-events-none flex-shrink-0";

  return (
    <Menu aria-label="Actions" disableAnimation={disableAnimation} {...args}>
      <MenuItem key="new" shortcut="⌘N" startContent={<AddNoteBulkIcon className={iconClasses} />}>
        New file
      </MenuItem>
      <MenuItem
        key="copy"
        shortcut="⌘C"
        startContent={<CopyDocumentBulkIcon className={iconClasses} />}
      >
        Copy link
      </MenuItem>
      <MenuItem
        key="edit"
        shortcut="⌘⇧E"
        startContent={<EditDocumentBulkIcon className={iconClasses} />}
      >
        Edit file
      </MenuItem>
      <MenuItem
        key="delete"
        className="text-danger"
        shortcut="⌘⇧D"
        startContent={<DeleteDocumentBulkIcon className={clsx(iconClasses, "!text-danger")} />}
      >
        Delete file
      </MenuItem>
    </Menu>
  );
};

const WithEndContentTemplate = ({disableAnimation, ...args}: MenuProps) => {
  const iconClasses = "text-2xl text-neutral-500 pointer-events-none flex-shrink-0";

  return (
    <Menu aria-label="Actions" disableAnimation={disableAnimation} {...args}>
      <MenuItem key="new" endContent={<AddNoteBulkIcon className={iconClasses} />}>
        New file
      </MenuItem>
      <MenuItem key="copy" endContent={<CopyDocumentBulkIcon className={iconClasses} />}>
        Copy link
      </MenuItem>
      <MenuItem key="edit" endContent={<EditDocumentBulkIcon className={iconClasses} />}>
        Edit file
      </MenuItem>
      <MenuItem
        key="delete"
        className="text-danger"
        endContent={<DeleteDocumentBulkIcon className={clsx(iconClasses, "!text-danger")} />}
      >
        Delete file
      </MenuItem>
    </Menu>
  );
};

const WithDescriptionTemplate = ({disableAnimation, ...args}: MenuProps) => {
  const iconClasses = "text-2xl text-secondary pointer-events-none flex-shrink-0";

  return (
    <Menu aria-label="Actions" disableAnimation={disableAnimation} {...args}>
      <MenuItem
        key="new"
        description="Create a new file"
        shortcut="⌘N"
        startContent={<AddNoteBulkIcon className={iconClasses} />}
      >
        New file
      </MenuItem>
      <MenuItem
        key="copy"
        description="Copy the file link"
        shortcut="⌘C"
        startContent={<CopyDocumentBulkIcon className={iconClasses} />}
      >
        Copy link
      </MenuItem>
      <MenuItem
        key="edit"
        description="Allows you to edit the file"
        shortcut="⌘⇧E"
        startContent={<EditDocumentBulkIcon className={iconClasses} />}
      >
        Edit file
      </MenuItem>
      <MenuItem
        key="delete"
        className="text-danger"
        description="Permanently delete the file"
        shortcut="⌘⇧D"
        startContent={<DeleteDocumentBulkIcon className={clsx(iconClasses, "!text-danger")} />}
      >
        Delete file
      </MenuItem>
    </Menu>
  );
};

const WithSectionsTemplate = ({disableAnimation, ...args}: MenuProps) => {
  const iconClasses = "text-2xl text-secondary pointer-events-none flex-shrink-0";

  return (
    <Menu aria-label="Actions" closeOnSelect={false} disableAnimation={disableAnimation} {...args}>
      <MenuSection title="Actions">
        <MenuItem
          key="new"
          description="Create a new file"
          shortcut="⌘N"
          startContent={<AddNoteBulkIcon className={iconClasses} />}
        >
          New file
        </MenuItem>
        <MenuItem
          key="copy"
          description="Copy the file link"
          shortcut="⌘C"
          startContent={<CopyDocumentBulkIcon className={iconClasses} />}
        >
          Copy link
        </MenuItem>
        <MenuItem
          key="edit"
          description="Allows you to edit the file"
          shortcut="⌘⇧E"
          startContent={<EditDocumentBulkIcon className={iconClasses} />}
        >
          Edit file
        </MenuItem>
      </MenuSection>
      <MenuSection title="Danger zone">
        <MenuItem
          key="delete"
          className="text-danger"
          description="Permanently delete the file"
          shortcut="⌘⇧D"
          startContent={<DeleteDocumentBulkIcon className={clsx(iconClasses, "!text-danger")} />}
        >
          Delete file
        </MenuItem>
      </MenuSection>
    </Menu>
  );
};

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

export const DisabledKeys = {
  render: DisabledKeysTemplate,

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

  args: {
    ...defaultProps,
  },
};

export const WithEndContent = {
  render: WithEndContentTemplate,

  args: {
    ...defaultProps,
  },
};

export const WithDescription = {
  render: WithDescriptionTemplate,

  args: {
    ...defaultProps,
    className: "min-w-[240px]",
  },
};

export const WithSections = {
  render: WithSectionsTemplate,

  args: {
    ...defaultProps,
    className: "min-w-[240px]",
  },
};
