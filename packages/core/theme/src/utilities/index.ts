import transition from "./transition";
import custom from "./custom";
import scrollbarHide from "./scrollbar-hide";
import heading from "./heading";

export const utilities = {
  ...custom,
  ...transition,
  ...scrollbarHide,
  ...heading
};
