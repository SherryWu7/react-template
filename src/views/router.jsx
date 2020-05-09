import React from "react";
import Loadable from "react-loadable";
import { Spin } from "antd";
import renderRoutes from "../core/_utils/renderRoutes";
import MainTemplateLayout from "../components/MainTemplateLayout";

const delay = 100;

const loading = ({ error, pastDelay }) => {
  if (error) {
    console.log("Error：", error);
    return <div>Error： {error.toString()}</div>;
  } else if (pastDelay) {
    return (
      <Spin
        size="large"
        style={{ width: "100%", padding: 100 }}
        tip="Loading..."
      />
    );
  } else {
    return null;
  }
};

const Root = ({}, { route }) => {
  return <MainTemplateLayout>{renderRoutes(route.routes)}</MainTemplateLayout>;
};

export default (props) => {
  const routes = [
    {
      path: "/demo2",
      component: Loadable({
        loader: () => import("./routes/Demo"),
        loading,
        delay,
      }),
    },
    {
      component: Root.bind(this, props),
      routes: [
        {
          path: "/demo",
          component: Loadable({
            loader: () => import("./routes/Demo"),
            loading,
            delay,
          }),
        },
        {
          path: "*",
          component: Loadable({
            loader: () => import("./routes/404"),
            loading,
            delay,
          }),
        },
      ],
    },
  ];
  return renderRoutes(routes);
};
