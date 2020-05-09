import React from "react";
import { Layout } from "antd";
import ColorPicker from "../Widgets/ColorPicker";
// import Header from "./Header";
import Sider from "./Sider";
import "./style.less";

const { Header, Content } = Layout;

export default ({ children }) => {
  return (
    <div className="flex-vertical">
      <Header>
        <div className="switch-theme">
          切换主题
          <ColorPicker />
        </div>
      </Header>
      <Layout className="flex-item-1">
        <Sider />
        <Content>{children}</Content>
      </Layout>
    </div>
  );
};
