export interface ICurrentUserResponse {
	_id: string;
	name: string;
	verified: boolean;
	email: string;
	role: string;
	solutions: string[];
	image?: string;
	createdAt: string;
	updatedAt: string;
}
