import {ToastContainer, ToastContainerProps} from "react-toastify";

const AnnouncementContainer = (props: ToastContainerProps) => {
  /**
   * Return ToastContainer without default styles
   */
  return (
    <ToastContainer
      {...props}
      autoClose={false}
      bodyClassName={() => ""}
      className={() => ""}
      closeButton={false}
      style={{width: "100dvw"}}
      toastClassName={() => ""}
    />
  );
};

AnnouncementContainer.displayName = "Banyu.AnnouncementContainer";

export default AnnouncementContainer;
