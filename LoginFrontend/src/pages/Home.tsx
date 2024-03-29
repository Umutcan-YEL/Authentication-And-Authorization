import { useDispatch, useSelector } from "react-redux";
import { StateModel } from "../models/StateModel";
import { Col, Row, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";
import { AppDispatch } from "../redux/store";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const handeClick = () => {
    dispatch(logout());
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  const admin = useSelector((state: StateModel) => state.admin);

  useEffect(() => {}, [admin]);

  return (
    <Row className="center home ">
      <Col>
        {" "}
        <h1>Welcome to Home Page</h1>
        <h3>This is a simple example of a home page.</h3>
        <h3>Try this routes</h3>
        <a onClick={() => navigate("/login")}>/Login</a>
        <br />
        <a onClick={() => navigate("/register")}>/Register</a>
        <br />
        {admin ? (
          <div>
            <a onClick={() => navigate("/admin")}>/Admin</a>
            <h1 style={{ color: "red" }}>Only Admin Can see This Text !</h1>
          </div>
        ) : (
          <h1> user</h1>
        )}
        <Button onClick={handeClick} block type="primary" size="middle">
          Logout
        </Button>
      </Col>
    </Row>
  );
}

export default Home;
