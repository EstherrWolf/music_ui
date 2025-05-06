// create use Update User
import api from "@/shared/api";
import { APP_URL } from "@/shared/constants/apiConstants";
import { useMutation } from "@tanstack/react-query";
import { message } from "antd";

export interface LoginPayload {
  email: string;
  password: string;
}

export const useLogin = () => {
  return useMutation({
    mutationFn: async (payload: LoginPayload) => {
      const response = await api.post(`${APP_URL}/auth/login`, payload);
      return response.data;
    },
    onSuccess: () => {
        
      message.success("Login Successfully");
    },
    onError: (error) => {
      message.error(error.message);
      console.error("Error updating user:", error);
    },
  });
};
