/* eslint-disable react/display-name */
import React, {ChangeEvent, ReactNode} from "react";
import {Meta} from "@storybook/react";
import {select, button} from "@jala-banyu/theme";
import {AvatarIcon, PetBoldIcon, Plus, SelectorIcon} from "@jala-banyu/shared-icons";
import {Avatar} from "@jala-banyu/avatar";
import {Button} from "@jala-banyu/button";
import {Selection} from "@react-types/shared";
import {useInfiniteScroll} from "@jala-banyu/use-infinite-scroll";
import {
  Pokemon,
  usePokemonList,
  animalsData,
  usersData,
  Animal,
  User,
} from "@jala-banyu/stories-utils";
import {JalaEsp, JalaIdn, JalaUsa, JalaVie} from "@jala-banyu/icons";
import {Input} from "@jala-banyu/input";
import {Search} from "react-feather";

import {Select, SelectItem, SelectProps, SelectSection} from "../src";

export default {
  title: "Components/Select",
  component: Select,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["default", "ghost", "dropdown"],
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
    labelPlacement: {
      control: {
        type: "select",
      },
      options: ["outside", "outside-left"],
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex items-start justify-center w-screen h-screen">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Select>;

const defaultProps = {
  ...select.defaultVariants,
};

const items = animalsData.map((item) => (
  <SelectItem key={item.value} value={item.value}>
    {item.label}
  </SelectItem>
));

const Template = ({variant, ...args}: SelectProps) => (
  <Select className="max-w-xs" label="Favorite Animal" variant={variant} {...args}>
    {items}
  </Select>
);

const DropDownTemplate = ({variant, ...args}: SelectProps) => {
  const regions = [
    {key: "idn", label: "IDN", icon: <JalaIdn className={"text-2xl"} />},
    {key: "eng", label: "ENG", icon: <JalaUsa className={"text-2xl"} />},
    {key: "esp", label: "ESP", icon: <JalaEsp className={"text-2xl"} />},
    {key: "vie", label: "VIE", icon: <JalaVie className={"text-2xl"} />},
  ];

  return (
    <Select
      classNames={{
        base: "max-w-14",
        innerWrapper: "mr-0",
        popoverContent: "min-w-24",
      }}
      defaultSelectedKeys={["idn"]}
      renderValue={(items) => {
        return items.map((item) => item.props?.startContent);
      }}
      selectionMode={"single"}
      variant={variant}
      {...args}
    >
      {regions.map((item) => (
        <SelectItem key={item.key} startContent={item.icon} value={item.key}>
          {item.label}
        </SelectItem>
      ))}
    </Select>
  );
};

const ItemStartContentTemplate = ({variant, ...args}: SelectProps<Animal>) => {
  const [startContent, setStartContent] = React.useState<ReactNode | null>(null);

  const examples = Array.from({length: 10}, (_, i) => ({
    value: `item-${i}`,
    icon: <PetBoldIcon />,
    label: `Item ${i}`,
  }));

  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setStartContent(examples.find((item) => item.value === e.target.value)?.icon ?? null);
  };

  return (
    <Select
      className="max-w-xs"
      label="Select country"
      variant={variant}
      {...args}
      startContent={startContent}
      onChange={handleSelectionChange}
    >
      {examples.map((item) => (
        <SelectItem key={item.value} startContent={item.icon} value={item.value}>
          {item.label}
        </SelectItem>
      ))}
    </Select>
  );
};

const ControlledTemplate = ({variant, ...args}: SelectProps<Animal>) => {
  const [value, setValue] = React.useState<Selection>(new Set(["cat"]));

  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(new Set([e.target.value]));
  };

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Select
        fullWidth
        items={animalsData}
        label="Favorite Animal"
        selectedKeys={value}
        variant={variant}
        onChange={handleSelectionChange}
        {...args}
      >
        {(item) => <SelectItem key={item.value}>{item.label}</SelectItem>}
      </Select>
      <p className="text-default-500">Selected: {value}</p>
    </div>
  );
};

const RequiredTemplate = ({variant, ...args}: SelectProps) => {
  return (
    <form
      className="w-full max-w-xs items-end flex flex-col gap-4"
      onSubmit={(e) => {
        alert(`Submitted value: ${e.target["favorite-animal"].value}`);
        e.preventDefault();
      }}
    >
      <Select isRequired label="Favorite Animal" name="favorite-animal" variant={variant} {...args}>
        {items}
      </Select>
      <button className={button({className: "max-w-fit"})} type="submit">
        Submit
      </button>
    </form>
  );
};

