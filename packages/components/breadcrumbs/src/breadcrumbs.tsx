import {cloneElement, useMemo} from "react";
import {forwardRef} from "@jala-banyu/system";
import {JalaEllipsisIcon} from "@jala-banyu/shared-icons";
import {warn} from "@jala-banyu/shared-utils";
import {chain} from "@react-aria/utils";

import {UseBreadcrumbsProps, useBreadcrumbs} from "./use-breadcrumbs";

export interface BreadcrumbsProps extends UseBreadcrumbsProps {}

const Breadcrumbs = forwardRef<"div", BreadcrumbsProps>((props, ref) => {
  const {
    Component,
    children,
    childCount,
    itemProps,
    separator = "/",
    maxItems,
    itemsBeforeCollapse,
    itemsAfterCollapse,
    isDisabled,
    renderEllipsis,
    getBaseProps,
    getListProps,
    getEllipsisProps,
    getSeparatorProps,
    onAction,
  } = useBreadcrumbs({
    ...props,
    ref,
  });

  const content = useMemo(() => {
    let items = children?.map((child, i) => {
      const isLast = i === childCount - 1;
      const itemKey = child?.key || i;

      return cloneElement(child, {
        ...itemProps,
        isLast,
        separator,
        isDisabled: isDisabled && !isLast,
        isCurrent: isLast || child.props.isCurrent,
        ...child.props,
        key: itemKey,
        onPress: chain(child.props?.onPress, () => onAction?.(itemKey)),
      });
    });

    if (!items) return null;

    if (childCount < maxItems) {
      return items;
    }

    if (itemsBeforeCollapse + itemsAfterCollapse >= childCount) {
      warn(
        `You have provided an invalid combination of props to the Breadcrumbs. itemsAfterCollapse={${itemsAfterCollapse}} + itemsBeforeCollapse={${itemsBeforeCollapse}} >= itemsCount={${childCount}}`,
        "Breadcrumbs",
      );

      return items;
    }

    const itemsInEllipsis = items.slice(itemsBeforeCollapse, items.length - itemsAfterCollapse);

    if (itemsInEllipsis.length < 1) {
      return items;
    }

    const ellipsisIcon = (
      <>
        <JalaEllipsisIcon {...getEllipsisProps()} />
      </>
    );
    const collapsedItem = cloneElement(itemsInEllipsis[0], {
      ...itemsInEllipsis[0].props,
      key: "ellipsis",
      children: ellipsisIcon,
    });

    const ellipsisItem =
      typeof renderEllipsis === "function"
        ? renderEllipsis({
            collapsedItem,
            items: itemsInEllipsis.map((item) => item.props),
            maxItems,
            ellipsisIcon,
            itemsBeforeCollapse,
            itemsAfterCollapse,
            separator: <span {...getSeparatorProps()}>{separator}</span>,
          })
        : collapsedItem;

    return [
      ...items.slice(0, itemsAfterCollapse),
      ellipsisItem,
      ...items.slice(items.length - itemsBeforeCollapse, items.length),
    ];
  }, [
    children,
    childCount,
    separator,
    itemProps,
    itemsBeforeCollapse,
    itemsAfterCollapse,
    isDisabled,
  ]);

  return (
    <Component {...getBaseProps()}>
      <ol {...getListProps()}>{content}</ol>
    </Component>
  );
});

Breadcrumbs.displayName = "Banyu.Breadcrumbs";

export default Breadcrumbs;
