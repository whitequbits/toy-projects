import React from "react";
import CounterButton from "./CounterButton";
import { shallow, mount, render } from "enzyme";
import toJson from "enzyme-to-json";

describe("CounterButton Component", () => {
  it("render the component", () => {
    const component = shallow(
      <CounterButton />
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it("working counter", () => {
    const initialCount = 0
    const component = shallow(<CounterButton />);
    component.find('button').simulate('click');
    component.find("button").simulate("click");
    expect(component.state('count')).toEqual(initialCount + 2)
  });
});
