import type {ReactNode} from "react";

import {avatarGroup} from "@jala-banyu/theme";
import {HTMLBanyuProps, PropGetter} from "@jala-banyu/system";
import {useDOMRef} from "@jala-banyu/react-utils";
import {clsx, compact} from "@jala-banyu/shared-utils";
import {ReactRef, getValidChildren} from "@jala-banyu/react-utils";
import {cloneElement, useMemo} from "react";

import {AvatarProps} from "./index";

interface Props extends HTMLBanyuProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLDivElement | null>;
  /**
   * Whether the avatars should be displayed in a grid
   */
  isGrid?: boolean;
  /**
   * The maximum number of visible avatars
   * @default 5
   */
  max?: number;
  /**
   * Control the number of avatar not visible
   */
  total?: number;
  /**
   * This allows you to render a custom count component.
   */
  renderCount?: (count: number) => ReactNode;
}

export type UseAvatarGroupProps = Props &
  Partial<Pick<AvatarProps, "size" | "variant" | "color" | "radius" | "isDisabled" | "isBordered">>;

export type ContextType = {
  size?: AvatarProps["size"];
  color?: AvatarProps["color"];
  radius?: AvatarProps["radius"];
  variant?: AvatarProps["variant"];
  isGrid?: boolean;
  isBordered?: AvatarProps["isBordered"];
  isDisabled?: AvatarProps["isDisabled"];
};

export function useAvatarGroup(props: UseAvatarGroupProps = {}) {
  const {
    as,
    ref,
    max = 5,
    total,
    size,
    color,
    radius,
    variant = "solid",
    children,
    isBordered,
    isDisabled,
    isGrid,
    renderCount,
    className,
    ...otherProps
  } = props;

  const domRef = useDOMRef(ref);

  const Component = as || "div";

  const context = useMemo<ContextType>(
    () => ({
      size,
      color,
      radius,
      variant,
      isGrid,
      isBordered,
      isDisabled,
    }),
    [size, color, variant, radius, isGrid, isBordered, isDisabled],
  );
  const classNames = useMemo(() => avatarGroup({className, isGrid}), [className, isGrid]);

  const validChildren = getValidChildren(children);
  const childrenWithinMax = max ? validChildren.slice(0, max) : validChildren;

  const remainingCount = total ? total : max != null ? validChildren.length - max : -1;

  const clones = childrenWithinMax.map((child, index) => {
    const isFirstAvatar = index === 0;
    // const isLastAvatar = index === childrenWithinMax.length - 1;

    const childProps = {
      className: clsx(
        isFirstAvatar ? "ms-0" : !isGrid ? "-ms-2" : "",
        // hover
        // isLastAvatar && remainingCount < 1 ? "hover:-translate-x-0" : "",
      ),
    };

    return cloneElement(child, compact(childProps));
  });

  const getAvatarGroupProps: PropGetter = () => {
    return {
      ref: domRef,
      className: classNames,
      role: "group",
      ...otherProps,
    };
  };

  return {
    Component,
    context,
    remainingCount,
    clones,
    renderCount,
    getAvatarGroupProps,
  };
}

export type UseAvatarReturn = ReturnType<typeof useAvatarGroup>;
