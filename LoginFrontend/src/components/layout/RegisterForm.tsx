import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/slices/authSlice";
import { RegisterModel } from "../../models/RequestModels";
import { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onFinish = (values: RegisterModel) => {
    console.log("Success:", values);
    dispatch(signup(values)).then(() => navigate("/login"));
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
      <Form.Item name="email" label="Email" rules={[{ type: "email" }]}>
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
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}

export default RegisterForm;
