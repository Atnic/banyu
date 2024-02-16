import type {ThemeColors, SemanticBaseColors} from "./types";

import {readableColor, readableColorIsBlack} from "color2k";

import {swapColorValues} from "../utils/object";

import {commonColors} from "./common";

const base: SemanticBaseColors = {
  light: {
    black: {
      "5a": "rgba(10, 10, 10, 0.05)",
      "10a": "rgba(10, 10, 10, 0.10)",
      "20a": "rgba(10, 10, 10, 0.20)",
      "30a": "rgba(10, 10, 10, 0.30)",
      "40a": "rgba(10, 10, 10, 0.40)",
      "50a": "rgba(10, 10, 10, 0.50)",
      "60a": "rgba(10, 10, 10, 0.60)",
      "70a": "rgba(10, 10, 10, 0.70)",
      "80a": "rgba(10, 10, 10, 0.80)",
      "90a": "rgba(10, 10, 10, 0.90)",
      "100a": "rgba(10, 10, 10, 1)",
      DEFAULT: "rgba(0, 0, 0, 1)",
    },
    white: {
      "5a": "rgba(255, 255, 255, 0.05)",
      "10a": "rgba(255, 255, 255, 0.10)",
      "20a": "rgba(255, 255, 255, 0.20)",
      "30a": "rgba(255, 255, 255, 0.30)",
      "40a": "rgba(255, 255, 255, 0.40)",
      "50a": "rgba(255, 255, 255, 0.50)",
      "60a": "rgba(255, 255, 255, 0.60)",
      "70a": "rgba(255, 255, 255, 0.70)",
      "80a": "rgba(255, 255, 255, 0.80)",
      "90a": "rgba(255, 255, 255, 0.90)",
      "100a": "rgba(255, 255, 255, 1)",
      DEFAULT: "rgba(255, 255, 255, 1)",
    },
    transparent: {
      foreground: readableColor("rgba(10, 10, 10, 0.02)"),
      DEFAULT: "rgba(0, 0, 0, 0)",
    },
    neutral: {
      50: "rgba(249, 250, 251, 1)",
      100: "rgba(242, 244, 247, 1)",
      200: "rgba(234, 236, 240, 1)",
      300: "rgba(208, 213, 221, 1)",
      400: "rgba(152, 162, 179, 1)",
      500: "rgba(102, 112, 133, 1)",
      600: "rgba(71, 84, 103, 1)",
      700: "rgba(52, 64, 84, 1)",
      800: "rgba(24, 34, 48, 1)",
      900: "rgba(16, 24, 40, 1)",
      950: "rgba(12, 17, 29, 1)",
      foreground: readableColorIsBlack(readableColor("rgba(52, 64, 84, 1)"))
        ? "rgba(0, 0, 0, 1)"
        : readableColor("rgba(52, 64, 84, 1)"), //700
      DEFAULT: "rgba(52, 64, 84, 1)", //700
    },
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
    black: {
      "5a": "rgba(10, 10, 10, 0.05)",
      "10a": "rgba(10, 10, 10, 0.10)",
      "20a": "rgba(10, 10, 10, 0.20)",
      "30a": "rgba(10, 10, 10, 0.30)",
      "40a": "rgba(10, 10, 10, 0.40)",
      "50a": "rgba(10, 10, 10, 0.50)",
      "60a": "rgba(10, 10, 10, 0.60)",
      "70a": "rgba(10, 10, 10, 0.70)",
      "80a": "rgba(10, 10, 10, 0.80)",
      "90a": "rgba(10, 10, 10, 0.90)",
      "100a": "rgba(10, 10, 10, 1)",
      foreground: readableColor("rgba(10, 10, 10, 1)"),
      DEFAULT: "rgba(10, 10, 10, 1)",
    },
    white: {
      "5a": "rgba(255, 255, 255, 0.05)",
      "10a": "rgba(255, 255, 255, 0.10)",
      "20a": "rgba(255, 255, 255, 0.20)",
      "30a": "rgba(255, 255, 255, 0.30)",
      "40a": "rgba(255, 255, 255, 0.40)",
      "50a": "rgba(255, 255, 255, 0.50)",
      "60a": "rgba(255, 255, 255, 0.60)",
      "70a": "rgba(255, 255, 255, 0.70)",
      "80a": "rgba(255, 255, 255, 0.80)",
      "90a": "rgba(255, 255, 255, 0.90)",
      "100a": "rgba(255, 255, 255, 1)",
      foreground: readableColor("rgba(255, 255, 255, 1)"),
      DEFAULT: "rgba(255, 255, 255, 1)",
    },
    transparent: {
      foreground: readableColor("rgba(10, 10, 10, 0.02)"),
      DEFAULT: "rgba(0, 0, 0, 0)",
    },
    neutral: {
      50: "rgba(249, 250, 251, 1)",
      100: "rgba(242, 244, 247, 1)",
      200: "rgba(234, 236, 240, 1)",
      300: "rgba(208, 213, 221, 1)",
      400: "rgba(152, 162, 179, 1)",
      500: "rgba(102, 112, 133, 1)",
      600: "rgba(71, 84, 103, 1)",
      700: "rgba(52, 64, 84, 1)",
      800: "rgba(24, 34, 48, 1)",
      900: "rgba(16, 24, 40, 1)",
      950: "rgba(12, 17, 29, 1)",
      black: "rgba(0, 0, 0, 1)",
      white: "rgba(255, 255, 255, 1)",
      foreground: readableColor("rgba(52, 64, 84, 1)"), //700
      DEFAULT: "rgba(52, 64, 84, 1)", //700
    },
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
  neutral: {
    50: "rgba(249, 250, 251, 1)",
    100: "rgba(242, 244, 247, 1)",
    200: "rgba(234, 236, 240, 1)",
    300: "rgba(208, 213, 221, 1)",
    400: "rgba(152, 162, 179, 1)",
    500: "rgba(102, 112, 133, 1)",
    600: "rgba(71, 84, 103, 1)",
    700: "rgba(52, 64, 84, 1)",
    800: "rgba(24, 34, 48, 1)",
    900: "rgba(16, 24, 40, 1)",
    950: "rgba(12, 17, 29, 1)",
    black: "rgba(0, 0, 0, 1)",
    white: "rgba(255, 255, 255, 1)",
    foreground: readableColor("rgba(52, 64, 84, 1)"), //700
    DEFAULT: "rgba(52, 64, 84, 1)", //700
  },
  brand: {
    50: "rgba(232, 240, 255, 1)",
    100: "rgba(209, 227, 249, 1)",
    200: "rgba(181, 215, 255, 1)",
    300: "rgba(142, 197, 249, 1)",
    400: "rgba(115, 185, 250, 1)",
    500: "rgba(78, 163, 242, 1)",
    600: "rgba(27, 145, 255, 1)",
    700: "rgba(0, 131, 242, 1)",
    800: "rgba(22, 100, 216, 1)",
    900: "rgba(18, 88, 171, 1)",
    950: "rgba(15, 68, 118, 1)",
    foreground: readableColor("rgba(78, 163, 242, 1)"),
    DEFAULT: "rgba(0, 131, 242, 1)",
  },
  danger: {
    50: "rgba(254, 242, 242, 1)",
    100: "rgba(254, 226, 226, 1)",
    200: "rgba(254, 202, 202, 1)",
    300: "rgba(252, 165, 165, 1)",
    400: "rgba(248, 113, 113, 1)",
    500: "rgba(239, 68, 68, 1)",
    600: "rgba(220, 38, 38, 1)",
    700: "rgba(185, 28, 28, 1)",
    800: "rgba(153, 27, 27, 1)",
    900: "rgba(127, 29, 29, 1)",
    950: "rgba(69, 10, 10, 1)",
    foreground: readableColor("rgba(239, 68, 68, 1)"),
    DEFAULT: "rgba(239, 68, 68, 1)", // 600
  },
  success: {
    50: "rgba(240, 253, 244, 1)",
    100: "rgba(220, 252, 231, 1)",
    200: "rgba(187, 247, 208, 1)",
    300: "rgba(134, 239, 172, 1)",
    400: "rgba(74, 222, 128, 1)",
    500: "rgba(34, 197, 94, 1)",
    600: "rgba(22, 163, 74, 1)",
    700: "rgba(21, 128, 61, 1)",
    800: "rgba(22, 101, 52, 1)",
    900: "rgba(20, 83, 45, 1)",
    950: "rgba(5, 46, 22, 1)",
    foreground: readableColor("rgba(34, 197, 94, 1)"),
    DEFAULT: "rgba(34, 197, 94, 1)",
  },
  warning: {
    50: "rgba(255, 250, 235, 1)",
    100: "rgba(254, 240, 199, 1)",
    200: "rgba(254, 223, 137, 1)",
    300: "rgba(254, 200, 75, 1)",
    400: "rgba(253, 176, 34, 1)",
    500: "rgba(247, 144, 9, 1)",
    600: "rgba(220, 104, 3, 1)",
    700: "rgba(181, 71, 8, 1)",
    800: "rgba(147, 55, 13, 1)",
    900: "rgba(122, 46, 14, 1)",
    950: "rgba(78, 29, 9, 1)",
    foreground: readableColor("rgba(247, 144, 9, 1)"),
    DEFAULT: "rgba(247, 144, 9, 1)",
  },
};

export const themeColorsDark: ThemeColors = {
  ...base.dark,
  neutral: {
    50: "rgba(249, 250, 251, 1)",
    100: "rgba(242, 244, 247, 1)",
    200: "rgba(234, 236, 240, 1)",
    300: "rgba(208, 213, 221, 1)",
    400: "rgba(152, 162, 179, 1)",
    500: "rgba(102, 112, 133, 1)",
    600: "rgba(71, 84, 103, 1)",
    700: "rgba(52, 64, 84, 1)",
    800: "rgba(24, 34, 48, 1)",
    900: "rgba(16, 24, 40, 1)",
    950: "rgba(12, 17, 29, 1)",
    black: "rgba(0, 0, 0, 1)",
    white: "rgba(255, 255, 255, 1)",
    foreground: readableColor("rgba(52, 64, 84, 1)"), //700
    DEFAULT: "rgba(52, 64, 84, 1)", //700
  },
  brand: {
    50: "rgba(232, 240, 255, 1)",
    100: "rgba(209, 227, 249, 1)",
    200: "rgba(181, 215, 255, 1)",
    300: "rgba(142, 197, 249, 1)",
    400: "rgba(115, 185, 250, 1)",
    500: "rgba(78, 163, 242, 1)",
    600: "rgba(27, 145, 255, 1)",
    700: "rgba(0, 131, 242, 1)",
    800: "rgba(22, 100, 216, 1)",
    900: "rgba(18, 88, 171, 1)",
    950: "rgba(15, 68, 118, 1)",
    foreground: readableColor("rgba(0, 131, 242, 1)"), //700
    DEFAULT: "rgba(0, 131, 242, 1)", //700
  },
  danger: {
    50: "rgba(254, 242, 242, 1)",
    100: "rgba(254, 226, 226, 1)",
    200: "rgba(254, 202, 202, 1)",
    300: "rgba(252, 165, 165, 1)",
    400: "rgba(248, 113, 113, 1)",
    500: "rgba(239, 68, 68, 1)",
    600: "rgba(220, 38, 38, 1)",
    700: "rgba(185, 28, 28, 1)",
    800: "rgba(153, 27, 27, 1)",
    900: "rgba(127, 29, 29, 1)",
    950: "rgba(69, 10, 10, 1)",
    foreground: readableColor("rgba(239, 68, 68, 1)"), // 500
    DEFAULT: "rgba(239, 68, 68, 1)", //500
  },
  success: {
    50: "rgba(240, 253, 244, 1)",
    100: "rgba(220, 252, 231, 1)",
    200: "rgba(187, 247, 208, 1)",
    300: "rgba(134, 239, 172, 1)",
    400: "rgba(74, 222, 128, 1)",
    500: "rgba(34, 197, 94, 1)",
    600: "rgba(22, 163, 74, 1)",
    700: "rgba(21, 128, 61, 1)",
    800: "rgba(22, 101, 52, 1)",
    900: "rgba(20, 83, 45, 1)",
    950: "rgba(5, 46, 22, 1)",
    foreground: readableColor("rgba(34, 197, 94, 1)"), // 500
    DEFAULT: "rgba(34, 197, 94, 1)", //500
  },
  warning: {
    50: "rgba(255, 250, 235, 1)",
    100: "rgba(254, 240, 199, 1)",
    200: "rgba(254, 223, 137, 1)",
    300: "rgba(254, 200, 75, 1)",
    400: "rgba(253, 176, 34, 1)",
    500: "rgba(247, 144, 9, 1)",
    600: "rgba(220, 104, 3, 1)",
    700: "rgba(181, 71, 8, 1)",
    800: "rgba(147, 55, 13, 1)",
    900: "rgba(122, 46, 14, 1)",
    950: "rgba(78, 29, 9, 1)",
    foreground: readableColor("rgba(247, 144, 9, 1)"), // 500
    DEFAULT: "rgba(247, 144, 9, 1)", // 500
  },
};

export const semanticColors = {
  light: themeColorsLight,
  dark: themeColorsDark,
};
