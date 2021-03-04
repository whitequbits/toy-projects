import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
} from "./constants.js";

import * as actions from "./actions"
import configureStore from "redux-mock-store"
import thunkMiddleware from "redux-thunk"

const mockStore = configureStore([thunkMiddleware])

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      }),
  })
);

it("should create an action to test robots", () => {
  const text = 'wooo'
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  }
  expect(
    actions.setSearchField(text)
  ).toEqual(expectedAction);
});

it("handle request API", () => {
  const store = mockStore()
  store.dispatch(actions.requestRobots())
  const action = store.getActions();
  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING,
  };
  expect(action[0]).toEqual(expectedAction);
});
