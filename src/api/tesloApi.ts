import axios from "axios";

export const BASE_URL = import.meta.env.VITE_APP_URL;

const tesloApi = axios.create({
  baseURL: `${BASE_URL}/api`,
});

// TODO created intercetors
tesloApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { tesloApi };
