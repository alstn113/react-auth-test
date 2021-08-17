import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { tempSetUser } from "./store/reducers/auth";
import { check } from "./store/actions/auth";

const loadUser = () => {
  try {
    const user = localStorage.getItem("user");
    if (!user) return;
    store.dispatch(tempSetUser(JSON.parse(user)));
    store
      .dispatch(check())
      .unwrap()
      .catch(() => {
        try {
          localStorage.removeItem("user");
        } catch (error) {
          console.log("localStorage is not working");
        }
      });
  } catch (error) {
    console.log("localStorage is not working");
  }
};

loadUser();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
