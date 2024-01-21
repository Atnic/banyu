import {tv as tvBase, TV} from "tailwind-variants";

import {mappedSpacingScaleKeys} from "../types";
const COMMON_UNITS = ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"];
const HEADING_UNITS = ["100", "200", "300", "400", "500", "600", "700", "800", "900"];

export const tv: TV = (options, config) =>
  tvBase(options, {
    ...config,
    twMerge: config?.twMerge ?? true,
    twMergeConfig: {
      ...config?.twMergeConfig,
      theme: {
        ...config?.twMergeConfig?.theme,
        opacity: ["disabled"],
        spacing: ["divider", "unit", ...mappedSpacingScaleKeys],
        borderWidth: COMMON_UNITS,
        borderRadius: COMMON_UNITS,
      },
      classGroups: {
        ...config?.twMergeConfig?.classGroups,
        shadow: [{shadow: COMMON_UNITS}],
        heading: [{heading: HEADING_UNITS}],
        "font-size": [{text: ['xs','base', ...COMMON_UNITS, '6xl']}],
        "bg-image": ["bg-stripe-gradient"],
        "min-w": [
          {
            "min-w": ["unit", ...mappedSpacingScaleKeys],
          },
        ],
        "min-h": [
          {
            "min-h": ["unit", ...mappedSpacingScaleKeys],
          },
        ],
      },
    },
  });
