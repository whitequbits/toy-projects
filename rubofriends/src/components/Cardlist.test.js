import React from "react";
import Cardlist from "./Cardlist";
import { shallow, mount, render } from "enzyme";
import toJson from "enzyme-to-json";

describe("Cardlist Component", () => {
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'JohnJohn',
      email:  'john@gmail.com'
    }
  ]
  it("render the component", () => {
    const component = shallow(<Cardlist robots={ mockRobots } />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
