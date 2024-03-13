import {IconSvgProps} from "./types";

export const SortIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path d="M7 20H9V8H12L8 4L4 8H7V20ZM20 16H17V4H15V16H12L16 20L20 16Z" fill="currentColor" />
  </svg>
);
