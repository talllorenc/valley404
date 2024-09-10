import API from "@/config/api";
import { ICurrentUserResponse } from "@/types/user";

export const getCurrentUser = async (): Promise<ICurrentUserResponse> => {
	return await API.get("/user/current");
};
