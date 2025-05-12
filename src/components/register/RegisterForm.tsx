"use client";

import { Typography, Button, Divider, Form, Input, Checkbox } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "@/utils/validation/validationUtils";
import { RegisterPayload } from "@/shared/api/auth.api";
import { useRegister } from "@/hooks/auth/useRegister";

export const RegisterForm = () => {
  const { mutate, isPending } = useRegister();
  const router = useRouter();
  const [form] = Form.useForm();

  const handleSubmit = (values: RegisterPayload) => {
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
          Create Account
        </Typography.Title>
        <Typography.Text className="block text-center mb-6 text-gray-500">
          Start your journey with us today!
        </Typography.Text>

        <Button icon={<GoogleOutlined />} block className="mb-4">
          Sign up with Google
        </Button>

        <Divider>OR</Divider>

        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Please enter your full name" }]}
          >
            <Input placeholder="Nguyen Van A" />
          </Form.Item>

          <Form.Item label="Email" name="email" rules={validateEmail}>
            <Input placeholder="you@example.com" />
          </Form.Item>

          <Form.Item label="Password" name="password" rules={validatePassword}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={validateConfirmPassword}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Checkbox>
              I agree to the <a href="#">Terms & Conditions</a>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="bg-blue-600 hover:bg-blue-700"
              loading={isPending}
            >
              Register
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a className="text-blue-500 hover:underline" href="#">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};
