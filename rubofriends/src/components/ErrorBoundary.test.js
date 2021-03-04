import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import { shallow, mount, render } from "enzyme";
import toJson from "enzyme-to-json";

describe("Cardlist Component", () => {
  it("render the component", () => {
    const component = shallow(<ErrorBoundary />);
    component.setState({ hasError: true})
    expect(toJson(component)).toMatchSnapshot();
  });

  it("render the child", () => {
    const component = shallow(<ErrorBoundary />);
    component.setState({ hasError: false });
    expect(toJson(component)).toMatchSnapshot();
  });
});
