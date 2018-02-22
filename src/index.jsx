import React from "react";
import {render} from "react-dom";

import App from "./App";
import New from './New';

import * as style from "./index.css";

const title = "Welcome to React session";

window.onload = () => {
  document.body.innerHTML = '<div id="root"/>';
  render(<New />, document.getElementById("root"));
  module.hot.accept();
};
