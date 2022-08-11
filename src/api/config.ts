import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from 'axios';

export const baseApi = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type' : 'application/json'
    }
});

export const privateApi = <T>(config: AxiosRequestConfig, headers?: AxiosRequestHeaders): Promise<AxiosResponse<T>> => {
    
    const header = headers || {};
    return baseApi.request<T>({
        ...config,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token') || ''}`,
            ...header
        }
    });
}

export const publicApi = <T>(config: AxiosRequestConfig, headers?: AxiosRequestHeaders): Promise<AxiosResponse<T>> => {
    
    const header = headers || {};

    return baseApi.request<T>({
        ...config,
        headers: {
            'Content-Type': 'application/json',
            ...header
        }
    });
}

