import React from "react";
import SearchBox from "./SearchBox";
import { shallow, mount, render } from "enzyme";
import toJson from "enzyme-to-json";

describe("SearchBox Component", () => {
  const onSearchChange = true
  const searchField = 'test'
  it("render the component", () => {
    const component = shallow(<SearchBox searchfield={searchField} searchChange={onSearchChange} />);
    expect(toJson(component)).toMatchSnapshot();
  });
});
