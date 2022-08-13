import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from "axios"
import { useState } from "react";
import { privateApi } from "../api/config";
import { notificationErrorV1 } from "../utils/notifications/notifications.util";

export const usePostAxios = <R=any>(
    conf?: {
        messageOnError: boolean
    }
) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<AxiosError | null>(null);
    const [result, setResult] = useState<AxiosResponse<R> | null>(null);

    const reset = () => {
        setError(null);
        setResult(null);
        setLoading(false);
    }

    const dispatch = (    
        options: AxiosRequestConfig,
        headers?: AxiosRequestHeaders
    ) => {
        setError(null);
        setResult(null);
        setLoading(true);
        const header = headers || {};
        privateApi<R>({
            ...options,
            method: 'POST'
        }, header)
        .then((r) => {
            setResult(r);
            setLoading(false);
        })
        .catch(e => {
            if(e instanceof AxiosError) {
                setError(e)
                if(conf?.messageOnError){
                    notificationErrorV1(e.response?.data.message, 2.1);
                }
            }else{
                notificationErrorV1('Error', 2.1);
            }
            setResult(null);
            setLoading(false);
        })
    }

    return {
        execute: dispatch,
        result,
        loading,
        error,
        reset
    }
}