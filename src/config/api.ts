import axios from "axios";

const options = {
	baseURL: "http://localhost:8080",
	withCredentials: true,
};

const API = axios.create(options);

API.interceptors.response.use(
	(response) => {
		return response.data;
	},
	async (error) => {
		if (error.response) {
		}
		return Promise.reject(error);
	},
);

export default API;
