import React, { useState } from "react";
import { Layout, Menu } from "antd";
import menus from "./menus";

const { Sider } = Layout;

export default ({ children }) => {
  let [collapsed, setCollapsed] = useState(false);
  const _renderMenuItem = (list, index = 1) => {
    if (!list.length) return;
    return list.map((item) => {
      if (item.children && item.children.length) {
        return (
          <Menu.SubMenu key={item.code} title={item.name}>
            {_renderMenuItem(item.children, index + 1)}
          </Menu.SubMenu>
        );
      }
      return <Menu.Item key={item.code}>{item.name}</Menu.Item>;
    });
  };
  return (
    <Sider>
      <Menu mode="inline" inlineCollapsed={collapsed}>
        {_renderMenuItem(menus)}
      </Menu>
    </Sider>
  );
};
