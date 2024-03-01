import React, {useEffect} from "react";
import {Meta} from "@storybook/react";
import {alert} from "@jala-banyu/theme";
import {toast, ToastPosition} from "react-toastify";
import {InfoIcon} from "@jala-banyu/shared-icons";
import {Button} from "@jala-banyu/button";
import {Avatar} from "@jala-banyu/avatar";

import {Alert, AlertContainer, AlertProps, AnnouncementContainer} from "../src";
// import "react-toastify/dist/ReactToastify.css";
export default {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    variant: {
      control: {type: "select"},
      options: ["soft", "solid"],
    },
    color: {
      control: {type: "select"},
      options: ["primary", "success", "warning", "danger", "basic", "white"],
    },
    radius: {
      control: {type: "select"},
      options: ["none", "sm", "md", "lg", "full"],
    },
    timeout: {
      control: {type: "number"},
    },
    position: {
      control: {type: "select"},
      options: ["top-left", "top-right", "bottom-left", "bottom-right"],
    },
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center w-dvw h-dvh">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Alert>;

const defaultProps = {
  ...alert.defaultVariants,
  timeout: 3000,
  position: "top-right",
};

const Template = (args: AlertProps & {timeout: number; position: ToastPosition}) => {
  const displayToast = (autoClose?: number) => () => {
    toast(
      <Alert {...args} startIcon={<InfoIcon />} title={"Alert Title"}>
        Lorem Ipsum Dolor Sit Amet
      </Alert>,
      {
        autoClose: autoClose ? autoClose : false,
      },
    );
  };

  return (
    <div className={"flex flex-col gap-2"}>
      <Button onClick={displayToast()}>Show Toast</Button>
      <Button onClick={displayToast(args.timeout)}>Show Toast with Timeout</Button>
      <AlertContainer position={args.position} />
    </div>
  );
};

const WithAvatarTemplate = (args: AlertProps & {timeout: number; position: ToastPosition}) => {
  const displayToast = (autoClose?: number) => () => {
    toast(
      <Alert
        {...args}
        startContent={
          <Avatar
            src={
              "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            }
          />
        }
        startIcon={<InfoIcon />}
        subtitle={"Subtitle"}
        title={"Alert Title"}
      >
        Lorem Ipsum Dolor Sit Amet
      </Alert>,
      {
        autoClose: autoClose ? autoClose : false,
      },
    );
  };

  return (
    <div className={"flex flex-col gap-2"}>
      <Button onClick={displayToast()}>Show Toast</Button>
      <Button onClick={displayToast(args.timeout)}>Show Toast with Timeout</Button>
      <AlertContainer position={args.position} />
    </div>
  );
};

const WithButtonsTemplate = (args: AlertProps & {timeout: number; position: ToastPosition}) => {
  const displayToast = (autoClose?: number) => () => {
    toast(
      <Alert {...args} startIcon={<InfoIcon />} subtitle={"Subtitle"} title={"Alert Title"}>
        Lorem Ipsum Dolor Sit Amet
        <div className="flex flex-row items-center justify-between gap-2">
          <Button variant={"ghost"}>Base Button</Button>
          <Button variant={"outline"}>Base Button</Button>
          <Button variant={"solid"}>Base Button</Button>
        </div>
      </Alert>,
      {
        autoClose: autoClose ? autoClose : false,
      },
    );
  };

  return (
    <div className={"flex flex-col gap-2"}>
      <Button onClick={displayToast()}>Show Toast</Button>
      <Button onClick={displayToast(args.timeout)}>Show Toast with Timeout</Button>
      <AlertContainer position={args.position} />
    </div>
  );
};

const WithListTemplate = (args: AlertProps & {timeout: number; position: ToastPosition}) => {
  const displayToast = (autoClose?: number) => () => {
    toast(
      <Alert {...args} startIcon={<InfoIcon />} title={"Alert Title"}>
        Lorem Ipsum Dolor Sit Amet
        <ul className="list-disc">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Alert>,
      {
        autoClose: autoClose ? autoClose : false,
      },
    );
  };

  return (
    <div className={"flex flex-col gap-2"}>
      <Button onClick={displayToast()}>Show Toast</Button>
      <Button onClick={displayToast(args.timeout)}>Show Toast with Timeout</Button>
      <AlertContainer position={args.position} />
    </div>
  );
};

const AnnouncementBannerTemplate = (args: AlertProps) => {
  const displayToast = () => {
    toast(
      <Alert
        {...args}
        classNames={{base: "w-full m-0 sticky top-0"}}
        color={"warning"}
        radius={"none"}
        startIcon={<InfoIcon />}
        title={"Announcement Title"}
        variant={"soft"}
      />,
    );
  };

  useEffect(() => {
    displayToast();
  }, []);

  return (
    <div className="flex items-start h-full w-full">
      <AnnouncementContainer autoClose={false} position={"top-right"} />
    </div>
  );
};

export const Default = {
  render: Template,
  args: {
    ...defaultProps,
  },
};

export const AnnouncementBanner = {
  render: AnnouncementBannerTemplate,
  args: {
    ...defaultProps,
  },
};

export const WithAvatar = {
  render: WithAvatarTemplate,
  args: {
    ...defaultProps,
  },
};

export const WithButtons = {
  render: WithButtonsTemplate,
  args: {
    ...defaultProps,
  },
};

export const WithList = {
  render: WithListTemplate,
  args: {
    ...defaultProps,
  },
};
