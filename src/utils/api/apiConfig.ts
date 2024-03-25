import { BASE_URL } from '@env';
import axios, { InternalAxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



const api = {
  baseURL: "https://apismart.tron.com.br/api/",
  headers: {
    'Content-Type': 'application/json',
  },
}

const instance = axios.create(api);

instance.interceptors.request.use(async (config) => {
  // const {
  //   auth: {
  //     authToken,
  //     tenantSelect
  //   },
  // } = store.getState();
  const token = await AsyncStorage.getItem('token');
  const tenant = await AsyncStorage.getItem('tenant');

  return configureHeaders(config, token, tenant);
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error, "eeeeeroor")
    // const {
    //   response: { status },
    // } = error;

    //if (status === 401) store.dispatch(validaToken());

    return error;
  },
);

export default instance;




function configureHeaders(config: InternalAxiosRequestConfig<any>, token: string | null, tenant: string | null) {
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  config.headers.ServiceIdentify = tenant || '';
  config.data = config.data || null;
  return config;
}