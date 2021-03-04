import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import App from "./containers/App";
import { searchRobots, requestRobots } from "./reducers";

// br3 is border 3
// pa3 is padding 3
// ma3 is margin 3

//create logger/middleware
const logger = createLogger();

//create root reducers
const rootReducer = combineReducers({ searchRobots, requestRobots });

//create store for searchRobots reducer
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
