import { Button, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../../components/layout/RegisterForm";
import { useSelector } from "react-redux";
import { StateModel } from "../../models/StateModel";

function Login() {
  const navigate = useNavigate();
  const handeClick = () => {
    navigate("/login");
  };

  const loading = useSelector((state: StateModel) => state.isLoading);

  if (loading == true) {
    return (
      <div className="center">
        <span className="loader"></span>
        <h1>Your account Succesfuly created</h1>
      </div>
    );
  }
  return (
    <Row style={{ minHeight: "100vh" }}>
      <Col span={12}>
        <RegisterForm />
      </Col>
      <Col span={12} className="bluebg ">
        <div className="right-side">
          {" "}
          <h1> Do you already have an account ?</h1>
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
