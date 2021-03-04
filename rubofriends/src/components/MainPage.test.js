import React from "react";
import MainPage from "./MainPage";
import { shallow, mount, render } from "enzyme";
import toJson from "enzyme-to-json";

describe("MainPage Component", () => {
  let component;

  beforeEach(() => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false
    }
    component = shallow(<MainPage {...mockProps} />);
  })

  it("render the component", () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  it("filter the robot correctly", () => {
    expect(component.instance().filteredRobots([])).toEqual([]);
  });
});

describe("with non-empty mockProps", () => {
  it("filter the robot correctly", () => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
        },
      ],
      searchField: "",
      isPending: false,
    };
    const component = shallow(<MainPage {...mockProps} />);
    expect(component.instance().filteredRobots()).not.toEqual([]);
  });
});
