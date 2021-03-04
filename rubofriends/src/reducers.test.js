import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
} from "./constants";

import * as reducers from './reducers'

describe('searchRobots', () => {
  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({
      searchField: "",
    });
  })

  it('should handle CHANGE_SEARCHFIELD', () => {
    const initialStateSearch = {
      searchField: "",
    };
  
    expect(reducers.searchRobots(initialStateSearch, {
      type: CHANGE_SEARCH_FIELD,
      payload: 'abc'
    })).toEqual({
      searchField: 'abc'
    })
  })
})

describe('requestRobots', () => {
  const initialSearchRobots = {
    isPending: false,
    robots: [],
    error: "",
  };

  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialSearchRobots)
  })

  it("should handle REQUEST_ROBOTS_PENDING", () => {
    expect(
      reducers.requestRobots(initialSearchRobots, {
        type: REQUEST_ROBOTS_PENDING
      })
    ).toEqual({
      robots: [],
      isPending: true,
      error: ""
    });
  });

  it("should handle REQUEST_ROBOTS_SUCCESS", () => {
    expect(
      reducers.requestRobots(initialSearchRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [{
          id: "123",
        }],
      })
    ).toEqual({
      robots: [{
        id: "123",
      }],
      isPending: false,
      error: "",
    });
  });

  it("should handle REQUEST_ROBOTS_Failed", () => {
    expect(
      reducers.requestRobots(initialSearchRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: [],
      })
    ).toEqual({
      robots: [],
      isPending: false,
      error: [],
    });
  });
})
