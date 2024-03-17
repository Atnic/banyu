import {forwardRef} from "@jala-banyu/system";
import {CloseIcon} from "@jala-banyu/shared-icons";
import {injectStyle} from "react-toastify/dist/inject-style";

import {UseAlertProps, useAlert} from "./use-alert";

export interface AlertProps extends UseAlertProps {}

const Alert = forwardRef<"div", AlertProps>((props, ref) => {
  const {
    Component,
    getBaseProps,
    getStartContentProps,
    getContentProps,
    getTitleWrapperProps,
    getTitleProps,
    getSubtitleInfoProps,
    getStartIconProps,
    getEndContentProps,
    title,
    subtitle,
    startContent,
    startIcon,
    endContent,
    children,
    closeToast,
  } = useAlert({
    ...props,
    ref,
  });

  injectStyle();

  const renderEndContent = endContent ? (
    <div {...getEndContentProps()}>{endContent}</div>
  ) : (
    <div {...getEndContentProps()}>
      <button onClick={closeToast}>
        <CloseIcon />
      </button>
    </div>
  );

  return (
    <Component {...getBaseProps()}>
      <div {...getStartContentProps()}>{startContent}</div>
      <div {...getStartIconProps()}>{startIcon}</div>
      <div {...getContentProps()}>
        <div {...getTitleWrapperProps()}>
          <h5 {...getTitleProps()}>{title}</h5>
          <p {...getSubtitleInfoProps()}>{subtitle}</p>
        </div>
        {children}
      </div>
      {renderEndContent}
    </Component>
  );
});

Alert.displayName = "Banyu.Alert";

export default Alert;
