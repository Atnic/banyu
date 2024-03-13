import type {GridNode} from "@react-types/grid";

import {forwardRef, HTMLBanyuProps} from "@jala-banyu/system";
import {useDOMRef, filterDOMProps} from "@jala-banyu/react-utils";
import {clsx, dataAttr} from "@jala-banyu/shared-utils";
import {useTableCell, useTableSelectionCheckbox} from "@react-aria/table";
import {mergeProps} from "@react-aria/utils";
import {useFocusRing} from "@react-aria/focus";
import {Checkbox} from "@jala-banyu/checkbox";
import {VisuallyHidden} from "@react-aria/visually-hidden";
import {Key} from "@react-types/shared";

import {ValuesType} from "./use-table";

// @internal
export interface TableCheckboxCellProps<T = object> extends HTMLBanyuProps<"td"> {
  /**
   * The key of the table row.
   */
  rowKey: Key;
  /**
   * The table cell.
   */
  node: GridNode<T>;
  slots: ValuesType["slots"];
  state: ValuesType["state"];
  color: ValuesType["color"];
  disableAnimation: ValuesType["disableAnimation"];
  checkboxesProps: ValuesType["checkboxesProps"];
  selectionMode: ValuesType["selectionMode"];
  classNames?: ValuesType["classNames"];
}

const TableCheckboxCell = forwardRef<"td", TableCheckboxCellProps>((props, ref) => {
  const {
    as,
    className,
    node,
    rowKey,
    slots,
    state,
    color,
    disableAnimation,
    checkboxesProps,
    selectionMode,
    classNames,
    ...otherProps
  } = props;

  const Component = as || "td";
  const shouldFilterDOMProps = typeof Component === "string";

  const domRef = useDOMRef(ref);

  const {gridCellProps} = useTableCell({node}, state, domRef);
  const {isFocusVisible, focusProps} = useFocusRing();

  const {checkboxProps} = useTableSelectionCheckbox({key: node?.parentKey || node.key}, state);

  const tdStyles = clsx(classNames?.td, className, node.props?.className);

  const isSingleSelectionMode = selectionMode === "single";

  const {onChange, ...otherCheckboxProps} = checkboxProps;
  const isRowSelected = state.selectionManager.isSelected(rowKey);

  return (
    <Component
      ref={domRef}
      data-focus-visible={dataAttr(isFocusVisible)}
      data-selected={dataAttr(isRowSelected)}
      {...mergeProps(
        gridCellProps,
        focusProps,
        filterDOMProps(node.props, {
          enabled: shouldFilterDOMProps,
        }),
        otherProps,
      )}
      className={slots.td?.({class: tdStyles})}
    >
      {isSingleSelectionMode ? (
        <VisuallyHidden>{checkboxProps["aria-label"]}</VisuallyHidden>
      ) : (
        <Checkbox
          color={color}
          disableAnimation={disableAnimation}
          onValueChange={onChange}
          {...mergeProps(checkboxesProps, otherCheckboxProps)}
        />
      )}
    </Component>
  );
});

TableCheckboxCell.displayName = "Banyu.TableCheckboxCell";

export default TableCheckboxCell;
