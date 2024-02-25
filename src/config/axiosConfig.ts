import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.4.11:8080',
});

export const configureAxios = (token: string) => {
    if (token === undefined) {
        return;
    }
    api.interceptors.request.use((config: AxiosRequestConfig) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    });
};

export default api;
