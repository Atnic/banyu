import {useMemo, ReactNode} from "react";
import {forwardRef} from "@jala-banyu/system";

import {UseListboxItemProps, useListboxItem} from "./use-listbox-item";
import {ListboxSelectedIcon} from "./listbox-selected-icon";

export interface ListboxItemProps<T extends object = object> extends UseListboxItemProps<T> {}

/**
 * @internal
 */
const ListboxItem = forwardRef<"li", ListboxItemProps>((props, _) => {
  const {
    Component,
    rendered,
    description,
    isSelected,
    isDisabled,
    selectedIcon,
    startContent,
    endContent,
    disableAnimation,
    getItemProps,
    getLabelProps,
    getWrapperProps,
    getDescriptionProps,
  } = useListboxItem(props);

  useMemo<ReactNode | null>(() => {
    const defaultIcon = (
      <ListboxSelectedIcon disableAnimation={disableAnimation} isSelected={isSelected} />
    );

    if (typeof selectedIcon === "function") {
      return selectedIcon({icon: defaultIcon, isSelected, isDisabled});
    }

    if (selectedIcon) return selectedIcon;

    return defaultIcon;
  }, [selectedIcon, isSelected, isDisabled, disableAnimation]);

  return (
    <Component {...getItemProps()}>
      {startContent}
      {description ? (
        <div {...getWrapperProps()}>
          <span {...getLabelProps()}>{rendered}</span>
          <span {...getDescriptionProps()}>{description}</span>
        </div>
      ) : (
        <span {...getLabelProps()}>{rendered}</span>
      )}
      {endContent}
    </Component>
  );
});

ListboxItem.displayName = "Banyu.ListboxItem";

export default ListboxItem;
