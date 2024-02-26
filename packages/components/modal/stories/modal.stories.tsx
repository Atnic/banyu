/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-autofocus */
import React from "react";
import {Meta} from "@storybook/react";
import {modal} from "@jala-banyu/theme";
import {Button} from "@jala-banyu/button";
import {Input} from "@jala-banyu/input";
import {CopyIcon} from "@jala-banyu/shared-icons";
import Lorem from "react-lorem-component";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalProps,
  useDisclosure,
} from "../src";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "lg", "full"],
    },
    radius: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg", "xl"],
    },
    backdrop: {
      control: {
        type: "select",
      },
      options: ["transparent", "blur", "opaque"],
    },
    disableAnimation: {
      control: {
        type: "boolean",
      },
    },
    isDismissable: {
      control: {
        type: "boolean",
      },
    },
    isKeyboardDismissDisabled: {
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
      <div>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Modal>;

const defaultProps = {
  ...modal.defaultVariants,
  disableAnimation: false,
  isDismissable: true,
  isKeyboardDismissDisabled: false,
};

const content = (
  <ModalContent>
    {(onClose) => (
      <>
        <ModalHeader className="flex flex-col gap-1 text-xl font-bold text-neutral-800">
          Blog post published
        </ModalHeader>
        <ModalBody>
          <div>
            <span className="text-neutral-500 text-[14px]">
              This blog post has been published. Team members will be able to edit this post and
              republish changes.
            </span>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button fullWidth color="basic" radius="lg" size="md" onPress={onClose}>
            Cancel
          </Button>
          <Button fullWidth color="primary" radius="lg" size="md" onPress={onClose}>
            Confirm
          </Button>
        </ModalFooter>
      </>
    )}
  </ModalContent>
);

const Template = (args: ModalProps) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure({defaultOpen: args.defaultOpen});

  return (
    <>
      <Button color="primary" radius="lg" size="md" onPress={onOpen}>
        Open Modal
      </Button>
      <Modal {...args} isOpen={isOpen} onOpenChange={onOpenChange}>
        {content}
      </Modal>
    </>
  );
};

const InsideScrollTemplate = (args: ModalProps) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button color="primary" radius="lg" size="md" onPress={onOpen}>
        Open Modal
      </Button>
      <Modal {...args} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader>
            <h1 className="text-xl font-bold !text-neutral-800">Modal Title</h1>
          </ModalHeader>
          <ModalBody>
            <Lorem count={5} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const OutsideScrollTemplate = (args: ModalProps) => {
  const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();

  return (
    <>
      <Button color="primary" radius="lg" size="md" onPress={onOpen}>
        Open Modal
      </Button>
      <Modal {...args} isOpen={isOpen} scrollBehavior="outside" onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader>
            <h1 className="text-xl font-bold !text-neutral-800">Modal Title</h1>
          </ModalHeader>
          <ModalBody>
            <Lorem count={5} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" radius="lg" size="md" onPress={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
const OpenChangeTemplate = (args: ModalProps) => {
  const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();

  return (
    <div className="flex flex-col gap-2">
      <Button color="primary" radius="lg" size="md" onPress={onOpen}>
        Open Modal
      </Button>
      <Modal {...args} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader>
            <h1 className="text-xl font-bold !text-neutral-800">Modal Title</h1>
          </ModalHeader>
          <ModalBody>
            <Lorem count={5} />
          </ModalBody>
          <ModalFooter>
            <Button onPress={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <p className="text-sm">isOpen: {isOpen ? "true" : "false"}</p>
    </div>
  );
};

const WithDividerTemplate = (args: ModalProps) => {
  const {isOpen, onOpen, onClose, onOpenChange} = useDisclosure();

  return (
    <div>
      <Button color="primary" radius="lg" size="md" onPress={onOpen}>
        Open Modal
      </Button>
      <Modal {...args} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 items-center border-b pb-6">
            <h1 className="text-xl font-bold !text-neutral-800">Invite your team</h1>
            <span className="text-sm text-neutral-500 text-center">
              You’ve created a new project! Invite colleagues to collaborate on this project.
            </span>
          </ModalHeader>
          <ModalBody className="flex flex-row gap-1 align-bottom py-6 border-b">
            <div className="w-full flex flex-col gap-[6px]">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="text-[#344054] font-medium text-sm">Share link</label>
              <Input defaultValue="join.untitledui.com/project" radius="lg" />
            </div>
            <Button
              isIconOnly
              className="self-end"
              color="transparent"
              radius="lg"
              size="lg"
              variant="ghost"
            >
              <CopyIcon />
            </Button>
          </ModalBody>
          <ModalFooter>
            <Button fullWidth color="basic" radius="lg" size="md" onPress={onClose}>
              Cancel
            </Button>
            <Button fullWidth color="primary" radius="lg" size="md" onPress={onClose}>
              Confirm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export const Default = {
  render: Template,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=3616%3A214326&mode=dev",
    },
  },
  args: {
    ...defaultProps,
  },
};
export const WithDivider = {
  render: WithDividerTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=3616%3A214326&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    isDismissable: false,
  },
};

export const DefaultOpen = {
  render: Template,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=3616%3A214326&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    defaultOpen: true,
  },
};

export const OpenChange = {
  render: OpenChangeTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=3616%3A214326&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    scrollBehavior: "inside",
  },
};

export const InsideScroll = {
  render: InsideScrollTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=3616%3A214326&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    scrollBehavior: "inside",
  },
};

export const OutsideScroll = {
  render: OutsideScrollTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=3616%3A214326&mode=dev",
    },
  },
  args: {
    ...defaultProps,
  },
};

export const DisableAnimation = {
  render: Template,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=3616%3A214326&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    disableAnimation: true,
  },
};

export const CustomMotion = {
  render: Template,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=3616%3A214326&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    motionProps: {
      variants: {
        enter: {
          opacity: 1,
          y: 0,
          duration: 0.3,
        },
        exit: {
          y: 20,
          opacity: 0,
          duration: 0.3,
        },
      },
    },
  },
};
