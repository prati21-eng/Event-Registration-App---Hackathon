import axios from "axios";
const API = "http://localhost:5000/api/registrations";

export const registerUser = (data) => axios.post(API, data);
export const getRegistrations = () => axios.get(API);
