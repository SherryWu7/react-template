import React, { useEffect } from "react";
import { Result } from "antd";
import { getInfo } from "../../../actions/main";

export default () => {
  useEffect(() => {
    async function loadData() {
      const { status, message, data } = await getInfo({ id: "123" });
    }
    loadData();
  }, []);
  return <Result status="success" subTitle="Home" />;
};
