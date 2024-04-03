import { Fragment, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useCurrentUserIdentifier from "../hooks/UseCurrentUserIdentifier";

export function PrivateRoute({ children }: { children: ReactNode }) {
  const currentUserGuid = useCurrentUserIdentifier();
  const canAccess = currentUserGuid && currentUserGuid !== "";

  if (canAccess) {
    return <Fragment>{children}</Fragment>;
  }

  return <Navigate to="/login"></Navigate>;
}
