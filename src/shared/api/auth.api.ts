import api from "./index";
import { APP_URL } from "../constants/apiConstants";

export interface LoginPayload {
  email: string;
  password: string;
}

export const login = async (payload: LoginPayload) => {
  const response = await api.post(`${APP_URL}/auth/login`, payload);
  return response.data;
};

export const logout = async () => {
  const response = await api.post(`${APP_URL}/auth/logout`);
  return response.data;
};

