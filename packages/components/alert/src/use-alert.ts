import type {AlertSlots, AlertVariantProps, SlotsToClasses} from "@jala-banyu/theme";

import {HTMLBanyuProps, mapPropsVariants, PropGetter} from "@jala-banyu/system";
import {alert} from "@jala-banyu/theme";
import {ReactRef, useDOMRef} from "@jala-banyu/react-utils";
import {useCallback, useMemo} from "react";
import {clsx} from "@jala-banyu/shared-utils";

interface Props extends HTMLBanyuProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLDivElement | null>;
  /**
   * Classname or List of classes to change the classNames of the element.
   */
  classNames?: SlotsToClasses<AlertSlots>;
  /**
   * The start content of the alert.
   */
  startContent?: React.ReactNode;
  /**
   * The start icon of the alert.
   */
  startIcon?: React.ReactNode;
  /**
   * The end content of the alert.
   */
  endContent?: React.ReactNode;
  /**
   * The title of the alert.
   */
  title?: string;
  /**
   * The subtitle of the alert.
   */
  subtitle?: string;
  /**
   * The content of the alert.
   */
  children?: string | React.ReactNode;
  /** An accessibility label for this item. */
  "aria-label"?: string;
}

export type UseAlertProps = Props &
  AlertVariantProps & {
    closeToast?: () => void;
    toastProps?: any;
  };

export function useAlert(originalProps: UseAlertProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, alert.variantKeys);

  const {
    ref,
    as,
    className,
    classNames,
    startContent,
    startIcon,
    endContent,
    closeToast,
    toastProps,
    ...otherProps
  } = props;

  // handle if ref is empty object
  const domRef = useDOMRef<HTMLDivElement>(ref);

  const Component = as || "div";

  const baseStyles = clsx(classNames?.base, className);
  const startContentWrapperStyles = clsx(classNames?.startContentWrapper);
  const contentWrapperStyles = clsx(classNames?.contentWrapper);
  const titleWrapperStyles = clsx(classNames?.titleWrapper);
  const titleStyles = clsx(classNames?.title);
  const subtitleInfoStyles = clsx(classNames?.subtitleInfo);
  const startIconStyles = clsx(classNames?.startIcon);
  const endContentWrapperStyles = clsx(classNames?.endContentWrapper);

  const slots = useMemo(
    () =>
      alert({
        ...variantProps,
      }),
    [...Object.values(variantProps)],
  );

  const getBaseProps: PropGetter = useCallback(() => {
    // delete startIcon and endContent from otherProps
    return {
      className: slots.base({class: baseStyles}),
      ref: domRef,
      ...otherProps,
    };
  }, [domRef, slots, baseStyles, otherProps]);
  const getStartContentProps: PropGetter = useCallback(() => {
    return {
      className: slots.startContentWrapper({class: startContentWrapperStyles}),
    };
  }, [slots, startContentWrapperStyles]);
  const getContentProps: PropGetter = useCallback(() => {
    return {
      className: slots.contentWrapper({class: contentWrapperStyles}),
    };
  }, [slots, contentWrapperStyles]);
  const getTitleWrapperProps: PropGetter = useCallback(() => {
    return {
      className: slots.titleWrapper({class: titleWrapperStyles}),
    };
  }, [slots, titleWrapperStyles]);
  const getTitleProps: PropGetter = useCallback(() => {
    return {
      className: slots.title({class: titleStyles}),
    };
  }, [slots, titleStyles]);
  const getSubtitleInfoProps: PropGetter = useCallback(() => {
    return {
      className: slots.subtitleInfo({class: subtitleInfoStyles}),
    };
  }, [slots, subtitleInfoStyles]);
  const getStartIconProps: PropGetter = useCallback(() => {
    return {
      className: slots.startIcon({class: startIconStyles}),
    };
  }, [slots, startIconStyles]);
  const getEndContentProps: PropGetter = useCallback(() => {
    return {
      className: slots.endContentWrapper({class: endContentWrapperStyles}),
    };
  }, [slots, endContentWrapperStyles]);

  return {
    Component,
    slots,
    domRef,
    startContent,
    startIcon,
    endContent,
    closeToast,
    toastProps,
    getBaseProps,
    getStartContentProps,
    getContentProps,
    getTitleWrapperProps,
    getTitleProps,
    getSubtitleInfoProps,
    getStartIconProps,
    getEndContentProps,
    ...otherProps,
  };
}

export type UseAlertReturn = ReturnType<typeof useAlert>;
