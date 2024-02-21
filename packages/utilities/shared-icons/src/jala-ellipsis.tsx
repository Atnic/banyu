import * as React from "react";

import {IconSvgProps} from "./types";

export const JalaEllipsisIcon = (props: IconSvgProps) => (
  <svg
    fill="currentColor"
    height="1em"
    viewBox="0 0 16 16"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      height={4}
      id="ellipsis_svg__a"
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
      width={12}
      x={2}
      y={6}
    >
      <path
        clipRule="evenodd"
        d="M6.667 8a1.333 1.333 0 1 1 2.666 0 1.333 1.333 0 0 1-2.666 0M11.333 8A1.333 1.333 0 1 1 14 8a1.333 1.333 0 0 1-2.667 0M2 8a1.333 1.333 0 1 1 2.667 0A1.333 1.333 0 0 1 2 8"
        fill="#061938"
        fillRule="evenodd"
      />
    </mask>
    <g mask="url(#ellipsis_svg__a)">
      <path d="M0 0h16v16H0z" fill="currentColor" />
    </g>
  </svg>
);
