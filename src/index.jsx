import React, { Component } from "react";
import ReactDom from "react-dom";
import App from "./views/app";
import "./assets/styles/app.less";

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <App />;
  }
}

function startApp() {
  const ele = document.getElementById("app");
  ele && ReactDom.render(<Root />, ele);
}

startApp();
