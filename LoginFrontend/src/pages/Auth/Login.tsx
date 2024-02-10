import { Button, Col, Row } from "antd";
import LoginForm from "../../components/layout/LoginForm";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { StateModel } from "../../models/StateModel";

function Login() {
  const navigate = useNavigate();
  const handeClick = () => {
    navigate("/register");
  };

  const loading = useSelector((state: StateModel) => state.isLoading);

  if (loading == true) {
    return (
      <div className="center">
        <span className="loader"></span>
      </div>
    );
  }
  return (
    <Row style={{ minHeight: "100vh" }}>
      <Col span={12}>
        <LoginForm />
      </Col>
      <Col span={12} className="bluebg ">
        <div className="right-side">
          {" "}
          <h1> Don't you have an account ?</h1>
          <br />
          <Button onClick={handeClick} block type="primary" size="middle">
            Register
          </Button>
        </div>
      </Col>
    </Row>
  );
}

export default Login;
