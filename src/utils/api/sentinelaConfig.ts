import { BASE_URL_SENTINELA } from '@env';
import axios, { InternalAxiosRequestConfig } from 'axios';

const defaultOptions = {
    baseURL: "https://apilogin.tron.com.br/api/",
    headers: {
        'Content-Type': 'application/json',
    },
};

const instance = axios.create(defaultOptions);

//instance.interceptors.request.use((config) => configureHeaders(config));

export default instance;

