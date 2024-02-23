import {Meta} from "@storybook/react";

import {User} from "../src";

export default {
  title: "Components/User",
  component: User,
} as Meta<typeof User>;

const url = "https://avatars.githubusercontent.com/u/14818854?s=200&v=4";

export const Default = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?type=design&node-id=3616-231802&mode=dev",
    },
  },
  args: {
    name: "JALA Official",
    avatarProps: {
      src: url,
    },
  },
};

export const isFocusable = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?type=design&node-id=3616-231802&mode=dev",
    },
  },
  args: {
    name: "JALA Official",
    isFocusable: true,
    avatarProps: {
      src: url,
    },
  },
};

export const WithDefaultAvatar = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?type=design&node-id=3616-231802&mode=dev",
    },
  },
  args: {
    name: "Muhammad Amien",
    avatarProps: {
      name: "Muhammad Amien",
      src: "https://avatars.githubusercontent.com/u/54246272?v=4",
      getInitials: (name: string) =>
        name
          .split(" ")
          .map((n) => n[0])
          .join(""),
    },
  },
};

export const WithDescription = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?type=design&node-id=3616-231802&mode=dev",
    },
  },
  args: {
    name: "Muhammad Amien",
    description: "Software Engineer",
    avatarProps: {
      src: "https://avatars.githubusercontent.com/u/54246272?v=4",
    },
  },
};

export const WithLinkDescription = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?type=design&node-id=3616-231802&mode=dev",
    },
  },
  args: {
    name: "Muhammad Amien",
    description: <span>@muhamien</span>,
    avatarProps: {
      src: "https://avatars.githubusercontent.com/u/54246272?v=4",
    },
  },
};
