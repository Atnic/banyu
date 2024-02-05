import {forwardRef, HTMLBanyuProps} from "@banyu/system";
import {useDOMRef} from "@banyu/react-utils";
import {clsx} from "@banyu/shared-utils";

import {useCardContext} from "./card-context";

export interface CardFooterProps extends HTMLBanyuProps<"div"> {}

const CardFooter = forwardRef<"div", CardFooterProps>((props, ref) => {
  const {as, className, children, ...otherProps} = props;

  const Component = as || "div";
  const domRef = useDOMRef(ref);

  const {slots, classNames} = useCardContext();

  const footerStyles = clsx(classNames?.footer, className);

  return (
    <Component ref={domRef} className={slots.footer?.({class: footerStyles})} {...otherProps}>
      {children}
    </Component>
  );
});

CardFooter.displayName = "Banyu.CardFooter";

export default CardFooter;
