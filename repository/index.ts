import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

const BASE_URL : string = import.meta.env.VITE_BASE_URL;
const axiosCustom : AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
} as AxiosRequestConfig);
export default axiosCustom;