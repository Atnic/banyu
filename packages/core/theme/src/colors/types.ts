export type ColorScale =
  | Partial<{
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      950: string;
      foreground: string;
      DEFAULT: string;
    }>
  | string;

export type NeutralScale =
  | Partial<{
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
        black: string;
        white: string;
        foreground: string;
        DEFAULT: string;
    }>
  | string;
export type AplhaScale =
  | Partial<{
        "5a": string;
        "10a": string;
        "20a": string;
        "30a": string;
        "40a": string;
        "50a": string;
        "60a": string;
        "70a": string;
        "80a": string;
        "90a": string;
        "100a": string;
        foreground: string;
        DEFAULT: string;
    }>
  | string;

export type BaseColors = {
  background: ColorScale;
  foreground: ColorScale;
  divider: ColorScale;
  overlay: ColorScale;
  focus: ColorScale;
  content1: ColorScale;
  content2: ColorScale;
  content3: ColorScale;
  content4: ColorScale;
  neutral: NeutralScale;
  black: AplhaScale;
  white: AplhaScale;
  transparent: AplhaScale;
};

export type ThemeColors = BaseColors & {
  brand: ColorScale;
  danger: ColorScale;
  success: ColorScale;
  warning: ColorScale;
};

export type SemanticBaseColors = {
  light: BaseColors;
  dark: BaseColors;
};
