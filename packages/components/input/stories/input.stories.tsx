/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import {Meta} from "@storybook/react";
import {input} from "@jala-banyu/theme";

import {Input} from "../src";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["flat", "underlined"],
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
      <div className="w-400">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Input>;

const defaultProps = {
  ...input.defaultVariants,
};

const Template = (args) => (
  <div className="w-full max-w-[400px]">
    <Input {...args} />
  </div>
);

const RegexValidationTemplate = (args) => {
  const [value, setValue] = React.useState("");

  const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const validationState = React.useMemo(() => {
    if (value === "") return false;

    return !!validateEmail(value);
  }, [value]);

  return (
    <div className="w-full max-w-[240px]">
      <Input
        {...args}
        errorMessage={!validationState && "Please enter a valid email"}
        isInvalid={!validationState || false}
        isValid={validationState || false}
        placeholder="Enter your email"
        value={value}
        onValueChange={setValue}
      />
    </div>
  );
};

const StartContentTemplate = (args) => (
  <div className="w-full max-w-xl flex flex-row items-end gap-4">
    <Input
      {...args}
      defaultValue="100000"
      label="Price"
      placeholder="0"
      startContent={
        <div className="flex items-center">
          <label className="sr-only" htmlFor="currency">
            Currency
          </label>
          <select
            className="outline-none border-0 bg-transparent text-default-400 text-sm"
            id="currency"
            name="currency"
          >
            <option>Rp</option>
            <option>$</option>
            <option>€</option>
            <option>£</option>
            <option>¥</option>
          </select>
        </div>
      }
      type="number"
    />
  </div>
);

const EndContentTemplate = (args) => (
  <div className="w-full max-w-max flex flex-row items-end gap-4">
    <Input
      {...args}
      defaultValue="jala"
      endContent={
        <div className="pointer-events-none flex items-center">
          <span className="text-default-400 text-sm">.tech</span>
        </div>
      }
      label="Website"
      placeholder="Domain name"
      type="url"
    />
  </div>
);

const StartAndEndContentTemplate = (args) => (
  <div className="w-full max-w-max flex flex-col items-end gap-4">
    <Input
      {...args}
      defaultValue="jala"
      endContent={
        <div className="flex items-center">
          <select
            className="outline-none border-0 bg-transparent text-default-400 text-sm"
            id="currency"
            name="currency"
          >
            <option>tech</option>
            <option>.com</option>
            <option>.id</option>
            <option>.co.id</option>
            <option>.ing</option>
          </select>
        </div>
      }
      label="Domain Name"
      placeholder="Enter your domain name"
      startContent={
        <div className="pointer-events-none flex items-center">
          <span className="text-default-400 text-sm">https://</span>
        </div>
      }
      type="url"
    />
  </div>
);

export const Default = {
  render: Template,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?type=design&node-id=286-126761&mode=design&t=wbXw9jjsRU5kGs5c-4",
    },
  },
  args: {
    ...defaultProps,
    label: "Label",
    placeholder: "Example placeholder",
  },
};

export const Underlined = {
  render: Template,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?type=design&node-id=286-126761&mode=design&t=wbXw9jjsRU5kGs5c-4",
    },
  },
  args: {
    ...defaultProps,
    label: "Label",
    placeholder: "Example placeholder",
    variant: "underlined",
    labelPlacement: "outside-left",
  },
};

export const Required = {
  render: Template,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?type=design&node-id=286-126761&mode=design&t=wbXw9jjsRU5kGs5c-4",
    },
  },
  args: {
    ...defaultProps,
    label: "Label",
    placeholder: "Example placeholder",
    isRequired: true,
  },
};

export const IsInvalid = {
  render: RegexValidationTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?type=design&node-id=286-126761&mode=design&t=wbXw9jjsRU5kGs5c-4",
    },
  },
  args: {
    ...defaultProps,
    isRequired: true,
    label: "Email",
    defaultValue: "amien@jala.tech",
  },
};
export const IsValid = {
  render: Template,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?type=design&node-id=286-126761&mode=design&t=wbXw9jjsRU5kGs5c-4",
    },
  },
  args: {
    ...defaultProps,
    isValid: true,
    isRequired: true,
    label: "Username",
    placeholder: "Enter your username",
    errorMessage: "Username is available",
    defaultValue: "muhamien",
  },
};
export const Clearable = {
  render: Template,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?type=design&node-id=286-126761&mode=design&t=wbXw9jjsRU5kGs5c-4",
    },
  },
  args: {
    ...defaultProps,
    label: "Email",
    isRequired: true,
    placeholder: "Enter your email",
    defaultValue: "muhammadamien23@gmail.com",
    // eslint-disable-next-line no-console
    onClear: () => console.log("input cleared"),
  },
};

export const StartContent = {
  render: StartContentTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?type=design&node-id=286-126761&mode=design&t=wbXw9jjsRU5kGs5c-4",
    },
  },
  args: {
    ...defaultProps,
  },
};

export const EndContent = {
  render: EndContentTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?type=design&node-id=286-126761&mode=design&t=wbXw9jjsRU5kGs5c-4",
    },
  },
  args: {
    ...defaultProps,
    labelPlacement: "outside",
  },
};

export const StartAndEndContent = {
  render: StartAndEndContentTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?type=design&node-id=286-126761&mode=design&t=wbXw9jjsRU5kGs5c-4",
    },
  },
  args: {
    ...defaultProps,
    labelPlacement: "outside",
    errorMessage: "Domain not available!",
  },
};

export const ReadOnly = {
  render: Template,

  args: {
    ...defaultProps,
    label: "Email",
    defaultValue: "amien@jala.tech",
    isReadOnly: true,
  },
};

export const Disabled = {
  render: Template,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?type=design&node-id=286-126761&mode=design&t=wbXw9jjsRU5kGs5c-4",
    },
  },
  args: {
    ...defaultProps,
    label: "Label",
    placeholder: "Example placeholder",
    isDisabled: true,
  },
};
