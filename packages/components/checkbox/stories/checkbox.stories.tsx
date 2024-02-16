import React from "react";
// @ts-ignore
import {Meta} from "@storybook/react";
import {checkbox} from "@jala-banyu/theme";
import {CloseIcon} from "@jala-banyu/shared-icons";

import {Checkbox, CheckboxIconProps, CheckboxProps} from "../src";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["solid", "soft"],
    },
    color: {
      control: {
        type: "select",
      },
      options: ["primary", "success", "warning", "danger", "white", "transparent", "basic"],
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
    lineThrough: {
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
} as Meta<typeof Checkbox>;

const defaultProps: CheckboxProps = {
  ...checkbox.defaultVariants,
  children: "Option",
};

const ControlledTemplate = (args: CheckboxProps) => {
  const isRootMounted = React.useRef<boolean>(false);
  const [selected, setSelected] = React.useState<boolean>(true);

  React.useEffect(() => {
    isRootMounted.current = true;

    return () => {
      isRootMounted.current = false;
    };
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <Checkbox
        isSelected={selected}
        onValueChange={isRootMounted ? setSelected : undefined}
        {...args}
      >
        Subscribe (controlled)
      </Checkbox>
      <p className="text-default-500">Selected: {selected ? "true" : "false"}</p>
    </div>
  );
};

export const Default = {
  args: {
    ...defaultProps,
  },
};

export const IsDisabled = {
  args: {
    ...defaultProps,
    isDisabled: true,
  },
};

export const DefaultSelected = {
  args: {
    ...defaultProps,
    defaultSelected: true,
  },
};

export const CustomIconNode = {
  args: {
    ...defaultProps,
    icon: <CloseIcon />,
  },
};

export const CustomIconFunction = {
  args: {
    ...defaultProps,
    // eslint-disable-next-line react/display-name
    icon: (props: CheckboxIconProps) => <CloseIcon {...props} />,
  },
};

export const AlwaysSelected = {
  args: {
    ...defaultProps,
    isSelected: true,
  },
};

export const IsIndeterminate = {
  args: {
    ...defaultProps,
    isIndeterminate: true,
  },
};

export const LineThrough = {
  args: {
    ...defaultProps,
    lineThrough: true,
  },
};

export const DisableAnimation = {
  args: {
    ...defaultProps,
    disableAnimation: true,
  },
};

export const Controlled = {
  render: ControlledTemplate,

  args: {
    ...defaultProps,
  },
};
