import {HTMLBanyuProps} from "@jala-banyu/system";
import {Column} from "@react-stately/table";
import {SpectrumColumnProps} from "@react-types/table";

export type TableColumnProps<T> = Omit<SpectrumColumnProps<T>, "showDivider"> &
  Omit<HTMLBanyuProps<"th">, keyof SpectrumColumnProps<T>> & {
    tooltip?: string;
  };

const TableColumn = Column as <T>(props: TableColumnProps<T>) => JSX.Element;

export default TableColumn;
