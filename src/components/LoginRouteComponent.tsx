import { Fragment, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useCurrentUserIdentifier from "../hooks/UseCurrentUserIdentifier";

export function LoginRoute({ children }: { children: ReactNode }) {
  const currentUserEmail = useCurrentUserIdentifier();
  const canAccess = currentUserEmail == null || currentUserEmail === "";

  if (canAccess) {
    return <Fragment>{children}</Fragment>;
  }

  return <Navigate to="/pickitems"></Navigate>;
}
