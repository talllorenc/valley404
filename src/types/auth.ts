export interface ISignin {
	email: string;
	password: string;
}

export interface ISignup {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export interface IFormErrors {
	message?: string;
}

export interface IFormSuccess {
	message?: string;
}

export interface ISignupResponse {
	token: string;
	message: string;
}
