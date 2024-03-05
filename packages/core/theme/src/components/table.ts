import type {VariantProps} from "tailwind-variants";

import {tv} from "../utils/tv";
import {dataFocusVisibleClasses} from "../utils";

/**
 * Table **Tailwind Variants** component
 *
 * @example
 * ```js
 * const {base, table, thead, tbody, tr, th, td, tfoot} = table({...})
 *
 * <div className={base()}>
 *   <table className={table()}>
 *    <thead className={thead()}>
 *      <tr className={tr()}>
 *        <th className={th()}>...</th>
 *        <th className={th()}>...</th>
 *      </tr>
 *    </thead>
 *    <tbody className={tbody()}>
 *      <tr className={tr()}>
 *        <td className={td()}>...</td>
 *        <td className={td()}>...</td>
 *      </tr>
 *      <tr className={tr()}>
 *        <td className={td()}>...</td>
 *        <td className={td()}>...</td>
 *     </tr>
 *   </tbody>
 *    <tfoot className={tfoot()}>
 *      <tr className={tr()}>
 *        <td className={td()}>...</td>
 *        <td className={td()}>...</td>
 *      </tr>
 *    </tfoot>
 *  </table>
 * </div>
 * ```
 */
const table = tv({
  slots: {
    base: "flex flex-col relative gap-4",
    wrapper: [
      // "p-4",
      "z-0",
      "flex",
      "flex-col",
      "relative",
      "justify-between",
      "gap-4",
      "shadow-sm",
      "bg-content1",
      "overflow-auto",
    ],
    table: "min-w-full h-auto",
    thead: "[&>tr]:first:rounded-lg",
    tbody: "",
    tr: ["group", "outline-none", "border-b-1", "border-neutral-200", ...dataFocusVisibleClasses],
    th: [
      "group",
      "py-3",
      "px-2",
      // "h-10",
      "text-left",
      "align-middle",
      "whitespace-nowrap",
      "text-neutral-500",
      "text-sm",
      "font-semibold",
      // "first:rounded-tl-md",
      // "last:rounded-tr-md",
      "outline-none",
      "data-[sortable=true]:transition-colors",
      "data-[sortable=true]:cursor-pointer",
      "data-[hover=true]:text-neutral-700",
      ...dataFocusVisibleClasses,
    ],
    td: [
      "py-4",
      "px-2",
      "relative",
      "align-middle",
      "whitespace-normal",
      "text-sm",
      "text-neutral-800",
      "font-normal",
      "outline-none",
      "[&>*]:z-1",
      "[&>*]:relative",
      ...dataFocusVisibleClasses,
      // before content for selection
      "before:content-['']",
      "before:absolute",
      "before:z-0",
      "before:inset-0",
      "before:opacity-0",
      "data-[selected=true]:before:opacity-100",
      // disabled
      "group-data-[disabled=true]:text-foreground-300",
    ],
    tfoot: "",
    sortIcon: ["ml-1", "mb-px", "text-neutral-800", "inline-block"],
    tooltipIcon: ["ml-1", "mb-px", "text-sm", "text-neutral-400", "inline-block"],
    emptyWrapper: "text-foreground-400 align-middle text-center h-40",
    loadingWrapper: "absolute inset-0 flex items-center justify-center",
  },
  variants: {
    color: {
      primary: {
        td: "before:bg-brand/20 data-[selected=true]:text-brand",
      },
      success: {
        td: "before:bg-success/20 data-[selected=true]:text-success-600 dark:data-[selected=true]:text-success",
      },
      warning: {
        td: "before:bg-warning/20 data-[selected=true]:text-warning-600 dark:data-[selected=true]:text-warning",
      },
      danger: {
        td: "before:bg-danger/20 data-[selected=true]:text-danger dark:data-[selected=true]:text-danger-500",
      },
      basic: {
        td: "before:bg-neutral/20 data-[selected=true]:text-neutral-800 dark:data-[selected=true]:text-neutral-200",
      },
      white: {
        td: "before:bg-brand/20 data-[selected=true]:text-brand dark:data-[selected=true]:text-brand-200",
      },
      transparent: {
        td: "before:bg-transparent data-[selected=true]:text-neutral-800 dark:data-[selected=true]:text-neutral-200",
      },
    },
    headerColor: {
      default: {
        th: "bg-neutral-200",
      },
      white: {
        th: "bg-white",
      },
    },
    layout: {
      auto: {
        table: "table-auto",
      },
      fixed: {
        table: "table-fixed",
      },
    },
    radius: {
      none: {
        wrapper: "rounded-none",
      },
      sm: {
        wrapper: "rounded-sm",
      },
      md: {
        wrapper: "rounded-md",
      },
      lg: {
        wrapper: "rounded-lg",
      },
    },
    shadow: {
      none: {
        wrapper: "shadow-none",
      },
      sm: {
        wrapper: "shadow-sm",
      },
      md: {
        wrapper: "shadow-md",
      },
      lg: {
        wrapper: "shadow-lg",
      },
    },
    hideHeader: {
      true: {
        thead: "hidden",
      },
    },
    isStriped: {
      true: {
        td: [
          "group-data-[odd=true]:before:bg-neutral-50",
          "group-data-[odd=true]:before:opacity-50",
        ],
      },
      false: {
        td: [
          "group-data-[odd=true]:before:bg-transparent",
          "group-data-[odd=true]:before:opacity-0",
        ],
      },
    },
    isCompact: {
      true: {
        td: "py-1",
      },
      false: {},
    },
    isHeaderSticky: {
      true: {
        thead: "sticky top-0 z-20 [&>tr]:first:shadow-sm",
      },
    },
    isSelectable: {
      true: {
        tr: "cursor-default",
        td: [
          "group-aria-[selected=false]:group-data-[hover=true]:before:bg-neutral-100",
          "group-aria-[selected=false]:group-data-[hover=true]:before:opacity-70",
        ],
      },
    },
    isMultiSelectable: {
      true: {
        td: [
          // first
          // "group-data-[first=true]:first:before:rounded-tl-lg",
          // "group-data-[first=true]:last:before:rounded-tr-lg",
          // middle
          // "group-data-[middle=true]:before:rounded-none",
          // last
          // "group-data-[last=true]:first:before:rounded-bl-lg",
          // "group-data-[last=true]:last:before:rounded-br-lg",
        ],
      },
      false: {
        // td: ["first:before:rounded-l-lg", "last:before:rounded-r-lg"],
      },
    },
    fullWidth: {
      true: {
        base: "w-full",
        wrapper: "w-full",
        table: "w-full",
      },
    },
  },
  defaultVariants: {
    layout: "auto",
    shadow: "sm",
    radius: "md",
    color: "primary",
    headerColor: "default",
    isCompact: false,
    hideHeader: false,
    isStriped: true,
    fullWidth: true,
    disableAnimation: false,
  },
});

export type TableVariantProps = VariantProps<typeof table>;
export type TableSlots = keyof ReturnType<typeof table>;
export type TableReturnType = ReturnType<typeof table>;

export {table};
