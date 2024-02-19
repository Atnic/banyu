import {forwardRef} from "@jala-banyu/system";
import {LayoutGroup} from "framer-motion";
import {Divider} from "@jala-banyu/divider";
import {Fragment, Key, useCallback, useMemo} from "react";

import {UseAccordionProps, useAccordion} from "./use-accordion";
import AccordionItem from "./accordion-item";

export interface AccordionProps extends UseAccordionProps {}

const AccordionGroup = forwardRef<"div", AccordionProps>((props, ref) => {
  const {
    Component,
    values,
    state,
    isSplitted,
    showDivider,
    getBaseProps,
    disableAnimation,
    handleFocusChanged: handleFocusChangedProps,
    itemClasses,
  } = useAccordion({
    ...props,
    ref,
  });
  const handleFocusChanged = useCallback(
    (isFocused: boolean, key: Key) => handleFocusChangedProps(isFocused, key),
    [handleFocusChangedProps],
  );

  const content = useMemo(() => {
    return [...state.collection].map((item, index) => {
      const classNames = {...itemClasses, ...(item.props.classNames || {})};

      return (
        <Fragment key={item.key}>
          <AccordionItem
            item={item}
            onFocusChange={handleFocusChanged}
            {...values}
            {...item.props}
            classNames={classNames}
          />
          {!isSplitted && showDivider && index < state.collection.size - 1 && <Divider />}
        </Fragment>
      );
    });
  }, [values, itemClasses, handleFocusChanged, isSplitted, showDivider, state.collection]);

  // const baseProps = getBaseProps();
  //
  // const isDisabled = useMemo(() => {
  //   return values.isDisabled || false;
  // }, [values.isDisabled]);
  //
  // baseProps.className = `${baseProps.className} ${isDisabled ?

  return (
    <Component {...getBaseProps()}>
      {disableAnimation ? content : <LayoutGroup>{content}</LayoutGroup>}
    </Component>
  );
});

AccordionGroup.displayName = "Banyu.Accordion";

export default AccordionGroup;
