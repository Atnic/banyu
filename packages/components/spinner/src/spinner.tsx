import {forwardRef} from "@jala-banyu/system-rsc";

import {UseSpinnerProps, useSpinner} from "./use-spinner";

export interface SpinnerProps extends UseSpinnerProps {}

const Spinner = forwardRef<"div", SpinnerProps>((props, ref) => {
  const {slots, classNames, label, progress, getSpinnerProps} = useSpinner({...props});

  const strokeDashoffset =
    progress !== undefined ? `calc(400 - (250 * ${progress > 100 ? 100 : progress}) / 100)` : 200;

  return (
    <div ref={ref} {...getSpinnerProps()}>
      <div className={slots.wrapper({class: classNames?.wrapper})}>
        <div>
          <svg className={"w-full h-full"} viewBox="0 0 100 100">
            <circle
              className={slots.circleBackground({class: classNames?.circleBackground})}
              cx="50"
              cy="50"
              fill="transparent"
              r="40"
              strokeWidth="10"
            />
            <circle
              className={slots.circle({class: classNames?.circle})}
              cx="50"
              cy="50"
              fill="transparent"
              r="40"
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              strokeWidth="10"
            />
          </svg>
        </div>
      </div>
      {label && <span className={slots.label()}>{label}</span>}
    </div>
  );
});

Spinner.displayName = "Banyu.Spinner";

export default Spinner;