const MirrorTemplate = ({variant, ...args}: SelectProps) => (
  <div className="w-full max-w-xl flex flex-row gap-4">
    <Select className="max-w-xs" label="Select an animal" variant={variant} {...args}>
      {items}
    </Select>
    <Select
      className="max-w-xs"
      label="Favorite Animal"
      placeholder="Select an animal"
      variant={variant}
      {...args}
    >
      {items}
    </Select>
  </div>
);

const LabelPlacementTemplate = ({variant, ...args}: SelectProps) => (
  <div className="w-full flex flex-col items-start gap-12">
    <div className="w-full max-w-2xl flex flex-col gap-3">
      <h3>Without placeholder</h3>
      <div className="w-full flex flex-row items-end gap-4">
        <Select label="Select an animal" variant={variant} {...args}>
          {items}
        </Select>
        <Select label="Select an animal" variant={variant} {...args} labelPlacement="outside">
          {items}
        </Select>
        <Select label="Select an animal" variant={variant} {...args} labelPlacement="outside-left">
          {items}
        </Select>
      </div>
    </div>
    <div className="w-full max-w-2xl flex flex-col gap-3">
      <h3>With placeholder</h3>
      <div className="w-full flex flex-row items-end gap-4">
        <Select label="Favorite Animal" placeholder="Select an animal" variant={variant} {...args}>
          {items}
        </Select>
        <Select
          label="Favorite Animal"
          placeholder="Select an animal"
          variant={variant}
          {...args}
          labelPlacement="outside"
        >
          {items}
        </Select>
        <Select
          label="Favorite Animal"
          placeholder="Select an animal"
          variant={variant}
          {...args}
          labelPlacement="outside-left"
        >
          {items}
        </Select>
      </div>
    </div>
  </div>
);

const StartContentTemplate = ({variant, ...args}: SelectProps) => (
  <Select
    className="max-w-xs"
    defaultSelectedKeys={["cat"]}
    label="Favorite Animal"
    startContent={<PetBoldIcon />}
    variant={variant}
    {...args}
  >
    {items}
  </Select>
);

