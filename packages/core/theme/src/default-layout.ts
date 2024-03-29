import {LayoutTheme} from "./types";

export const defaultLayout: LayoutTheme = {
  spacingUnit: 4,
  disabledOpacity: ".5",
  dividerWeight: "1px",
  fontFamily: {
    sans: ["Inter"],
    serif: ['"ui-serif"'],
    mono: ['"IBM Mono Plex"'],
  },
  fontSize: {
    DEFAULT: "14px",
    xs: "0.786rem",
    sm: "0.857rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
  },
  lineHeight: {
    sm: "1.25rem",
    md: "1.5rem",
    xl: "1.75rem",
  },
  radius: {
    sm: "0.143rem",
    md: "0.286rem",
    lg: "0.429rem",
    xl: "0.857rem",
    "2xl": "1.143rem",
    "3xl": "1.714rem",
    "4xl": "2.286rem",
    "5xl": "4.571rem",
    full: "714.214rem",
  },
  borderWidth: {
    DEFAULT: "1px",
    none: "0",
    sm: "2px",
    md: "3px",
    lg: "4px",
    xl: "6px",
    "2xl": "8px",
  },
  boxShadow: {
    sm: "0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
    md: "0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
    lg: "0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
  },
};

export const lightLayout: LayoutTheme = {
  hoverOpacity: ".8",
};

export const darkLayout: LayoutTheme = {
  hoverOpacity: ".9",
  // boxShadow: {
  //   sm:
  //     "0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
  //   md:
  //     "0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
  //   lg:
  //     "0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
  // },
};
