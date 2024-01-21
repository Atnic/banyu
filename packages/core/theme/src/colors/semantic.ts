import type {ThemeColors, SemanticBaseColors} from "./types";

import {readableColor} from "color2k";

import {swapColorValues} from "../utils/object";

import {commonColors} from "./common";

const base: SemanticBaseColors = {
  light: {
    background: {
      DEFAULT: "#FFFFFF",
    },
    foreground: {
      ...commonColors.gray,
      DEFAULT: commonColors.gray[500],
    },
    divider: {
      DEFAULT: "rgba(17, 17, 17, 0.15)",
    },
    focus: {
      DEFAULT: commonColors.blue[500],
    },
    overlay: {
      DEFAULT: "#000000",
    },
    content1: {
      DEFAULT: "#FFFFFF",
      foreground: "#11181C",
    },
    content2: {
      DEFAULT: commonColors.gray[100],
      foreground: commonColors.gray[800],
    },
    content3: {
      DEFAULT: commonColors.gray[200],
      foreground: commonColors.gray[700],
    },
    content4: {
      DEFAULT: commonColors.gray[300],
      foreground: commonColors.gray[600],
    },
  },
  dark: {
    background: {
      DEFAULT: "#000000",
    },
    foreground: {
      ...swapColorValues(commonColors.gray),
      DEFAULT: "#ECEDEE",
    },
    focus: {
      DEFAULT: commonColors.blue[500],
    },
    overlay: {
      DEFAULT: "#000000",
    },
    divider: {
      DEFAULT: "rgba(255, 255, 255, 0.15)",
    },
    content1: {
      DEFAULT: commonColors.gray[900],
      foreground: commonColors.gray[50],
    },
    content2: {
      DEFAULT: commonColors.gray[800],
      foreground: commonColors.gray[100],
    },
    content3: {
      DEFAULT: commonColors.gray[700],
      foreground: commonColors.gray[200],
    },
    content4: {
      DEFAULT: commonColors.gray[600],
      foreground: commonColors.gray[300],
    },
  },
};

export const themeColorsLight: ThemeColors = {
  ...base.light,
  default: {
    ...commonColors.gray,
    // ...swapColorValues(commonColors.gray),
    foreground: readableColor(commonColors.gray[700]),
    DEFAULT: commonColors.gray[700],
  },
  brand: {
    ...commonColors.blue,
    // ...swapColorValues(commonColors.blue),
    foreground: readableColor(commonColors.red[500]),
    DEFAULT: commonColors.blue[500],
  },
  neutral: {
    ...commonColors.gray,
    // ...swapColorValues(commonColors.gray),
    foreground: readableColor(commonColors.gray[800]),
    DEFAULT: commonColors.gray[800],
  },
  critical: {
    ...commonColors.red,
    // ...swapColorValues(commonColors.red),
    foreground: readableColor(commonColors.red[800]),
    DEFAULT: commonColors.red[800],
  },
  success: {
    ...commonColors.green,
    // ...swapColorValues(commonColors.green),
    foreground: readableColor(commonColors.green[500]),
    DEFAULT: commonColors.green[500],
  },
  warning: {
    ...commonColors.yellow,
    // ...swapColorValues(commonColors.yellow),
    foreground: readableColor(commonColors.yellow[500]),
    DEFAULT: commonColors.yellow[500],
  },
};

export const themeColorsDark: ThemeColors = {
  ...base.dark,
  default: {
    ...commonColors.gray,
    foreground: readableColor(commonColors.gray[700]),
    DEFAULT: commonColors.gray[700],
  },
  brand: {
    ...commonColors.blue,
    foreground: readableColor(commonColors.red[500]),
    DEFAULT: commonColors.blue[500],
  },
  neutral: {
    ...commonColors.blue,
    foreground: readableColor(commonColors.blue[800]),
    DEFAULT: commonColors.blue[800],
  },
  critical: {
    ...commonColors.red,
    foreground: readableColor(commonColors.red[800]),
    DEFAULT: commonColors.red[800],
  },
  success: {
    ...commonColors.green,
    foreground: readableColor(commonColors.green[500]),
    DEFAULT: commonColors.green[500],
  },
  warning: {
    ...commonColors.yellow,
    foreground: readableColor(commonColors.yellow[500]),
    DEFAULT: commonColors.yellow[500],
  },
};

export const semanticColors = {
  light: themeColorsLight,
  dark: themeColorsDark,
};
