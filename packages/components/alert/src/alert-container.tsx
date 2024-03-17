import {ToastContainer, ToastContainerProps} from "react-toastify";

const AlertContainer = (props: ToastContainerProps) => {
  /**
   * Return ToastContainer without default styles
   */
  return (
    <ToastContainer
      {...props}
      bodyClassName={() => ""}
      closeButton={false}
      hideProgressBar={true}
      style={{width: "fit-content", maxWidth: "472px"}}
      toastClassName={() => ""}
    />
  );
};

AlertContainer.displayName = "Banyu.AlertContainer";

export default AlertContainer;
