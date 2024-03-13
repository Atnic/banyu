import React from "react";
import {Meta} from "@storybook/react";
import {tabs} from "@jala-banyu/theme";
import Lorem from "react-lorem-component";
import {JalaBiomass, JalaSrEstimation, JalaFinancialReport, JalaPremium} from "@jala-banyu/icons";
import {Button} from "@jala-banyu/button";

import {Tabs, Tab, TabsProps} from "../src";

export default {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["solid", "underlined", "bordered", "light", "vertical"],
    },
    color: {
      control: {
        type: "select",
      },
      options: ["primary", "success", "warning", "danger"],
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
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    disableAnimation: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<typeof Tabs>;

const defaultProps = {
  ...tabs.defaultVariants,
};

const StaticTemplate = (args: TabsProps) => (
  <Tabs aria-label="Tabs example" {...args}>
    <Tab key="all" title="All">
      <Lorem count={1} sentenceUpperBound={20} />
    </Tab>
    <Tab key="operational" title="Operational">
      <Lorem count={1} sentenceUpperBound={30} />
    </Tab>
    <Tab key="inventory" title="Inventory">
      <Lorem count={1} sentenceUpperBound={10} />
    </Tab>
    <Tab key="fry" title="Fry">
      <Lorem count={1} sentenceUpperBound={50} />
    </Tab>
    <Tab key="others" title="Others">
      <Lorem count={1} sentenceUpperBound={24} />
    </Tab>
  </Tabs>
);

const WithEndContentTemplate = (args: TabsProps) => {
  const endContent = (
    <div className={"flex gap-2"}>
      <Button color="primary" size="sm" variant="solid">
        Button 1
      </Button>
      <Button color="primary" size="sm" variant="solid">
        Button 2
      </Button>
      <Button color="primary" size="sm" variant="solid">
        Button 3
      </Button>
    </div>
  );

  return (
    <Tabs aria-label="Tabs example" endContent={endContent} {...args}>
      <Tab key="all" title="All">
        <Lorem count={1} sentenceUpperBound={20} />
      </Tab>
      <Tab key="operational" title="Operational">
        <Lorem count={1} sentenceUpperBound={30} />
      </Tab>
      <Tab key="inventory" title="Inventory">
        <Lorem count={1} sentenceUpperBound={10} />
      </Tab>
      <Tab key="fry" title="Fry">
        <Lorem count={1} sentenceUpperBound={50} />
      </Tab>
    </Tabs>
  );
};

const WithIconsTemplate = (args: TabsProps) => (
  <Tabs
    aria-label="Tabs example"
    {...args}
    classNames={{
      tab: "text-lg",
    }}
  >
    <Tab key="biomass" title={<JalaBiomass />} titleValue="Biomass" />
    <Tab key="sr-estomation" title={<JalaSrEstimation />} titleValue="SR Estimation" />
    <Tab key="finance-report" title={<JalaFinancialReport />} titleValue="Finance Report" />
    <Tab key="siklus-pro" title={<JalaPremium />} titleValue="Siklus Pro" />
  </Tabs>
);

// @ts-ignore
const TabContentExample = ({icon, value}) => (
  <div className="flex gap-2 justify-center items-center">
    {icon}
    <span>{value}</span>
  </div>
);
const IconWithTextTemplate = (args: TabsProps) => (
  <Tabs
    aria-label="Tabs example"
    {...args}
    classNames={{
      tab: "text-sm",
    }}
  >
    <Tab
      key="biomass"
      title={<TabContentExample icon={<JalaBiomass />} value="Biomass" />}
      titleValue="Biomass"
    />
    <Tab
      key="sr-estimation"
      title={<TabContentExample icon={<JalaSrEstimation />} value="SR Estimation" />}
      titleValue="SR Estimation"
    />
    <Tab
      key="finance-report"
      title={<TabContentExample icon={<JalaFinancialReport />} value="Finance Report" />}
      titleValue="Finance Report"
    />
    <Tab
      key="siklus-pro"
      title={<TabContentExample icon={<JalaPremium />} value="Siklus Pro" />}
      titleValue="Siklus Pro"
    />
  </Tabs>
);

export const Horizontal = {
  render: StaticTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=330%3A139059&mode=dev",
    },
  },
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

export const Underline = {
  render: StaticTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=330%3A139059&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    variant: "underlined",
  },
};
export const UnderlineWithIcon = {
  render: IconWithTextTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=330%3A139059&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    variant: "underlined",
  },
};

export const IconOnly = {
  render: WithIconsTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=330%3A139059&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    variant: "solid",
  },
};

export const IconWithText = {
  render: IconWithTextTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=330%3A139059&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    variant: "solid",
  },
};

export const Disabled = {
  render: IconWithTextTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=330%3A139059&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    variant: "solid",
    disabledKeys: ["siklus-pro"],
  },
};

export const Vertical = {
  render: IconWithTextTemplate,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/T0TUGURgVGElV6MtU2EPYU/%5BJDS%5D-Design-System---Banyu-1.0?node-id=1310%3A14371&mode=dev",
    },
  },
  args: {
    ...defaultProps,
    variant: "vertical",
  },
};
