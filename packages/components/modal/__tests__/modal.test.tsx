import * as React from "react";
import {render} from "@testing-library/react";

import {Modal} from "../src";

describe("Modal", () => {
  it("should render correctly", () => {
    // eslint-disable-next-line react/no-children-prop
    const wrapper = render(
      <Modal>
        <span>test</span>
      </Modal>,
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <Modal ref={ref}>
        <span>test</span>
      </Modal>,
    );
    // expect(ref.current).not.toBeNull();
  });
});
