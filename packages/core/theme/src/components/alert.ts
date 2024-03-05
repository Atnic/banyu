import type {VariantProps} from "tailwind-variants";

import {tv} from "../utils/tv";
import {colorVariants} from "../utils";

const alert = tv({
  slots: {
    base: "flex flex-row items-start justify-between m-2 p-4 gap-2 w-fit max-w-full",
    startContentWrapper: "flex items-start gap-2",
    contentWrapper: "flex-1 flex-grow flex-col gap-2 w-full min-w-48 list-inside",
    titleWrapper: "flex items-start gap-2",
    title: "font-semibold",
    subtitleInfo: "font-normal",
    startIcon: "flex py-1 items-center justify-center align-middle",
    endContentWrapper: "flex py-1 items-center justify-center",
  },
  variants: {
    variant: {
      solid: {},
      soft: {},
    },
    radius: {
      none: {},
      sm: {
        base: "md:rounded-sm",
      },
      md: {
        base: "md:rounded-md",
      },
      lg: {
        base: "md:rounded-lg",
      },
      full: {
        base: "md:rounded-full",
      },
    },
    color: {
      primary: {},
      success: {},
      warning: {},
      danger: {},
      basic: {},
      white: {},
    },
  },
  defaultVariants: {
    variant: "solid",
    radius: "lg",
    color: "primary",
  },
  compoundVariants: [
    // Solid
    {
      variant: "solid",
      color: "primary",
      class: {
        base: colorVariants.solid.primary,
        startIcon: "text-white",
        title: "text-white",
        subtitleInfo: "text-brand-100",
        contentWrapper: "text-brand-100",
      },
    },
    {
      variant: "solid",
      color: "success",
      class: {
        base: colorVariants.solid.success,
        startIcon: "text-white",
        title: "text-white",
        subtitleInfo: "text-success-100",
        contentWrapper: "text-success-100",
      },
    },
    {
      variant: "solid",
      color: "warning",
      class: {
        base: colorVariants.solid.warning,
        startIcon: "text-warning-900",
        title: "text-warning-900",
        subtitleInfo: "text-warning-900",
        contentWrapper: "text-warning-900",
        endContentWrapper: "text-neutral-800",
      },
    },
    {
      variant: "solid",
      color: "danger",
      class: {
        base: colorVariants.solid.danger,
        startIcon: "text-white",
        title: "text-white",
        subtitleInfo: "text-danger-100",
        contentWrapper: "text-danger-100",
      },
    },
    {
      variant: "solid",
      color: "basic",
      class: {
        base: colorVariants.solid.basic,
        startIcon: "text-black",
        title: "text-black",
        subtitleInfo: "text-gray-800",
        contentWrapper: "text-gray-800",
        endContentWrapper: "text-neutral-800",
      },
    },
    {
      variant: "solid",
      color: "white",
      class: {
        base: colorVariants.solid.white,
        startIcon: "text-black",
        title: "text-black",
        subtitleInfo: "text-black-100",
        contentWrapper: "text-black-100",
        endContentWrapper: "text-neutral-800",
      },
    },
    // Soft
    {
      variant: "soft",
      color: "primary",
      class: {
        base: colorVariants.soft.primary,
        startIcon: "text-brand-800",
        title: "text-brand-800",
        subtitleInfo: "text-neutral-500",
        contentWrapper: "text-neutral-500",
        endContentWrapper: "text-neutral-800",
      },
    },
    {
      variant: "soft",
      color: "success",
      class: {
        base: colorVariants.soft.success,
        startIcon: "text-success-800",
        title: "text-success-800",
        subtitleInfo: "text-neutral-500",
        contentWrapper: "text-neutral-500",
        endContentWrapper: "text-neutral-800",
      },
    },
    {
      variant: "soft",
      color: "warning",
      class: {
        base: colorVariants.soft.warning,
        startIcon: "text-warning-900",
        title: "text-warning-900",
        subtitleInfo: "text-neutral-500",
        contentWrapper: "text-neutral-500",
        endContentWrapper: "text-neutral-800",
      },
    },
    {
      variant: "soft",
      color: "danger",
      class: {
        base: colorVariants.soft.danger,
        startIcon: "text-danger-800",
        title: "text-danger-800",
        subtitleInfo: "text-neutral-500",
        contentWrapper: "text-neutral-500",
        endContentWrapper: "text-neutral-800",
      },
    },
    {
      variant: "soft",
      color: "basic",
      class: {
        base: colorVariants.soft.basic,
        startIcon: "text-gray-800",
        title: "text-gray-800",
        subtitleInfo: "text-neutral-800",
        contentWrapper: "text-neutral-800",
        endContentWrapper: "text-neutral-800",
      },
    },
    {
      variant: "soft",
      color: "white",
      class: {
        base: "bg-black/10",
        startIcon: "text-neutral-800",
        title: "text-neutral-800",
        subtitleInfo: "text-neutral-500",
        contentWrapper: "text-neutral-500",
        endContentWrapper: "text-neutral-800",
      },
    },
  ],
});

export type AlertVariantProps = VariantProps<typeof alert>;
export type AlertSlots = keyof ReturnType<typeof alert>;

export {alert};