const CustomItemsTemplate = ({variant, ...args}: SelectProps<User>) => (
  <div className="w-full justify-center flex gap-2">
    <Select className="max-w-xs" items={usersData} label="Assigned to" variant={variant} {...args}>
      {usersData.map((item) => (
        <SelectItem key={item.id} textValue={item.name}>
          <div className="flex gap-2 items-center">
            <span className="text-small">{item.name}</span>
            <AvatarIcon />
          </div>
        </SelectItem>
      ))}
      <SelectItem key="add-new-user" className="sticky bottom-0 bg-content1">
        <Button className="w-full" size="sm" variant="ghost">
          Add new user
        </Button>
      </SelectItem>
    </Select>
    <Select
      className="max-w-xs mt-8"
      items={usersData}
      label="Assigned to"
      placeholder="Assigned to"
      variant={variant}
      {...args}
    >
      {(item) => (
        <SelectItem key={item.id} textValue={item.name}>
          <div className="flex gap-2 items-center">
            <Avatar alt={item.name} className="flex-shrink-0" size="sm" src={item.avatar} />
            <div className="flex flex-col">
              <span className="text-small">{item.name}</span>
              <span className="text-tiny text-default-400">{item.email}</span>
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  </div>
);

const WithSectionsTemplate = ({variant, ...args}: SelectProps<User>) => {
  return (
    <Select className="max-w-xs" label="Favorite Animal" variant={variant} {...args}>
      <SelectSection showDivider title="Mammals">
        <SelectItem key="Lion">Lion</SelectItem>
        <SelectItem key="Tiger">Tiger</SelectItem>
        <SelectItem key="Elephant">Elephant</SelectItem>
        <SelectItem key="Kangaroo">Kangaroo</SelectItem>
        <SelectItem key="Panda">Panda</SelectItem>
        <SelectItem key="Giraffe">Giraffe</SelectItem>
        <SelectItem key="Zebra">Zebra</SelectItem>
        <SelectItem key="Cheetah">Cheetah</SelectItem>
      </SelectSection>
      <SelectSection title="Birds">
        <SelectItem key="Eagle">Eagle</SelectItem>
        <SelectItem key="Parrot">Parrot</SelectItem>
        <SelectItem key="Penguin">Penguin</SelectItem>
        <SelectItem key="Ostrich">Ostrich</SelectItem>
        <SelectItem key="Peacock">Peacock</SelectItem>
        <SelectItem key="Swan">Swan</SelectItem>
        <SelectItem key="Falcon">Falcon</SelectItem>
        <SelectItem key="Flamingo">Flamingo</SelectItem>
      </SelectSection>
    </Select>
  );
};
const WithTopAndBottomContentTemplate = ({variant, ...args}: SelectProps) => {
  const topContent = (
    <div className="p-1 w-full">
      <Input placeholder="Search" startIcon={<Search className={"text-lg"} />} />
    </div>
  );
  const bottomContent = (
    <div className="flex justify-start">
      <Button size="sm" variant="ghost">
        <Plus fill={"currentColor"} />
        Add new
      </Button>
    </div>
  );

  return (
    <Select
      className="max-w-xs"
      label="Favorite Animal"
      variant={variant}
      {...args}
      bottomContent={bottomContent}
      topContent={topContent}
    >
      {items}
    </Select>
  );
};
const WithAriaLabelTemplate = ({variant, ...args}: SelectProps) => (
  <Select className="max-w-xs" label="Favorite Animal" variant={variant} {...args}>
    {items}
  </Select>
);
const AsyncLoadingTemplate = ({variant, ...args}: SelectProps<Pokemon>) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const {items, hasMore, isLoading, onLoadMore} = usePokemonList({fetchDelay: 1500});

  const [, scrollerRef] = useInfiniteScroll({
    hasMore,
    distance: 20,
    isEnabled: isOpen,
    shouldUseLoader: false, // We don't want to show the loader at the bottom of the list
    onLoadMore,
  });

  return (
    <Select
      className="max-w-xs"
      isLoading={isLoading}
      items={items}
      label="Pick a Pokemon"
      placeholder="Select a Pokemon"
      scrollRef={scrollerRef}
      selectionMode="single"
      variant={variant}
      onOpenChange={setIsOpen}
      {...args}
    >
      {(item) => (
        <SelectItem key={item.name} className="capitalize">
          {item.name}
        </SelectItem>
      )}
    </Select>
  );
};

export const Default = {
  render: MirrorTemplate,

  args: {
    ...defaultProps,
  },
};

export const Multiple = {
  render: Template,

  args: {
    ...defaultProps,
    selectionMode: "multiple",
  },
};

export const Required = {
  render: RequiredTemplate,

  args: {
    ...defaultProps,
  },
};

export const Disabled = {
  render: Template,

  args: {
    ...defaultProps,
    selectedKey: "cat",
    variant: "faded",
    isDisabled: true,
  },
};

export const DisabledOptions = {
  render: Template,

  args: {
    ...defaultProps,
    disabledKeys: ["zebra", "tiger", "lion", "elephant", "crocodile", "whale"],
  },
};

export const WithoutLabel = {
  render: Template,

  args: {
    ...defaultProps,
    label: null,
    "aria-label": "Select an animal",
    placeholder: "Select an animal",
  },
};

export const LabelPlacement = {
  render: LabelPlacementTemplate,

  args: {
    ...defaultProps,
  },
};

export const AsyncLoading = {
  render: AsyncLoadingTemplate,

  args: {
    ...defaultProps,
  },
};

export const StartContent = {
  render: StartContentTemplate,

  args: {
    ...defaultProps,
  },
};

export const WithIconStart = {
  render: ItemStartContentTemplate,

  args: {
    ...defaultProps,
  },
};

export const IsInvalid = {
  render: Template,

  args: {
    ...defaultProps,
    isInvalid: true,
    variant: "default",
    defaultSelectedKeys: ["dog"],
    errorMessage: "Please select a valid animal",
  },
};

export const IsSuccess = {
  render: Template,

  args: {
    ...defaultProps,
    isSuccess: true,
    variant: "default",
    defaultSelectedKeys: ["dog"],
  },
};

export const Controlled = {
  render: ControlledTemplate,

  args: {
    ...defaultProps,
  },
};

export const CustomSelectorIcon = {
  render: Template,

  args: {
    ...defaultProps,
    disableSelectorIconRotation: true,
    selectorIcon: <SelectorIcon />,
  },
};

export const CustomItems = {
  render: CustomItemsTemplate,

  args: {
    ...defaultProps,
  },
};

export const WithSections = {
  render: WithSectionsTemplate,

  args: {
    ...defaultProps,
  },
};

export const WithAriaLabel = {
  render: WithAriaLabelTemplate,

  args: {
    ...defaultProps,
    label: "Select an animal 🐹",
    "aria-label": "Select an animal",
  },
};

export const DropdownSelect = {
  render: DropDownTemplate,

  args: {
    ...defaultProps,
    variant: "dropdown",
  },
};

export const WithTopAndBottomContent = {
  render: WithTopAndBottomContentTemplate,

  args: {
    ...defaultProps,
  },
};
