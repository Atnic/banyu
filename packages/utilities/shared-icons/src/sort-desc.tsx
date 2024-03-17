import {IconSvgProps} from "./types";

export const SortDescIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M6 20L10 16H7V4H5V16H2L6 20ZM11 8H20V10H11V8ZM11 12H18V14H11V12ZM11 4H22V6H11V4ZM11 16H16V18H11V16Z"
      fill="currentColor"
    />
  </svg>
);
