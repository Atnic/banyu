import React from "react";
import {Meta} from "@storybook/react";
import {parseToRgba, readableColor} from "color2k";

import {commonColors} from "../src/colors";

type ColorsItem = {
  color: string;
  className?: string;
  textClassName?: string;
};

type SwatchColors = {
  title: string;
  items: ColorsItem[];
};

type SwatchSetProps = {
  colors: SwatchColors[];
  isSematic?: boolean;
};


const Swatch = ({color, index, title}: {color: string, index: number, title:string}) => {
  let colorKey = {
    0: "50",
    1: "100",
    2: "200",
    3: "300",
    4: "400",
    5: "500",
    6: "600",
    7: "700",
    8: "800",
    9: "900",
    10: "950",
  };
  const colorText = color
    ? `#${parseToRgba(color)
        .slice(0, 3)
        .map((x) => x.toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase()}`
    : "N/A";

  return (
    <div className="flex flex-col rounded-xl shadow-lg border border-[#0000001A]">
      <div
        className="flex flex-col items-center rounded-t-[0.70rem] justify-center w-24 h-12"
        style={{
          backgroundColor: color,
        }}
      >
        <span
            className="lowercase"
            style={{
              color: readableColor(color),
            }}
        >
          {title}-{colorKey[index]}
        </span>
      </div>
      <span
        className="text-[#667085] text-sm p-2"
      >
        {colorText}
      </span>
    </div>
  );
};

const SematicSwatch = ({
  color,
  className,
  textClassName,
}: {
  color: string;
  className?: string;
  textClassName?: string;
}) => {
  console.log(color,
      className,
      textClassName,)
  return (
      <div className="flex flex-col items-center justify-center rounded-xl shadow-lg border border-[#0000001A]">
        <div
            className={`flex flex-col items-center rounded-t-xl justify-center w-full h-12 ${className}`}
        >
          <span className={`${textClassName} text-sm`}>{color}</span>
        </div>
        <span
            className="text-[#667085] text-sm p-2"
        >
        {textClassName}
      </span>
      </div>
  );
};

const SwatchSet = ({colors, isSematic = false}: SwatchSetProps) => (
  <div className="flex flex-row flex-wrap items-center justify-center w-full h-full p-2">
    {colors.map(({title, items}) => (
      <div key={title} className="flex flex-col items-start w-full h-full">
        <h2 className="text-xl font-bold text-gray-700">{title}</h2>
        <div className="flex flex-row flex-wrap items-center justify-start w-full h-full gap-4 my-4">
          {items.map((c, index) =>
            isSematic ? (
              <SematicSwatch
                key={`${c.color}-${index}`}
                className={c.className}
                color={c.color}
                textClassName={c.textClassName}
              />
            ) : (
              <Swatch key={`${c.color}-${index}`} color={c.color} index={index} title={title}/>
            ),
          )}
        </div>
      </div>
    ))}
  </div>
);

export default {
  title: "Foundations/Colors",
  component: SwatchSet,
  argTypes: {
    isSematic: {
      control: false,
    },
  },
} as Meta<typeof SwatchSet>;

const getCommonItems = (colors: string[]) => {
  return colors.map((color) => ({
    color,
  }));
};

