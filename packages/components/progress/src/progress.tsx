import {forwardRef} from "@jala-banyu/system";
import {Chip} from "@jala-banyu/chip";

import {UseProgressProps, useProgress} from "./use-progress";

export interface ProgressProps extends UseProgressProps {}

const Progress = forwardRef<"div", ProgressProps>((props, ref) => {
  const {
    Component,
    slots,
    classNames,
    label,
    percentage,
    showValueLabel,
    getProgressBarProps,
    getLabelProps,
    getChipProps,
  } = useProgress({...props, ref});

  const progressBarProps = getProgressBarProps();
  const shouldShowLabelWrapper = label || showValueLabel;
  let floatingLabelMargin = `calc(${progressBarProps["aria-valuetext"]} - 1.5rem)`;

  switch (progressBarProps["aria-valuetext"]) {
    case "0%":
      floatingLabelMargin = "0";
      break;
    case "100%":
      floatingLabelMargin = "calc(100% - 3.1rem)";
      break;
  }

  return (
    <Component {...progressBarProps}>
      {shouldShowLabelWrapper ? (
        <div className={slots.labelWrapper({class: classNames?.labelWrapper})}>
          {label && <span {...getLabelProps()}>{label}</span>}
          {showValueLabel && (
            <span className={slots.value({class: classNames?.value})}>
              {progressBarProps["aria-valuetext"]}
            </span>
          )}
        </div>
      ) : null}
      <div className={slots.progressBarWrapper({class: classNames?.progressBarWrapper})}>
        <div
          className={slots.floatingLabelWrapper({class: classNames?.floatingLabelWrapper})}
          style={{marginInlineStart: floatingLabelMargin}}
        >
          <Chip {...getChipProps()}>{progressBarProps["aria-valuetext"]}</Chip>
        </div>
        <div className={slots.track({class: classNames?.track})}>
          <div
            className={slots.indicator({class: classNames?.indicator})}
            style={{
              transform: `translateX(-${100 - (percentage || 0)}%)`,
            }}
          />
        </div>
      </div>
    </Component>
  );
});

Progress.displayName = "Banyu.Progress";

export default Progress;
