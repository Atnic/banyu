import {useEffect} from "react";
import {forwardRef, HTMLBanyuProps} from "@jala-banyu/system";
import {useDOMRef} from "@jala-banyu/react-utils";
import {clsx} from "@jala-banyu/shared-utils";

import {useModalContext} from "./modal-context";

export interface ModalHeaderProps extends HTMLBanyuProps<"header"> {}

const ModalHeader = forwardRef<"header", ModalHeaderProps>((props, ref) => {
  const {as, children, className, ...otherProps} = props;

  const {slots, classNames, headerId, setHeaderMounted} = useModalContext();

  const domRef = useDOMRef(ref);

  const Component = as || "header";

  /**
   * Notify us if this component was rendered or used,
   * so we can append `aria-labelledby` automatically
   */
  useEffect(() => {
    setHeaderMounted(true);

    return () => setHeaderMounted(false);
  }, [setHeaderMounted]);

  return (
    <Component
      ref={domRef}
      className={slots.header({class: clsx(classNames?.header, className)})}
      id={headerId}
      {...otherProps}
    >
      {children}
    </Component>
  );
});

ModalHeader.displayName = "Banyu.ModalHeader";

export default ModalHeader;