export const PrimaryColors = {
  args: {
    isSematic: true,
    colors: [
      {
        title: "Layout ⚠️",
        items: [
          {
            color: "background",
            className: "bg-background",
            textClassName: "text-foreground",
          },
          {
            color: "foreground",
            className: "bg-foreground",
            textClassName: "text-background",
          },
          {
            color: "divider",
            className: "bg-divider",
            textClassName: "text-foreground",
          },
          {
            color: "focus",
            className: "bg-focus",
            textClassName: "text-primary-foreground",
          },
        ],
      },
      {
        title: "Content ⚠️",
        items: [
          {
            color: "content1",
            className: "bg-content1",
            textClassName: "text-content1-foreground",
          },
          {
            color: "content2",
            className: "bg-content2",
            textClassName: "text-content2-foreground",
          },
          {
            color: "content3",
            className: "bg-content3",
            textClassName: "text-content3-foreground",
          },
          {
            color: "content4",
            className: "bg-content4",
            textClassName: "text-content4-foreground",
          },
        ],
      },
      {
        title: "Base ⚠️",
        items: [
          {
            color: "default",
            className: "bg-default",
            textClassName: "text-default-foreground",
          },
          {
            color: "brand",
            className: "bg-brand",
            textClassName: "text-brand-foreground",
          },
          {
            color: "neutral",
            className: "bg-neutral",
            textClassName: "text-neutral-foreground",
          },
          {
            color: "success",
            className: "bg-success",
            textClassName: "text-success-foreground",
          },
          {
            color: "warning",
            className: "bg-warning",
            textClassName: "text-warning-foreground",
          },
          {
            color: "critical",
            className: "bg-critical",
            textClassName: "text-critical-foreground",
          },
        ],
      },
      {
        title: "Default ⚠️",
        items: [
          {
            color: "default-50",
            className: "bg-default-50",
            textClassName: "text-default-900",
          },
          {
            color: "default-100",
            className: "bg-default-100",
            textClassName: "text-default-900",
          },
          {
            color: "default-200",
            className: "bg-default-200",
            textClassName: "text-default-800",
          },
          {
            color: "default-300",
            className: "bg-default-300",
            textClassName: "text-default-800",
          },
          {
            color: "default-400",
            className: "bg-default-400",
            textClassName: "text-default-800",
          },
          {
            color: "default-500",
            className: "bg-default-500",
            textClassName: "text-default-foreground",
          },
          {
            color: "default-600",
            className: "bg-default-600",
            textClassName: "text-default-50",
          },
          {
            color: "default-700",
            className: "bg-default-700",
            textClassName: "text-default-100",
          },
          {
            color: "default-800",
            className: "bg-default-800",
            textClassName: "text-default-100",
          },
          {
            color: "default-900",
            className: "bg-default-900",
            textClassName: "text-default-100",
          },
        ],
      },
      {
        title: "Brand",
        items: [
          {
            color: "brand-50",
            className: "bg-brand-50",
            textClassName: "text-brand-900",
          },
          {
            color: "brand-100",
            className: "bg-brand-100",
            textClassName: "text-brand-900",
          },
          {
            color: "brand-200",
            className: "bg-brand-200",
            textClassName: "text-brand-800",
          },
          {
            color: "brand-300",
            className: "bg-brand-300",
            textClassName: "text-brand-800",
          },
          {
            color: "brand-400",
            className: "bg-brand-400",
            textClassName: "text-brand-800",
          },
          {
            color: "brand-500",
            className: "bg-brand-500",
            textClassName: "text-brand-foreground",
          },
          {
            color: "brand-600",
            className: "bg-brand-600",
            textClassName: "text-brand-50",
          },
          {
            color: "brand-700",
            className: "bg-brand-700",
            textClassName: "text-brand-100",
          },
          {
            color: "brand-800",
            className: "bg-brand-800",
            textClassName: "text-brand-100",
          },
          {
            color: "brand-900",
            className: "bg-brand-900",
            textClassName: "text-brand-100",
          },
          {
            color: "brand-950",
            className: "bg-brand-950",
            textClassName: "text-brand-100",
          },
        ],
      },
      {
        title: "Critical",
        items: [
          {
            color: "critical-50",
            className: "bg-critical-50",
            textClassName: "text-critical-900",
          },
          {
            color: "critical-100",
            className: "bg-critical-100",
            textClassName: "text-critical-900",
          },
          {
            color: "critical-200",
            className: "bg-critical-200",
            textClassName: "text-critical-800",
          },
          {
            color: "critical-300",
            className: "bg-critical-300",
            textClassName: "text-critical-800",
          },
          {
            color: "critical-400",
            className: "bg-critical-400",
            textClassName: "text-critical-800",
          },
          {
            color: "critical-500",
            className: "bg-critical-500",
            textClassName: "text-critical-foreground",
          },
          {
            color: "critical-600",
            className: "bg-critical-600",
            textClassName: "text-critical-50",
          },
          {
            color: "critical-700",
            className: "bg-critical-700",
            textClassName: "text-critical-100",
          },
          {
            color: "critical-800",
            className: "bg-critical-800",
            textClassName: "text-critical-100",
          },
          {
            color: "critical-900",
            className: "bg-critical-900",
            textClassName: "text-critical-100",
          },
          {
            color: "critical-950",
            className: "bg-critical-950",
            textClassName: "text-critical-100",
          },
        ],
      },
      {
        title: "Warning",
        items: [
          {
            color: "warning-50",
            className: "bg-warning-50",
            textClassName: "text-warning-900",
          },
          {
            color: "warning-100",
            className: "bg-warning-100",
            textClassName: "text-warning-900",
          },
          {
            color: "warning-200",
            className: "bg-warning-200",
            textClassName: "text-warning-800",
          },
          {
            color: "warning-300",
            className: "bg-warning-300",
            textClassName: "text-warning-800",
          },
          {
            color: "warning-400",
            className: "bg-warning-400",
            textClassName: "text-warning-800",
          },
          {
            color: "warning-500",
            className: "bg-warning-500",
            textClassName: "text-warning-foreground",
          },
          {
            color: "warning-600",
            className: "bg-warning-600",
            textClassName: "text-warning-50",
          },
          {
            color: "warning-700",
            className: "bg-warning-700",
            textClassName: "text-warning-100",
          },
          {
            color: "warning-800",
            className: "bg-warning-800",
            textClassName: "text-warning-100",
          },
          {
            color: "warning-900",
            className: "bg-warning-900",
            textClassName: "text-warning-100",
          },
          {
            color: "warning-950",
            className: "bg-warning-950",
            textClassName: "text-warning-100",
          },
        ],
      },
      {
        title: "Success",
        items: [
          {
            color: "success-50",
            className: "bg-success-50",
            textClassName: "text-success-900",
          },
          {
            color: "success-100",
            className: "bg-success-100",
            textClassName: "text-success-900",
          },
          {
            color: "success-200",
            className: "bg-success-200",
            textClassName: "text-success-800",
          },
          {
            color: "success-300",
            className: "bg-success-300",
            textClassName: "text-success-800",
          },
          {
            color: "success-400",
            className: "bg-success-400",
            textClassName: "text-success-800",
          },
          {
            color: "success-500",
            className: "bg-success-500",
            textClassName: "text-success-foreground",
          },
          {
            color: "success-600",
            className: "bg-success-600",
            textClassName: "text-success-50",
          },
          {
            color: "success-700",
            className: "bg-success-700",
            textClassName: "text-success-100",
          },
          {
            color: "success-800",
            className: "bg-success-800",
            textClassName: "text-success-100",
          },
          {
            color: "success-900",
            className: "bg-success-900",
            textClassName: "text-success-100",
          },
          {
            color: "success-950",
            className: "bg-success-950",
            textClassName: "text-success-100",
          },
        ],
      },
    ],
  },
};
export const SecondaryColors = {
  args: {
    colors: [
      {
        title: "Blue",
        items: getCommonItems([...Object.values(commonColors.blue)]),
      },
      {
        title: "Green",
        items: getCommonItems([...Object.values(commonColors.green)]),
      },
      {
        title: "Red",
        items: getCommonItems([...Object.values(commonColors.red)]),
      },
      {
        title: "Yellow",
        items: getCommonItems([...Object.values(commonColors.yellow)]),
      },
      {
        title: "Orange",
        items: getCommonItems([...Object.values(commonColors.orange)]),
      },
      {
        title: "Violet",
        items: getCommonItems([...Object.values(commonColors.violet)]),
      },
      {
        title: "Cyan",
        items: getCommonItems([...Object.values(commonColors.cyan)]),
      },
    ],
  },
};

