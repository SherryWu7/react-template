import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { ConfigProvider, Button } from "antd";
import zhCN from "antd/es/locale-provider/zh_CN";
import RootRouter from "./router";

class App extends React.Component {
  render() {
    return (
      // <>
      //   <div className="webpack">我的第一个webpack项目</div>
      //   <div className={styles.webpack}>我的第二个webpack项目</div>
      //   <Button
      //     type="primary"
      //     onClick={() => {
      //       window.less.modifyVars({
      //         "@primary-color": "#c00",
      //       });
      //     }}
      //   >
      //     我是antd Button
      //   </Button>
      // </>
      <HashRouter basename="/">
        <ConfigProvider locale={zhCN}>
          <RootRouter />
        </ConfigProvider>
      </HashRouter>
    );
  }
}

export default hot(App);
