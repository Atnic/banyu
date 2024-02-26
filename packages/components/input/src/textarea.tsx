import {dataAttr} from "@jala-banyu/shared-utils";
import {forwardRef} from "@jala-banyu/system";
import {mergeProps} from "@react-aria/utils";
import React, {useMemo, useState} from "react";
import TextareaAutosize from "react-textarea-autosize";
import {CheckIcon, ExclamationIcon} from "@jala-banyu/shared-icons";

import {UseInputProps, useInput} from "./use-input";

type NativeTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
type TextareaAutoSizeStyle = Omit<
  NonNullable<NativeTextareaProps["style"]>,
  "maxHeight" | "minHeight"
> & {
  height?: number;
};

type OmittedInputProps =
  | "isClearButtonFocusVisible"
  | "isLabelPlaceholder"
  | "isClearable"
  | "isTextarea";

export type TextareaHeightChangeMeta = {
  rowHeight: number;
};

export interface TextAreaProps extends Omit<UseInputProps<HTMLTextAreaElement>, OmittedInputProps> {
  /**
   * Whether the textarea should automatically grow vertically to accomodate content.
   * @default false
   */
  disableAutosize?: boolean;
  /**
   * Minimum number of rows to show for textarea
   * @default 3
   */
  minRows?: number;
  /**
   * Maximum number of rows up to which the textarea can grow
   * @default 8
   */
  maxRows?: number;
  /**
   * Maximum number of rows up to which the textarea can grow
   * @default 8
   */
  maxLength?: number | undefined;
  /**
   * Reuse previously computed measurements when computing height of textarea.
   * @default false
   */
  cacheMeasurements?: boolean;
  /**
   * Function invoked on textarea height change, with height as first argument.
   * The second function argument is an object containing additional information that
   * might be useful for custom behaviors. Current options include `{ rowHeight: number }`.
   *
   * @param height - The height of the textarea
   * @param meta - Additional information about the height change
   */
  onHeightChange?: (height: number, meta: TextareaHeightChangeMeta) => void;
}

const Textarea = forwardRef<"textarea", TextAreaProps>(
  (
    {
      style,
      minRows = 3,
      maxRows = 8,
      cacheMeasurements = false,
      disableAutosize = false,
      onHeightChange,
      maxLength,
      ...otherProps
    },
    ref,
  ) => {
    const {
      Component,
      label,
      description,
      startContent,
      endContent,
      isInvalid,
      isValid,
      hasHelper,
      shouldLabelBeOutside,
      maxLengthContent,
      errorMessage,
      getBaseProps,
      getLabelProps,
      getInnerWrapperProps,
      getInputWrapperProps,
      getHelperWrapperProps,
      getDescriptionProps,
      getErrorMessageProps,
      getTextareaProps,
      getInvalidIconProps,
      getValidIconProps,
    } = useInput<HTMLTextAreaElement>({...otherProps, ref, isMultiline: true});

    const [hasMultipleRows, setIsHasMultipleRows] = useState(minRows > 1);
    const [isLimitReached, setIsLimitReached] = useState(false);
    const labelContent = label ? <label {...getLabelProps()}>{label}</label> : null;
    const textareaProps = getTextareaProps();

    const handleHeightChange = (height: number, meta: TextareaHeightChangeMeta) => {
      if (minRows === 1) {
        setIsHasMultipleRows(height >= meta.rowHeight * 2);
      }
      if (maxRows > minRows) {
        const limitReached = height >= maxRows * meta.rowHeight;

        setIsLimitReached(limitReached);
      }

      onHeightChange?.(height, meta);
    };

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

    const content = disableAutosize ? (
      <textarea
        {...textareaProps}
        maxLength={maxLength}
        style={mergeProps(textareaProps.style, style ?? {})}
      />
    ) : (
      <TextareaAutosize
        {...textareaProps}
        cacheMeasurements={cacheMeasurements}
        data-hide-scroll={dataAttr(!isLimitReached)}
        maxLength={maxLength}
        maxRows={maxRows}
        minRows={minRows}
        style={mergeProps(textareaProps.style as TextareaAutoSizeStyle, style ?? {})}
        onHeightChange={handleHeightChange}
      />
    );

    const innerWrapper = useMemo(() => {
      return (
        <div {...getInnerWrapperProps()}>
          {startContent}
          {content}
          {isInvalid && !isValid ? invalid : valid}
          {endContent}
        </div>
      );
    }, [startContent, textareaProps, endContent, getInnerWrapperProps]);

    return (
      <Component {...getBaseProps()}>
        {shouldLabelBeOutside ? labelContent : null}
        <div {...getInputWrapperProps()} data-has-multiple-rows={dataAttr(hasMultipleRows)}>
          {innerWrapper}
        </div>
        {maxLengthContent}
        {hasHelper ? (
          <div {...getHelperWrapperProps()}>
            {errorMessage ? (
              <div {...getErrorMessageProps()}>
                <>{errorMessage}</>
              </div>
            ) : description ? (
              <div {...getDescriptionProps()}>{description}</div>
            ) : null}
          </div>
        ) : null}
      </Component>
    );
  },
);

Textarea.displayName = "Banyu.Textarea";

export default Textarea;
