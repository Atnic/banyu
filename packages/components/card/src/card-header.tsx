import {forwardRef, HTMLNextUIProps} from "@banyu/system";
import {useDOMRef} from "@banyu/react-utils";
import {clsx} from "@banyu/shared-utils";

import {useCardContext} from "./card-context";

const CardHeader = forwardRef<"div", HTMLNextUIProps<"div">>((props, ref) => {
  const {as, className, children, ...otherProps} = props;
  const Component = as || "div";

  const domRef = useDOMRef(ref);

  const {slots, classNames} = useCardContext();

  const headerStyles = clsx(classNames?.header, className);

  return (
    <Component ref={domRef} className={slots.header?.({class: headerStyles})} {...otherProps}>
      {children}
    </Component>
  );
});

CardHeader.displayName = "Banyu.CardHeader";

export default CardHeader;
