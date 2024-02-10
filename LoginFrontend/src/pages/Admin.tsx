import { useDispatch } from "react-redux";
import { Col, Row, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";
import { AppDispatch } from "../redux/store";

function Admin() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const handeClick = () => {
    dispatch(logout());
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <Row className="center admin text-white">
      <Col>
        {" "}
        <h1>Welcome to Admin Page</h1>
        <h3>This is a simple example of a admin page.</h3>
        <h3>Try this routes</h3>
        <a onClick={() => navigate("/login")}>/Login</a>
        <br />
        <a onClick={() => navigate("/register")}>/Register</a>
        <br />
        <a onClick={() => navigate("/")}>/Home</a>
        <br />
        <br />
        <Button onClick={handeClick} block type="primary" size="middle">
          Logout
        </Button>
      </Col>
    </Row>
  );
}

export default Admin;
