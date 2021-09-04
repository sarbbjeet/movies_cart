import { Route, Redirect } from "react-router-dom";

import React from "react";

//protected the routes from user invalid url entries
export default function StateProtectedRoutes(props) {
  const { path, render, component: Component } = props;
  return (
    <Route
      path={path}
      render={(props) =>
        !props.history.location.state ? (
          <Redirect to={render} />
        ) : (
          <Component {...props} />
        )
      }
    ></Route>
  );
}
