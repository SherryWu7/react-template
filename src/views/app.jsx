import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { ConfigProvider, Button } from "antd";
import zhCN from "antd/es/locale-provider/zh_CN";
import RootRouter from "./router";

class App extends React.Component {
  render() {
    return (
      <HashRouter basename="/">
        <ConfigProvider locale={zhCN}>
          <RootRouter />
        </ConfigProvider>
      </HashRouter>
    );
  }
}

export default hot(App);
