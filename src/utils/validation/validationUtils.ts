import { Rule } from "antd/es/form";

export const validateEmail: Rule[] = [
    { required: true, message: "Please input your email!" },
    {
      type: "email",
      message: "Please input a valid email address!",
    },
  ];
  
  export const validatePassword: Rule[] = [
    { required: true, message: "Please input your password!" },
    {
      min: 6,
      message: "Password must be at least 6 characters long!",
    },
  ];
  