import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/store/index";
import "./styles/styles.scss";
import RoutingContainer from "./containers/routingContainer";

const store = configureStore({});

render(
  <Provider store={store}>
    <RoutingContainer />
  </Provider>,
  document.getElementById("app-root")
);
