"use client";

import { Button, Checkbox, Form, Input, Typography, Divider } from "antd";
import { GoogleOutlined } from "@ant-design/icons";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex bg-[url('/login-bg.jpg')]">
      <div className="w-1/2 relative hidden lg:flex">
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="z-10 p-12 text-white self-center">
          <h1 className="text-4xl font-bold mb-4">SalesFlow</h1>
          <p className="text-lg mb-1">
            Comprehensive sales management solution
          </p>
          <p className="italic text-sm mt-4">
            “Optimize processes – Increase sales – Manage effectively from
            warehouse to customer.”
          </p>
        </div>
      </div>

      {/* Right Side (Login Form) */}
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

          <Form layout="vertical">
            <Form.Item label="Email" name="email">
              <Input placeholder="tripconnect@trip.vn" />
            </Form.Item>
            <Form.Item label="Password" name="password">
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
    </div>
  );
}
