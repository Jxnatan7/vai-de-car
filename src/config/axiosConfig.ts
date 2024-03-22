import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "http://172.17.144.1:8080",
});

export const configureAxios = (token: string) => {
  if (token === undefined) {
    return;
  }
  api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default api;
