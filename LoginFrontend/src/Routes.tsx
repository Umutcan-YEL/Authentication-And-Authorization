import { Routes as Router, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import PrivateRoute from "./components/PrivateRoute";

function Routes() {
  return (
    <Router>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/admin" element={<Admin />} />{" "}
      </Route>
    </Router>
  );
}

export default Routes;
