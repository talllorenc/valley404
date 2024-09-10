import API from "@/config/api";
import { ISignin, ISignup } from "@/types/auth";

export async function signup(data: ISignup) {
	const res = await API.post("/auth/sign-up", data);
	return res.data;
}

export async function signin(data: ISignin) {
	const res = await API.post("/auth/sign-in", data);
	return res.data;
}

export async function checkCode(code: string) {
	const res = await API.post("/auth/check-code", { code });
	return res.data;
}
