import {useMemo, ReactNode} from "react";
import {forwardRef} from "@jala-banyu/system";

import {UseMenuItemProps, useMenuItem} from "./use-menu-item";
import {MenuSelectedIcon} from "./menu-selected-icon";

export interface MenuItemProps<T extends object = object> extends UseMenuItemProps<T> {}

/**
 * @internal
 */
const MenuItem = forwardRef<"li", MenuItemProps>((props, _) => {
  const {
    Component,
    slots,
    classNames,
    rendered,
    shortcut,
    description,
    isSelected,
    isDisabled,
    selectedIcon,
    startContent,
    endContent,
    disableAnimation,
    getItemProps,
    getLabelProps,
    getDescriptionProps,
    getKeyboardShortcutProps,
  } = useMenuItem(props);

  useMemo<ReactNode | null>(() => {
    const defaultIcon = (
      <MenuSelectedIcon disableAnimation={disableAnimation} isSelected={isSelected} />
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
        <div className={slots.wrapper({class: classNames?.wrapper})}>
          <span {...getLabelProps()}>{rendered}</span>
          <span {...getDescriptionProps()}>{description}</span>
        </div>
      ) : (
        <span {...getLabelProps()}>{rendered}</span>
      )}
      {shortcut && <kbd {...getKeyboardShortcutProps()}>{shortcut}</kbd>}
      {endContent}
    </Component>
  );
});

MenuItem.displayName = "Banyu.MenuItem";

export default MenuItem;
