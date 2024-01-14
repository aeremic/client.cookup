import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const RouteGuardComponent = () => {
  const { user } = useContext(UserContext);

  return user?.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default RouteGuardComponent;
