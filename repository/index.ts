import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {Toast} from "primereact/toast";
import React from "react";

const BASE_URL : string = import.meta.env.VITE_BASE_URL;
const axiosCustom : AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
} as AxiosRequestConfig);

const toastRef  = React.createRef<Toast>();
axiosCustom.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 400) {
            toastRef.current?.show({
                severity: 'error',
                summary: 'room not found',
                detail: 'This room does not exist on our database, might be professor\'s office',
                life: 2000
            });
        }
        return Promise.reject(error);
    }
);

export {toastRef}
export default axiosCustom;