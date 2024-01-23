import React from "react";
import {Meta} from "@storybook/react";
import {parseToRgba, readableColor} from "color2k";

import {commonColors} from "../src";

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
        className="flex flex-col items-center rounded-t-[0.70rem] justify-center w-24 h-12 py-8 min-w-[160px]"
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
        className="text-gray-800 text-sm p-2"
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
  alphaColor,
  title
}: {
  color: string;
  className?: string;
  textClassName?: string;
  title?: string;
  alphaColor?: boolean
}) => {
  return (
      <div className="flex flex-col items-center justify-center rounded-xl shadow-lg border border-[#0000001A]">
        <div
            className={`flex flex-col items-center rounded-t-[0.70rem] justify-center w-full h-12 py-8 min-w-[160px] ${className}`}
        >
          {!alphaColor && <span className={`${textClassName} text-sm`}>{color}</span>}
        </div>
        <div className={`flex flex-col ${title === "White Alpha" ? 'text-white' : 'text-black'} text-sm p-2 text-left`}>
          <span className="text-left">
            .{className}
          </span>
          <span className="text-left">
            .{textClassName}
          </span>
        </div>
      </div>
  );
};

const SwatchSet = ({colors, isSematic = false}: SwatchSetProps) => (
  <div className="flex flex-row flex-wrap items-center justify-center w-full h-full p-8">
    {colors.map(({title, items}) => (
      <div key={title} className="flex flex-col items-start w-full h-full">
        <h2 className="text-xl font-bold text-gray-700">{title}</h2>
        {title === 'White Alpha' || title === 'Black Alpha' ?
          <div className={`${title === "White Alpha" && "bg-gray-900"} ${title === "Black Alpha" && "bg-gray-200"} rounded-xl p-4 flex flex-row flex-wrap items-center justify-start w-full h-full gap-4 my-4`}>
            {items.map((c, index) =>
              <SematicSwatch
                  title={title}
                  alphaColor={true}
                  key={`${c.color}-${index}`}
                  className={c.className}
                  color={c.color}
                  textClassName={c.textClassName}
              />
            )}
          </div>
        :
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
        }
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
        title: "White Alpha",
        items: [
          {
            color: "white-5a",
            className: "bg-white-5a",
            textClassName: "text-white",
          },
          {
            color: "white-10a",
            className: "bg-white-10a",
            textClassName: "text-white",
          },
          {
            color: "white-20a",
            className: "bg-white-20a",
            textClassName: "text-white",
          },
          {
            color: "white-30a",
            className: "bg-white-30a",
            textClassName: "text-white",
          },
          {
            color: "white-40a",
            className: "bg-white-40a",
            textClassName: "text-white",
          },
          {
            color: "white-50a",
            className: "bg-white-50a",
            textClassName: "text-white",
          },
          {
            color: "white-60a",
            className: "bg-white-60a",
            textClassName: "text-white",
          },
          {
            color: "white-70a",
            className: "bg-white-70a",
            textClassName: "text-white",
          },
          {
            color: "white-80a",
            className: "bg-white-80a",
            textClassName: "text-white",
          },
          {
            color: "white-90a",
            className: "bg-white-90a",
            textClassName: "text-white",
          },
          {
            color: "white-100a",
            className: "bg-white-100a",
            textClassName: "text-white",
          },
        ]
      },
      {
        title: "Black Alpha",
        items: [
          {
            color: "black-5a",
            className: "bg-black-5a",
            textClassName: "text-white",
          },
          {
            color: "black-10a",
            className: "bg-black-10a",
            textClassName: "text-white",
          },
          {
            color: "black-20a",
            className: "bg-black-20a",
            textClassName: "text-white",
          },
          {
            color: "black-30a",
            className: "bg-black-30a",
            textClassName: "text-white",
          },
          {
            color: "black-40a",
            className: "bg-black-40a",
            textClassName: "text-white",
          },
          {
            color: "black-50a",
            className: "bg-black-50a",
            textClassName: "text-white",
          },
          {
            color: "black-60a",
            className: "bg-black-60a",
            textClassName: "text-white",
          },
          {
            color: "black-70a",
            className: "bg-black-70a",
            textClassName: "text-white",
          },
          {
            color: "black-80a",
            className: "bg-black-80a",
            textClassName: "text-white",
          },
          {
            color: "black-90a",
            className: "bg-black-90a",
            textClassName: "text-white",
          },
          {
            color: "black-100a",
            className: "bg-black-100a",
            textClassName: "text-white",
          },
        ]
      },
      {
        title: "Neutral",
        items: [
          {
            color: "white",
            className: "bg-white",
            textClassName: "text-black",
          },
          {
            color: "black",
            className: "bg-black",
            textClassName: "text-white",
          },
          {
            color: "neutral-50",
            className: "bg-neutral-50",
            textClassName: "text-neutral-900",
          },
          {
            color: "neutral-100",
            className: "bg-neutral-100",
            textClassName: "text-neutral-900",
          },
          {
            color: "neutral-200",
            className: "bg-neutral-200",
            textClassName: "text-neutral-800",
          },
          {
            color: "neutral-300",
            className: "bg-neutral-300",
            textClassName: "text-neutral-800",
          },
          {
            color: "neutral-400",
            className: "bg-neutral-400",
            textClassName: "text-neutral-800",
          },
          {
            color: "neutral-500",
            className: "bg-neutral-500",
            textClassName: "text-neutral-foreground",
          },
          {
            color: "neutral-600",
            className: "bg-neutral-600",
            textClassName: "text-neutral-50",
          },
          {
            color: "neutral-700",
            className: "bg-neutral-700",
            textClassName: "text-neutral-100",
          },
          {
            color: "neutral-800",
            className: "bg-neutral-800",
            textClassName: "text-neutral-100",
          },
          {
            color: "neutral-900",
            className: "bg-neutral-900",
            textClassName: "text-neutral-100",
          },
          {
            color: "neutral-950",
            className: "bg-neutral-950",
            textClassName: "text-neutral-100",
          },
        ]
      },
      {
        title: "Primary",
        items: [
          {
            color: "neutral",
            className: "bg-neutral",
            textClassName: "text-neutral-foreground",
          },
          {
            color: "brand",
            className: "bg-brand",
            textClassName: "text-brand-foreground",
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
            color: "danger",
            className: "bg-danger",
            textClassName: "text-danger-foreground",
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
        title: "Danger",
        items: [
          {
            color: "danger-50",
            className: "bg-danger-50",
            textClassName: "text-danger-900",
          },
          {
            color: "danger-100",
            className: "bg-danger-100",
            textClassName: "text-danger-900",
          },
          {
            color: "danger-200",
            className: "bg-danger-200",
            textClassName: "text-danger-800",
          },
          {
            color: "danger-300",
            className: "bg-danger-300",
            textClassName: "text-danger-800",
          },
          {
            color: "danger-400",
            className: "bg-danger-400",
            textClassName: "text-danger-800",
          },
          {
            color: "danger-500",
            className: "bg-danger-500",
            textClassName: "text-danger-foreground",
          },
          {
            color: "danger-600",
            className: "bg-danger-600",
            textClassName: "text-danger-50",
          },
          {
            color: "danger-700",
            className: "bg-danger-700",
            textClassName: "text-danger-100",
          },
          {
            color: "danger-800",
            className: "bg-danger-800",
            textClassName: "text-danger-100",
          },
          {
            color: "danger-900",
            className: "bg-danger-900",
            textClassName: "text-danger-100",
          },
          {
            color: "danger-950",
            className: "bg-danger-950",
            textClassName: "text-danger-100",
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
        title: "Gray",
        items: getCommonItems([...Object.values(commonColors.gray)]),
      },
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

