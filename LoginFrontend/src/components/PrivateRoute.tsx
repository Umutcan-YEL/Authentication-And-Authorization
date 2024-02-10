import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { StateModel } from "../models/StateModel";
const PrivateRoute = () => {
  const admin = useSelector((state: StateModel) => state.admin);
  const isAuthenticated = useSelector(
    (state: StateModel) => state.isAuthenticated
  );

  if (admin && isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
