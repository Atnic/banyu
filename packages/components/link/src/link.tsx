import {forwardRef} from "@banyu/system";
import {LinkIcon} from "@banyu/shared-icons";
import {linkAnchorClasses} from "@banyu/theme";

import {UseLinkProps, useLink} from "./use-link";

export interface LinkProps extends UseLinkProps {}

const Link = forwardRef<"a", LinkProps>((props, ref) => {
  const {
    Component,
    children,
    showAnchorIcon,
    anchorIcon = <LinkIcon className={linkAnchorClasses} />,
    getLinkProps,
  } = useLink({
    ref,
    ...props,
  });

  return (
    <Component {...getLinkProps()}>
      <>
        {children}
        {showAnchorIcon && anchorIcon}
      </>
    </Component>
  );
});

Link.displayName = "Banyu.Link";

export default Link;
