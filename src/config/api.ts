import axios from "axios";

const options = {
	baseURL: "http://localhost:8080",
	withCredentials: true,
};

const API = axios.create(options);
