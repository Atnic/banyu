import type {VariantProps} from "tailwind-variants";

import {tv} from "../utils/tv";
import {dataFocusVisibleClasses} from "../utils";

/**
 * Accordion wrapper **Tailwind Variants** component
 *
 * const styles = accordion({...})
 *
 * @example
 * <div role="group" className={styles())}>
 *   // accordion elements
 * </div>
 */
const accordion = tv({
  base: "",
  variants: {
    variant: {
      shadow: "shadow-md bg-content1 rounded-lg",
      splitted: "group is-splitted flex flex-col gap-2", // the classNames are applied in the accordion-item component
    },
    isDisabled: {
      true: "pointer-events-none",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    variant: "shadow",
    fullWidth: true,
    isDisabled: false,
  },
  compoundVariants: [
    {
      variant: "shadow",
      isDisabled: true,
      className: "bg-neutral-300",
    },
  ],
});

/**
 * AccordionItem wrapper **Tailwind Variants** component
 *
 * const {base, heading, indicator, trigger, startContent, title, subtitle, content } = accordionItem({...})
 *
 * @example
 * <div className={base())}>
 *   <div className={heading())}>
 *    <button className={trigger())}>
 *      <div className={startContent()}>
 *         // content
 *      </div>
 *      <div className={titleWrapper()}>
 *        <h3 className={title())}>Title</h3>
 *        <span className={subtitle())}>Subtitle</span>
 *      </div>
 *      <span className={indicator())}>Indicator</span>
 *    </button>
 *  </div>
 *  <div className={content())}>Content</div>
 * </div>
 */
const accordionItem = tv({
  slots: {
    base: [
      "group-[.is-splitted]:bg-content1",
      "group-[.is-splitted]:shadow-md",
      "group-[.is-splitted]:rounded-lg",
    ],
    heading: "text-md",
    trigger: [
      "pr-4 flex py-4 w-full h-full gap-3 outline-none items-center tap-highlight-transparent",
      // focus ring
      ...dataFocusVisibleClasses,
    ],
    startContent: "pl-4 flex-shrink-0",
    indicator: "text-default-400",
    titleWrapper: "px-4 flex-1 flex flex-col text-start hover:text-brand-800 focus:text-brand-800",
    title: "text-md data-[open=true]:text-brand-800 font-semibold",
    subtitle: "text-sm text-foreground-500 font-normal",
    content: "px-4 py-2 bg-neutral-50 border-t border-divider text-sm",
    endContent: "flex-shrink-0",
  },
  variants: {
    isCompact: {
      true: {
        trigger: "py-2",
        title: "text-md",
        subtitle: "text-sm",
        indicator: "text-md",
        content: "py-1",
      },
    },
    isDisabled: {
      true: "pointer-events-none group-[.is-splitted]:bg-neutral-300 text-neutral-400",
    },
    hideIndicator: {
      true: {
        indicator: "hidden",
      },
    },
    disableAnimation: {
      true: {
        content: "hidden data-[open=true]:block",
      },
      false: {
        indicator: "transition-transform",
        trigger: "transition-opacity",
      },
    },
    disableIndicatorAnimation: {
      true: {
        indicator: "transition-none",
      },
      false: {
        indicator:
          "rotate-0 data-[open=true]:-rotate-90 rtl:-rotate-180 rtl:data-[open=true]:-rotate-90",
      },
    },
  },
  defaultVariants: {
    size: "md",
    radius: "lg",
    isDisabled: false,
    hideIndicator: false,
    disableAnimation: false,
    disableIndicatorAnimation: false,
  },
});

export type AccordionGroupVariantProps = VariantProps<typeof accordion>;

export type AccordionItemVariantProps = VariantProps<typeof accordionItem>;
export type AccordionItemSlots = keyof ReturnType<typeof accordionItem>;

export {accordion, accordionItem};
