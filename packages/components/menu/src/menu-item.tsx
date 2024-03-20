import {useMemo, ReactNode} from "react";
import {forwardRef} from "@jala-banyu/system";
import {Checkbox} from "@jala-banyu/checkbox";

import {UseMenuItemProps, useMenuItem} from "./use-menu-item";

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
    isSelectable,
    hideSelectedIcon,
    getItemProps,
    getLabelProps,
    getDescriptionProps,
    getKeyboardShortcutProps,
  } = useMenuItem(props);

  const selectedContent = useMemo<ReactNode | null>(() => {
    const defaultIcon = (
      <Checkbox
        checked={isSelected}
        className="pr-0"
        disableAnimation={disableAnimation}
        disabled={isDisabled}
        isSelected={isSelected}
      />
    );

    if (typeof selectedIcon === "function") {
      return selectedIcon({icon: defaultIcon, isSelected, isDisabled});
    }

    if (selectedIcon) return selectedIcon;

    return defaultIcon;
  }, [selectedIcon, isSelected, isDisabled, disableAnimation]);

  return (
    <Component {...getItemProps()}>
      {isSelectable && !hideSelectedIcon && selectedContent}
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
