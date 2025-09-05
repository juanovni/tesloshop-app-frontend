import axios from "axios";

export const BASE_URL = import.meta.env.VITE_APP_URL;

const tesloApi = axios.create({
  baseURL: `${BASE_URL}/api`,
});

// TODO created intercetors

export { tesloApi };
