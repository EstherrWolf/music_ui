import { setUser } from "@/providers/auth/reducer/authSlice";
import { AppDispatch } from "@/providers/store";
import api from "@/shared/api";
import { APP_URL } from "@/shared/constants/apiConstants";
import { setStorageData } from "@/shared/store";
import { extractErrorMessage } from "@/utils/ErrorHandle";
import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { useDispatch } from "react-redux";

export interface LoginPayload {
  email: string;
  password: string;
}

export const useLogin = () => {
  const dispatch = useDispatch<AppDispatch>();
  return useMutation({
    mutationFn: async (payload: LoginPayload) => {
      const response = await api.post(`${APP_URL}/auth/login`, payload);
      return response.data;
    },
    onSuccess: (data) => {
      console.log(data, "data");
      
      dispatch(setUser(data.userInfo));
      message.success("Login Successfully");
    },
    onError: (error) => {
      console.log(error);
      
      const msg = extractErrorMessage(error);
      message.error(msg);
    },
  });
};
