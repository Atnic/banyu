import React from "react";
import {Meta} from "@storybook/react";
import {input} from "@jala-banyu/theme";
// @ts-ignore

import {Textarea, TextAreaProps} from "../src";

export default {
  title: "Components/Textarea",
  component: Textarea,
  argTypes: {
    radius: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg"],
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
      options: ["inside", "outside", "outside-left"],
    },
    disableAutosize: {
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
      <div>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Textarea>;

const defaultProps = {
  ...input.defaultVariants,
  disableAutosize: false,
  label: "Description",
  placeholder: "Enter your description",
};

const Template = (args: TextAreaProps) => (
  <div className="w-full max-w-[440px]">
    <Textarea {...args} />
  </div>
);

const MaxLengthTemplate = (args: TextAreaProps) => {
  const maxLength = 200;
  const [value, setValue] = React.useState("");

  return (
    <div className="w-full max-w-[440px]">
      <Textarea
        {...args}
        maxLength={maxLength}
        maxLengthContent={
          <div className="flex justify-end w-full text-neutral-500 text-xs mt-1">
            {value.length}/{maxLength}
          </div>
        }
        value={value}
        onValueChange={setValue}
      />
    </div>
  );
};

const ControlledTemplate = (args: TextAreaProps) => {
  const [value, setValue] = React.useState("");

  return (
    <div className="w-full  flex-col gap-2 max-w-[440px]">
      <Textarea {...args} value={value} onValueChange={setValue} />
      <p className="text-default-500 text-small">Textarea value: {value}</p>
    </div>
  );
};

const MinRowsTemplate = (args: TextAreaProps) => (
  <div className="w-full max-w-xl flex flex-row gap-4">
    <Textarea {...args} description="Default minRows is 3" />
    <Textarea {...args} description="minRows is 5" minRows={5} />
    <Textarea {...args} description="minRows is 10" minRows={10} />
  </div>
);

const MaxRowsTemplate = (args: TextAreaProps) => (
  <div className="w-full max-w-xl flex flex-row gap-4">
    <Textarea {...args} description="Default maxRows is 8" />
    <Textarea {...args} description="maxRows is 5" maxRows={5} />
    <Textarea {...args} description="maxRows is 3" maxRows={3} />
  </div>
);

export const Default = {
  render: Template,

  args: {
    ...defaultProps,
  },
};

export const Required = {
  render: Template,

  args: {
    ...defaultProps,
    isRequired: true,
  },
};

export const MaxLength = {
  render: MaxLengthTemplate,

  args: {
    ...defaultProps,
    isRequired: true,
  },
};

export const ReadOnly = {
  render: Template,

  args: {
    ...defaultProps,
    defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isReadOnly: true,
  },
};

export const Controlled = {
  render: ControlledTemplate,

  args: {
    ...defaultProps,
  },
};

export const MinRows = {
  render: MinRowsTemplate,

  args: {
    ...defaultProps,
  },
};

export const MaxRows = {
  render: MaxRowsTemplate,

  args: {
    ...defaultProps,
    defaultValue:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec ultricies ultricies, nisl nisl aliquam nisl, eget tincidunt nunc nisl eget nisl. Nullam euismod, nisl nec",
  },
};

export const WithErrorMessage = {
  render: Template,

  args: {
    ...defaultProps,
    errorMessage: "Please enter a valid description",
  },
};

export const IsInvalid = {
  render: Template,

  args: {
    ...defaultProps,
    isInvalid: true,
    defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    errorMessage: "Please enter a valid description",
  },
};

export const Disabled = {
  render: Template,

  args: {
    ...defaultProps,
    defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    isDisabled: true,
  },
};
