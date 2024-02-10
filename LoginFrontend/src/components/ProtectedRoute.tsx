import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { StateModel } from "../models/StateModel";
const ProtectedRoute = () => {
  const isAuthenticated = useSelector(
    (state: StateModel) => state.isAuthenticated
  );
  console.log(isAuthenticated);

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
