import {forwardRef} from "@jala-banyu/system";
import {OverlayContainer} from "@react-aria/overlays";
import {AnimatePresence, motion} from "framer-motion";
import {TRANSITION_VARIANTS} from "@jala-banyu/framer-transitions";
import {warn} from "@jala-banyu/shared-utils";
import {Children, cloneElement} from "react";
import {getTransformOrigins} from "@jala-banyu/aria-utils";
import {mergeProps} from "@react-aria/utils";

import {UseTooltipProps, useTooltip} from "./use-tooltip";

export interface TooltipProps extends Omit<UseTooltipProps, "disableTriggerFocus" | "backdrop"> {}

const Tooltip = forwardRef<"div", TooltipProps>((props, ref) => {
  const {
    Component,
    children,
    content,
    isOpen,
    portalContainer,
    placement,
    disableAnimation,
    motionProps,
    getTriggerProps,
    getTooltipProps,
    getTooltipContentProps,
  } = useTooltip({
    ...props,
    ref,
  });

  let trigger: React.ReactElement;

  try {
    /**
     * Ensure tooltip has only one child node
     */
    const child = Children.only(children) as React.ReactElement & {
      ref?: React.Ref<any>;
    };

    trigger = cloneElement(child, getTriggerProps(child.props, child.ref));
  } catch (error) {
    trigger = <span />;
    warn("Tooltip must have only one child node. Please, check your code.");
  }

  const {ref: tooltipRef, id, style, ...otherTooltipProps} = getTooltipProps();

  const animatedContent = (
    <div ref={tooltipRef} id={id} style={style}>
      <motion.div
        animate="enter"
        exit="exit"
        initial="exit"
        variants={TRANSITION_VARIANTS.scaleSpring}
        {...mergeProps(motionProps, otherTooltipProps)}
        style={{
          ...getTransformOrigins(placement),
        }}
      >
        <Component {...getTooltipContentProps()}>{content}</Component>
      </motion.div>
    </div>
  );

  return (
    <>
      {trigger}
      {disableAnimation && isOpen ? (
        <OverlayContainer portalContainer={portalContainer}>
          <div ref={tooltipRef} id={id} style={style} {...otherTooltipProps}>
            <Component {...getTooltipContentProps()}>{content}</Component>
          </div>
        </OverlayContainer>
      ) : (
        <AnimatePresence>
          {isOpen ? (
            <OverlayContainer portalContainer={portalContainer}>{animatedContent}</OverlayContainer>
          ) : null}
        </AnimatePresence>
      )}
    </>
  );
});

Tooltip.displayName = "Banyu.Tooltip";

export default Tooltip;
