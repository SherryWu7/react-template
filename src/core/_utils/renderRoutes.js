import React from "react";
import { Route, Switch } from "react-router-dom";

export default (routes) =>
  routes ? (
    <Switch>
      {routes.map((route, index) => {
        return (
          <Route
            key={route.key || index}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={(props) => {
              return <route.component {...props} route={route} />;
            }}
          />
        );
      })}
    </Switch>
  ) : null;
