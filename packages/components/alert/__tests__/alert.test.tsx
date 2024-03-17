import * as React from "react";
import {render} from "@testing-library/react";

import {Alert} from "../src";

describe("Alert", () => {
  it("should render correctly", () => {
    const wrapper = render(<Alert />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<Alert ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it("should render with children", () => {
    const wrapper = render(<Alert>Children</Alert>);

    expect(wrapper.getByText("Children")).toBeTruthy();
  });

  it("should render with custom className", () => {
    const {container} = render(<Alert classNames={{base: "custom-class-name"}} />);

    expect(container.firstChild).toHaveClass("custom-class-name");
  });
});
