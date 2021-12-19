import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { selectIsAuthenticated } from "../../store/auth/selectors";

export default function GuestRoute({ children, ...props }) {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <Route {...props}>
      {!isAuthenticated ? children : <Redirect to="/" />}
    </Route>
  );
}
