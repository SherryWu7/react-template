import React from "react";
import { Layout } from "antd";
// import Header from "./Header";
// import Sider from "./Sider";
import "./style.less";

const { Header, Footer, Sider, Content } = Layout;

export default ({ children }) => {
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>{children}</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};
