import api from "@/shared/api";
import { APP_URL } from "@/shared/constants/apiConstants";
import { useQuery } from "@tanstack/react-query";

interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

const fetchUserProfile = async (): Promise<UserProfile> => {
  const response = await api.get(`${APP_URL}/users/me`);
  return response.data;
};

export const useProfile = () => {
    return useQuery({
        queryKey: ["profile"],
        queryFn: fetchUserProfile,
      });
}
