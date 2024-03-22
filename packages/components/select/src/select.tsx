import {Listbox} from "@jala-banyu/listbox";
import {FreeSoloPopover} from "@jala-banyu/popover";
import {CheckIcon, ChevronDownIcon, CloseFilledIcon} from "@jala-banyu/shared-icons";
import {forwardRef} from "@jala-banyu/system";
import React, {cloneElement, ForwardedRef, ReactElement, ReactNode, Ref, useMemo} from "react";
import {VisuallyHidden} from "@react-aria/visually-hidden";
import {AnimatePresence} from "framer-motion";

import {HiddenSelect} from "./hidden-select";
import {UseSelectProps, useSelect} from "./use-select";

interface Props<T> extends UseSelectProps<T> {}

function Select<T extends object>(props: Props<T>, ref: ForwardedRef<HTMLSelectElement>) {
  const {
    Component,
    state,
    label,
    hasHelper,
    isLoading,
    isSuccess,
    triggerRef,
    selectorIcon = <ChevronDownIcon />,
    description,
    errorMessage,
    startContent,
    endContent,
    topContent,
    bottomContent,
    loadingStateContent,
    placeholder,
    renderValue,
    shouldLabelBeOutside,
    disableAnimation,
    getBaseProps,
    getLabelProps,
    getTriggerProps,
    getValueProps,
    getListboxProps,
    getPopoverProps,
    getSpinnerProps,
    getMainWrapperProps,
    getInnerWrapperProps,
    getHiddenSelectProps,
    getHelperWrapperProps,
    getListboxWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
    getSelectorIconProps,
    getTopContentProps,
    getBottomContentProps,
    getLoadingStateWrapperProps,
  } = useSelect<T>({...props, ref});

  const labelContent = label ? <label {...getLabelProps()}>{label}</label> : null;

  let selector = errorMessage ? <CloseFilledIcon /> : isSuccess ? <CheckIcon /> : selectorIcon;

  const clonedIcon = cloneElement(selector as ReactElement, getSelectorIconProps());

  const helperWrapper = useMemo(() => {
    if (!hasHelper) return null;

    return (
      <div {...getHelperWrapperProps()}>
        {errorMessage ? (
          <div {...getErrorMessageProps()}>{errorMessage as ReactNode}</div>
        ) : description ? (
          <div {...getDescriptionProps()}>{description}</div>
        ) : null}
      </div>
    );
  }, [
    hasHelper,
    errorMessage,
    description,
    getHelperWrapperProps,
    getErrorMessageProps,
    getDescriptionProps,
  ]);

  const renderSelectedItem = useMemo(() => {
    if (!state.selectedItems) return placeholder;

    if (renderValue && typeof renderValue === "function") {
      const mappedItems = [...state.selectedItems].map((item) => ({
        key: item.key,
        data: item.value,
        type: item.type,
        props: item.props,
        textValue: item.textValue,
        rendered: item.rendered,
        "aria-label": item["aria-label"],
      }));

      return renderValue(mappedItems);
    }

    return state.selectedItems.map((item) => item.textValue).join(", ");
  }, [state.selectedItems, renderValue, placeholder]);

  const renderIndicator = useMemo(() => {
    // if (isLoading) {
    //   return <Spinner {...getSpinnerProps()} />;
    // }

    return clonedIcon;
  }, [isLoading, clonedIcon, getSpinnerProps]);

  const popoverContent = useMemo(
    () =>
      state.isOpen ? (
        <FreeSoloPopover {...getPopoverProps()} state={state} triggerRef={triggerRef}>
          <div {...getTopContentProps()}>{topContent}</div>
          {isLoading ? (
            <div {...getListboxWrapperProps()}>
              <div {...getLoadingStateWrapperProps()}>{loadingStateContent || "Loading"}</div>
              <VisuallyHidden>
                <Listbox {...getListboxProps()} />
              </VisuallyHidden>
            </div>
          ) : (
            <div {...getListboxWrapperProps()}>
              {state.selectedItems && state.selectedItems.length == 0 ? (
                <div>
                  <div {...getLoadingStateWrapperProps()}>
                    Data not found! {state.selectedItems && state.selectedItems.length}
                  </div>
                  <VisuallyHidden>
                    <Listbox {...getListboxProps()} />
                  </VisuallyHidden>
                </div>
              ) : (
                <Listbox {...getListboxProps()} />
              )}
            </div>
          )}
          <div {...getBottomContentProps()}>{bottomContent}</div>
        </FreeSoloPopover>
      ) : null,
    [state.isOpen, getPopoverProps, state, triggerRef, getListboxWrapperProps, getListboxProps],
  );

  return (
    <div {...getBaseProps()}>
      <HiddenSelect {...getHiddenSelectProps()} />
      {shouldLabelBeOutside ? labelContent : null}
      <div {...getMainWrapperProps()}>
        <Component {...getTriggerProps()}>
          {!shouldLabelBeOutside ? labelContent : null}
          <div {...getInnerWrapperProps()}>
            {startContent}
            <span {...getValueProps()}>
              {renderSelectedItem}
              {state.selectedItems && <VisuallyHidden>,</VisuallyHidden>}
            </span>
            {endContent}
          </div>
          {renderIndicator}
        </Component>
        {helperWrapper}
      </div>
      {disableAnimation ? popoverContent : <AnimatePresence>{popoverContent}</AnimatePresence>}
    </div>
  );
}

export type SelectProps<T = object> = Props<T> & {ref?: Ref<HTMLElement>};

// forwardRef doesn't support generic parameters, so cast the result to the correct type
export default forwardRef(Select) as <T = object>(props: SelectProps<T>) => ReactElement;

Select.displayName = "Banyu.Select";
