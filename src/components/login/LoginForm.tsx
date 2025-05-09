"use client";

import { Typography, Button, Divider, Form, Input, Checkbox } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { useLogin } from "@/hooks/auth/useLogin";
import {
  validateEmail,
  validatePassword,
} from "@/utils/validation/validationUtils";
import { useRouter } from "next/navigation";
import { LoginPayload } from "@/shared/api/auth.api";

export const LoginForm = () => {
  const { mutate, isPending } = useLogin();
  const router = useRouter();
  const [form] = Form.useForm();

  const handleSubmit = (values: LoginPayload) => {
    mutate(values, {
      onSuccess() {
        router.replace("/");
      },
    });
  };

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        <Typography.Title level={3} className="text-center mb-1">
          Welcome Back
        </Typography.Title>
        <Typography.Text className="block text-center mb-6 text-gray-500">
          Let’s explore this exciting platform together!
        </Typography.Text>

        <Button icon={<GoogleOutlined />} block className="mb-4">
          Using Google account
        </Button>

        <Divider>OR</Divider>

        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Email" name="email" rules={validateEmail}>
            <Input placeholder="tripconnect@trip.vn" />
          </Form.Item>

          <Form.Item label="Password" name="password" rules={validatePassword}>
            <Input.Password />
          </Form.Item>

          <div className="flex justify-between items-center mb-4">
            <Checkbox>Remember me</Checkbox>
            <a className="text-sm text-blue-500 hover:underline" href="#">
              Forgot password?
            </a>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="bg-blue-600 hover:bg-blue-700"
              loading={isPending}
            >
              Login
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <a className="text-blue-500 hover:underline" href="#">
            Sign Up
          </a>
        </div>
        <div className="text-center text-xs text-gray-400 mt-2">
          By signing in, you agree to our{" "}
          <a className="underline" href="#">
            Terms & Privacy
          </a>
        </div>
      </div>
    </div>
  );
};
