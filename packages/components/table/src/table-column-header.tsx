import type {GridNode} from "@react-types/grid";

import {forwardRef, HTMLBanyuProps} from "@jala-banyu/system";
import {useDOMRef, filterDOMProps} from "@jala-banyu/react-utils";
import {clsx, dataAttr} from "@jala-banyu/shared-utils";
import {useTableColumnHeader} from "@react-aria/table";
import {mergeProps} from "@react-aria/utils";
import {useFocusRing} from "@react-aria/focus";
import {VisuallyHidden} from "@react-aria/visually-hidden";
import {useHover} from "@react-aria/interactions";
import {Tooltip} from "@jala-banyu/tooltip";
import {HelpCircleIcon, SortAscIcon, SortDescIcon, SortIcon} from "@jala-banyu/shared-icons";

import {ValuesType} from "./use-table";

// @internal
export interface TableColumnHeaderProps<T = object> extends HTMLBanyuProps<"th"> {
  slots: ValuesType["slots"];
  state: ValuesType["state"];
  classNames?: ValuesType["classNames"];
  /**
   * The table node to render.
   */
  node: GridNode<T>;
}

const TableColumnHeader = forwardRef<"th", TableColumnHeaderProps>((props, ref) => {
  const {as, className, state, node, slots, classNames, ...otherProps} = props;

  const Component = as || "th";
  const shouldFilterDOMProps = typeof Component === "string";

  const domRef = useDOMRef(ref);

  const {columnHeaderProps} = useTableColumnHeader({node}, state, domRef);

  const thStyles = clsx(classNames?.th, className, node.props?.className);

  const {isFocusVisible, focusProps} = useFocusRing();
  const {isHovered, hoverProps} = useHover({});
  const {hideHeader, ...columnProps} = node.props;

  const allowsSorting = columnProps.allowsSorting;
  const tooltip = columnProps.tooltip;

  let sortIndicator = null;

  if (allowsSorting) {
    switch (columnHeaderProps["aria-sort"]) {
      case "ascending":
        sortIndicator = (
          <SortAscIcon
            className={slots.sortIcon?.({class: classNames?.sortIcon})}
            data-direction="ascending"
          />
        );
        break;
      case "descending":
        sortIndicator = (
          <SortDescIcon
            className={slots.sortIcon?.({class: classNames?.sortIcon})}
            data-direction="descending"
          />
        );
        break;
      default:
        sortIndicator = (
          <SortIcon
            className={slots.sortIcon?.({class: classNames?.sortIcon})}
            data-direction="none"
          />
        );
        break;
    }
  }

  let tooltipIndicator = null;

  if (tooltip) {
    tooltipIndicator = (
      <Tooltip content={tooltip} placement="top">
        <p className={"inline-block"}>
          <HelpCircleIcon className={slots.tooltipIcon?.({class: classNames?.tooltipIcon})} />
        </p>
      </Tooltip>
    );
  }

  return (
    <Component
      ref={domRef}
      colSpan={node.colspan}
      data-focus-visible={dataAttr(isFocusVisible)}
      data-hover={dataAttr(isHovered)}
      data-sortable={dataAttr(allowsSorting)}
      {...mergeProps(
        columnHeaderProps,
        focusProps,
        filterDOMProps(columnProps, {
          enabled: shouldFilterDOMProps,
        }),
        allowsSorting ? hoverProps : {},
        otherProps,
      )}
      className={slots.th?.({class: thStyles})}
    >
      {hideHeader ? <VisuallyHidden>{node.rendered}</VisuallyHidden> : node.rendered}
      {tooltipIndicator}
      {sortIndicator}
    </Component>
  );
});

TableColumnHeader.displayName = "Banyu.TableColumnHeader";

export default TableColumnHeader;
