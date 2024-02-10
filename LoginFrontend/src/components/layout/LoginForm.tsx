import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authSlice";
import { LoginModel } from "../../models/RequestModels";
import { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onFinish = (values: LoginModel) => {
    console.log("Success:", values);
    dispatch(login(values)).then(() => navigate("/"));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="login-form"
      className="login-form"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 10,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <br />
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 10,
        }}
      >
        <Button type="primary" htmlType="submit" size="middle" block>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
