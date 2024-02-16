import {CloseFilledIcon} from "@jala-banyu/shared-icons";
import {forwardRef} from "@jala-banyu/system";
import {useMemo} from "react";

import {UseChipProps, useChip} from "./use-chip";

export interface ChipProps extends Omit<UseChipProps, "isOneChar" | "isCloseButtonFocusVisible"> {}

const Chip = forwardRef<"div", ChipProps>((props, ref) => {
  const {
    Component,
    children,
    slots,
    classNames,
    isCloseable,
    startContent,
    endContent,
    getCloseButtonProps,
    getChipProps,
  } = useChip({
    ...props,
    ref,
  });

  const start = useMemo(() => {
    return startContent;
  }, [slots, startContent]);

  const end = useMemo(() => {
    if (isCloseable) {
      return <span {...getCloseButtonProps()}>{endContent || <CloseFilledIcon />}</span>;
    }

    return endContent;
  }, [endContent, isCloseable, getCloseButtonProps]);

  return (
    <Component {...getChipProps()}>
      {start}
      <span className={slots.content({class: classNames?.content})}>{children}</span>
      {end}
    </Component>
  );
});

Chip.displayName = "Banyu.Chip";

export default Chip;
