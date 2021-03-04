import React from "react";
import Scroll from "./Scroll";
import { shallow, mount, render } from "enzyme";
import toJson from "enzyme-to-json";

describe("Cardlist Component", () => {
  it("render the component", () => {
    const component = shallow(<Scroll />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
