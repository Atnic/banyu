import React, {forwardRef} from "react";
import {HTMLBanyuProps} from "@jala-banyu/system";
import {clsx} from "@jala-banyu/shared-utils";

import {useCardContext} from "./card-context";

type CardTitleProps = HTMLBanyuProps<"div"> & {
  startButton?: React.ReactNode;
  title: string;
  subtitle?: string;
};

const CardTitle = forwardRef<"div", CardTitleProps>((props, ref) => {
  const {as, className} = props;
  const Component = as || "div";
  const domRef = ref;

  const {slots, classNames} = useCardContext();
  const headerTitleStyles = clsx(classNames?.headerTitle, className);
  const headerSubtitleStyles = clsx(classNames?.headerSubtitle, className);

  return (
    <Component ref={domRef} className="flex items-center justify-between gap-2 w-full">
      {props.startButton}
      <div className="flex-1 flex-col">
        <h2 className={slots.headerTitle?.({class: headerTitleStyles})}>{props.title}</h2>
        <p className={slots.headerSubtitle?.({class: headerSubtitleStyles})}>{props.subtitle}</p>
      </div>
    </Component>
  );
});

CardTitle.displayName = "Banyu.CardTitle";

export default CardTitle;
