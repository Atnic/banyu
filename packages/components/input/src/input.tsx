import React from "react";
import {CheckIcon, CloseFilledIcon, ExclamationIcon} from "@jala-banyu/shared-icons";
import {useMemo} from "react";
import {forwardRef} from "@jala-banyu/system";

import {UseInputProps, useInput} from "./use-input";

export interface InputProps extends Omit<UseInputProps, "onChange"> {}

const Input = forwardRef<"input", InputProps>((props, ref) => {
  const {
    Component,
    label,
    description,
    isClearable,
    startContent,
    endContent,
    isInvalid,
    isValid,
    labelPlacement,
    hasHelper,
    isOutsideLeft,
    shouldLabelBeOutside,
    errorMessage,
    getBaseProps,
    getLabelProps,
    getInputProps,
    getInnerWrapperProps,
    getInputWrapperProps,
    getMainWrapperProps,
    getHelperWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
    getClearButtonProps,
    getInvalidIconProps,
    getValidIconProps,
    getStartContentWrapperProps,
    getEndContentWrapperProps,
  } = useInput({...props, ref});

  const labelContent = label ? <label {...getLabelProps()}>{label}</label> : null;

  const clearable = useMemo(() => {
    if (isClearable) {
      return <CloseFilledIcon {...getClearButtonProps()} />;
    }

    return null;
  }, [isClearable, getClearButtonProps]);

  const invalid = useMemo(() => {
    return (
      <div {...getInvalidIconProps()}>
        <ExclamationIcon />
      </div>
    );
  }, [isInvalid, getInvalidIconProps]);

  const valid = useMemo(() => {
    return (
      <div {...getValidIconProps()}>
        <CheckIcon />
      </div>
    );
  }, [isValid, getValidIconProps]);

  const helperWrapper = useMemo(() => {
    if (!hasHelper) return null;

    return (
      <div {...getHelperWrapperProps()}>
        {errorMessage && isInvalid && !isValid ? (
          <div {...getErrorMessageProps()}>
            <>{errorMessage}</>
          </div>
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

  const startWrapper = useMemo(() => {
    return startContent && <div {...getStartContentWrapperProps()}>{startContent}</div>;
  }, [startContent, getStartContentWrapperProps]);

  const endWrapper = useMemo(() => {
    return endContent && <div {...getEndContentWrapperProps()}>{endContent}</div>;
  }, [endContent, getEndContentWrapperProps]);

  const innerWrapper = useMemo(() => {
    return (
      <div {...getInnerWrapperProps()}>
        {startWrapper}
        <input {...getInputProps()} />
        {/*{isInvalid ? invalid : isValid && valid}*/}
        {isInvalid && !isValid ? invalid : valid}
        {clearable}
        {endWrapper}
      </div>
    );
  }, [
    startContent,
    endContent,
    getInputProps,
    getInnerWrapperProps,
    getStartContentWrapperProps,
    getEndContentWrapperProps,
  ]);

  const mainWrapper = useMemo(() => {
    if (shouldLabelBeOutside) {
      return (
        <div {...getMainWrapperProps()}>
          {!isOutsideLeft ? labelContent : null}
          <div {...getInputWrapperProps()}>{innerWrapper}</div>
          {helperWrapper}
        </div>
      );
    }

    return (
      <>
        <div {...getInputWrapperProps()}>
          {labelContent}
          {innerWrapper}
        </div>
        {helperWrapper}
      </>
    );
  }, [
    labelPlacement,
    helperWrapper,
    shouldLabelBeOutside,
    labelContent,
    innerWrapper,
    errorMessage,
    description,
    getMainWrapperProps,
    getInputWrapperProps,
    getErrorMessageProps,
    getDescriptionProps,
    getEndContentWrapperProps,
    getStartContentWrapperProps,
  ]);

  return (
    <Component {...getBaseProps()}>
      {isOutsideLeft ? labelContent : null}
      {mainWrapper}
    </Component>
  );
});

Input.displayName = "Banyu.Input";

export default Input;
