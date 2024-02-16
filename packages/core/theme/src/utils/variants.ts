const solid = {
  primary: "bg-brand text-white",
  danger: "bg-danger text-white",
  warning: "bg-warning text-white",
  success: "bg-success text-white",
  white: "bg-white text-neutral-800 border-neutral-300",
  basic: "bg-neutral-50 border-neutral-50 text-neutral-800",
  transparent: "bg-none text-brand-800 border-transparent",
};

const outline = {
  primary: "border-brand text-brand-800",
  danger: "border-danger text-danger-800",
  warning: "border-warning text-warning-800",
  success: "border-success text-success-800",
  white: "border-white text-white",
  basic: "border-neutral text-neutral-800",
  transparent: "border-transparent text-brand-800",
};

const ghost = {
  primary: "text-brand-800",
  danger: "text-danger-800",
  warning: "text-warning-800",
  success: "text-success-800",
  white: "text-white",
  basic: "text-black",
  transparent: "text-neutral",
};

const rounded = {
  primary: "border-brand text-brand",
  danger: "border-danger text-danger",
  warning: "border-warning text-warning-800",
  success: "border-success text-success",
  white: "border-white text-white",
  basic: "border-gray text-gray-800",
  transparent: "border-transparent text-brand",
};

const iconOnly = {
  primary: "text-brand-800",
  danger: "text-danger-800",
  warning: "text-warning-800",
  success: "text-success-800",
  white: "text-white",
  basic: "text-white",
  transparent: "text-white",
};

const shadow = {
  primary: "shadow-lg shadow-brand/40 bg-brand text-brand-foreground",
  success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
  warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
  danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground",
  transparent: "shadow-lg shadow-transparent/40 bg-transparent text-neutral-800",
  white: "shadow-lg shadow-white/40 bg-white text-neutral-800",
  basic: "shadow-lg shadow-neutral/40 bg-neutral-50 text-neutral-800",
};

const soft = {
  primary: "bg-brand-100 text-brand-500",
  danger: "bg-danger-100 text-danger-500",
  warning: "bg-warning-100 text-warning-500",
  success: "bg-success-100 text-success-500",
  white: "bg-white text-neutral-800",
  basic: "bg-neutral-50 text-neutral-800",
  transparent: "bg-transparent text-brand-800",
};

const white = {
  primary: "bg-white text-brand shadow-lg",
  danger: "bg-white text-danger shadow-lg",
  warning: "bg-white text-warning shadow-lg",
  success: "bg-white text-success shadow-lg",
  white: "bg-white text-white shadow-lg",
  basic: "bg-white text-neutral-800 shadow-lg",
  transparent: "bg-white text-brand shadow-lg",
};

export const colorVariants = {
  solid,
  outline,
  rounded,
  ghost,
  iconOnly,
  shadow,
  soft,
  white,
};
