import React from "react"
import Card from "./Card"
import { shallow, mount, render } from 'enzyme'
import toJson from "enzyme-to-json";

describe('Card Component', () => {
  it('render the component', () => {
    const component = shallow(<Card/>)

    expect(toJson(component)).toMatchSnapshot()
  })
})
