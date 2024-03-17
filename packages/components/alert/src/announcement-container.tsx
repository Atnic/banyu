import {cssTransition, ToastContainer, ToastContainerProps} from "react-toastify";

const AnnouncementContainer = (props: ToastContainerProps) => {
  /**
   * Return ToastContainer without default styles
   */
  // disable transition on enter, dismiss when exit
  const noneTransition = cssTransition({
    enter: "none",
    exit: "hidden",
  });

  return (
    <ToastContainer
      {...props}
      autoClose={false}
      bodyClassName={() => ""}
      className={() => ""}
      closeButton={false}
      style={{width: "100dvw"}}
      toastClassName={() => ""}
      transition={noneTransition}
    />
  );
};

AnnouncementContainer.displayName = "Banyu.AnnouncementContainer";

export default AnnouncementContainer;
