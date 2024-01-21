const solid = {
  primary: "bg-brand text-brand-foreground",
  critical: "bg-critical text-critical-foreground",
  warning: "bg-warning text-warning-foreground",
  success: "bg-success text-success-foreground",
  white: "bg-danger text-danger-foreground",
  basic: "bg-danger text-danger-foreground",
  transparent: "bg-danger text-danger-foreground",
};

const outline = {
  primary: "bg-transparent border-blue-500 text-brand-foreground",
  critical: "bg-transparent border-critical text-critical",
  success: "bg-transparent border-success text-success",
  warning: "bg-transparent border-warning text-warning",
  basic: "bg-transparent border-foreground text-foreground",
};

const ghost = {
  default: "border-default text-default-foreground hover:!bg-default",
  primary: "border-primary text-primary hover:!text-primary-foreground hover:!bg-primary",
  secondary: "border-secondary text-secondary hover:text-secondary-foreground hover:!bg-secondary",
  success: "border-success text-success hover:!text-success-foreground hover:!bg-success",
  warning: "border-warning text-warning hover:!text-warning-foreground hover:!bg-warning",
  danger: "border-danger text-danger hover:!text-danger-foreground hover:!bg-danger",
  foreground: "border-foreground text-foreground hover:!bg-foreground",
};

export const colorVariants = {
  solid,
  // shadow,
  outline,
  // flat,
  // faded,
  // light,
  ghost,
};
