import React from "react";
import { useLocation } from "react-router";
import { Redirect } from "react-router-dom";
import { useAuthentication } from "../store/AuthenticationContext";

export const RequiredVisitorAuthentication: React.FC<{
  children: JSX.Element;
}> = ({ children }) => {
  const auth = useAuthentication();
  const location = useLocation();

  if (!auth.authenticatedUser || auth.role !== "ROLE_USER")
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: location },
        }}
      />
    );
  return children;
};
