/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  // console.log(location.pathname);

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login" replace />;
};

export default PrivateRouter;
