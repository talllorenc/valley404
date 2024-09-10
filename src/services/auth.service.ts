import API from "@/config/api";
import { ISignin, ISignup, ISignupResponse } from "@/types/auth";

export async function signup(data: ISignup): Promise<ISignupResponse> {
	return await API.post("/auth/sign-up", data);
}

export async function signin(data: ISignin) {
	return await API.post("/auth/sign-in", data);
}

export async function checkCode(code: string) {
	return await API.post("/auth/check-code", { code });
}

export async function checkToken(token: string) {
	console.log(token);
	return await API.post("/auth/check-token", { token });
}
