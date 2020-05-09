import React, { useEffect } from "react";
import { Button, Tooltip, Result } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { getInfo } from "../../../actions/main";

export default () => {
  useEffect(() => {
    async function loadData() {
      const { status, message, data } = await getInfo({ id: "123" });
    }
    loadData();
  }, []);
  return (
    <div className="page">
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
      </div>
      <div className="site-button-ghost-wrapper">
        <Button type="primary" ghost>
          Primary
        </Button>
        <Button ghost>Default</Button>
        <Button type="dashed" ghost>
          link
        </Button>
        <Button type="link" ghost>
          link
        </Button>
      </div>
    </div>
  );
};
